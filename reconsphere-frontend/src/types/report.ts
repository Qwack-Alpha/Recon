export interface DashboardReport {
    total_transactions: number;
    matched: number;
    unmatched: number;
    exceptions: number;
}
export interface ReportRequest {
    report_type: string;
    start_date: string;
    end_date: string;
    format?: string;
}
export interface ReportResponse {
    report_name: string;
    report_url: string;
    generated_at: string;
}