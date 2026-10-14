export type FileStatus =
    | "UPLOADED"
    | "VALIDATING"
    | "PROCESSING"
    | "COMPLETED"
    | "FAILED";
export interface PaymentFile {
    id: string;
    bank_id: string;
    file_name: string;
    original_name: string;
    blob_url: string;
    file_type: string;
    processing_status: string;
    total_records: number;
    valid_records: number;
    invalid_records: number;
    created_at: string;
}
export interface FileFilter {
    search: string;
    status: "ALL" | FileStatus;
}