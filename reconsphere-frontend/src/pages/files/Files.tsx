import "./Files.css";
import { useMemo, useState } from "react";
import {
    Card,
    EmptyState,
    Loader,
    PageContainer,
    SectionHeader,
} from "../../components/common";
import { useFiles } from "../../hooks/useFiles";
import { usePermissions } from "../../auth/usePermissions";
import type { FileStatus } from "../../types/file";
import UploadCard from "../../components/upload/UploadCard";
import UploadHistoryTable from "../../components/upload/UploadHistoryTable";
import UploadStatistics from "../../components/upload/UploadStatistics";
export default function Files() {
    const { files, upload } = useFiles();
    const { can } = usePermissions();
    const canUpload = can("files.upload");
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<"ALL" | FileStatus>("ALL");
    const allFiles = files.data ?? [];
    const filtered = useMemo(() => {
        return allFiles.filter(file => {
            const searchMatch = file.file_name
                .toLowerCase()
                .includes(search.toLowerCase());
            const statusMatch =
                status === "ALL" || file.processing_status === status;
            return searchMatch && statusMatch;
        });
    }, [allFiles, search, status]);
    if (files.isLoading) {
        return <Loader />;
    }
    if (files.isError) {
        return (
            <EmptyState
                title="Unable to load payment files"
                message="Please refresh the page."
            />
        );
    }
    return (
        <PageContainer>
            <SectionHeader
                title="Payment Files"
                subtitle="Upload, manage and monitor payment files."
            />
            <UploadStatistics files={allFiles} />
            {canUpload && (
                <UploadCard
                    loading={upload.isPending}
                    onUpload={(bankId, files) => {
                        upload.mutate({ bankId, files });
                    }}
                />
            )}
            <Card>
                <UploadHistoryTable
                    files={filtered}
                    search={search}
                    status={status}
                    onSearch={setSearch}
                    onStatusChange={setStatus}
                />
            </Card>
        </PageContainer>
    );
}