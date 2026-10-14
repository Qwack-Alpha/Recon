import api from "../api/client";
import type {
    DashboardReport,
    ReportRequest,
    ReportResponse,
} from "../types/report";
export async function getDashboardReport(): Promise<DashboardReport> {
    const response = await api.get<DashboardReport>(
        "/reports/dashboard",
    );
    return response.data;
}
export async function exportReport(
    request: ReportRequest,
): Promise<ReportResponse> {
    const response = await api.post<ReportResponse>(
        "/reports/export",
        request,
    );
    return response.data;
}

export async function downloadReport(
    reportName: string,
): Promise<void> {
    const response = await api.get(
        `/reports/download/${reportName}`,
        { responseType: "blob" },
    );
    const url = window.URL.createObjectURL(
        new Blob([response.data]),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = reportName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
}
