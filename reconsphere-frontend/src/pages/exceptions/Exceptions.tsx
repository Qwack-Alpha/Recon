import "./Exceptions.css";
import { useMemo, useState } from "react";
import {
    Card,
    EmptyState,
    Loader,
    PageContainer,
    SectionHeader,
} from "../../components/common";
import { useExceptions } from "../../hooks/useExceptions";
import { usePermissions } from "../../auth/usePermissions";
import type { ExceptionSummary } from "../../types/exception";
import ExceptionFilters from "../../components/exceptions/ExceptionFilters";
import ExceptionStatistics from "../../components/exceptions/ExceptionStatistics";
import ExceptionTable from "../../components/exceptions/ExceptionTable";
import AssignDialog from "../../components/exceptions/AssignDialog";
import ResolveDialog from "../../components/exceptions/ResolveDialog";
export default function Exceptions() {
    const { exceptions, assign, resolve } = useExceptions();
    const { can } = usePermissions();
    const canAssign = can("exceptions.assign");
    const canResolve = can("exceptions.resolve");
    const [search, setSearch] = useState("");
    const [severity, setSeverity] = useState("ALL");
    const [assignTarget, setAssignTarget] = useState<ExceptionSummary | null>(
        null,
    );
    const [resolveTarget, setResolveTarget] = useState<ExceptionSummary | null>(
        null,
    );
    const allExceptions = exceptions.data ?? [];
    const filtered = useMemo(() => {
        return allExceptions.filter(item => {
            const searchMatch = item.related_reference
                .toLowerCase()
                .includes(search.toLowerCase());
            const severityMatch =
                severity === "ALL" || item.severity === severity;
            return searchMatch && severityMatch;
        });
    }, [allExceptions, search, severity]);
    if (exceptions.isLoading) {
        return <Loader />;
    }
    if (exceptions.isError) {
        return (
            <EmptyState
                title="Unable to load exceptions"
                message="Please refresh the page."
            />
        );
    }
    return (
        <PageContainer>
            <SectionHeader
                title="Exception Workspace"
                subtitle="Review, assign and resolve reconciliation exceptions."
            />
            <ExceptionStatistics items={allExceptions} />
            <Card>
                <ExceptionFilters
                    search={search}
                    severity={severity}
                    onSearch={setSearch}
                    onSeverityChange={setSeverity}
                />
                {filtered.length ? (
                    <ExceptionTable
                        items={filtered}
                        canAssign={canAssign}
                        canResolve={canResolve}
                        onAssign={setAssignTarget}
                        onResolve={setResolveTarget}
                    />
                ) : (
                    <EmptyState
                        title="No exceptions found"
                        message="Adjust your filters to see more results."
                    />
                )}
            </Card>
            {canAssign && (
                <AssignDialog
                    item={assignTarget}
                    loading={assign.isPending}
                    onClose={() => setAssignTarget(null)}
                    onSubmit={userId => {
                        if (!assignTarget) {
                            return;
                        }
                        assign.mutate(
                            { id: assignTarget.id, user_id: userId },
                            { onSuccess: () => setAssignTarget(null) },
                        );
                    }}
                />
            )}
            {canResolve && (
                <ResolveDialog
                    item={resolveTarget}
                    loading={resolve.isPending}
                    onClose={() => setResolveTarget(null)}
                    onSubmit={notes => {
                        if (!resolveTarget) {
                            return;
                        }
                        resolve.mutate(
                            {
                                id: resolveTarget.id,
                                resolution_notes: notes,
                            },
                            { onSuccess: () => setResolveTarget(null) },
                        );
                    }}
                />
            )}
        </PageContainer>
    );
}