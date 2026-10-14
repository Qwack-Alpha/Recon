import "./Reconciliation.css";

import { useMemo, useState } from "react";

import {
    Card,
    Loader,
    EmptyState,
    PageContainer,
    SectionHeader,
} from "../../components/common";

import { useReconciliation } from "../../hooks/useReconciliation";

import ReconciliationStatistics from "../../components/reconciliation/ReconciliationStatistics";
import ReconciliationFilters from "../../components/reconciliation/ReconciliationFilters";
import ReconciliationTable from "../../components/reconciliation/ReconciliationTable";

export default function Reconciliation() {

    const {
        results,
        run,
    } = useReconciliation();

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("ALL");

    const filtered = useMemo(() => {

        const data = results.data ?? [];

        return data.filter(item => {

            const searchMatch =
                item.payment_reference
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const statusMatch =
                status === "ALL" ||
                item.status === status;

            return searchMatch && statusMatch;

        });

    }, [results.data, search, status]);

    if (results.isLoading) {
        return <Loader />;
    }

    if (results.isError) {

        return (

            <EmptyState
                title="Unable to load reconciliation results"
                message="Please refresh the page."
            />

        );

    }

    return (

        <PageContainer>

            <SectionHeader
                title="Reconciliation"
                subtitle="AI-assisted reconciliation workspace"
            />

            <button
                className="runReconBtn"
                disabled={run.isPending}
                onClick={() => run.mutate()}
            >
                {run.isPending ? "Running..." : "Run Today's Reconciliation"}
            </button>

            <ReconciliationStatistics
                items={results.data ?? []}
            />

            <Card>

                <ReconciliationFilters
                    search={search}
                    status={status}
                    onSearch={setSearch}
                    onStatusChange={setStatus}
                />

                <ReconciliationTable
                    items={filtered}
                />

            </Card>

        </PageContainer>

    );

}
