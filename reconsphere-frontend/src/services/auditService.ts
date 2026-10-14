import api from "../api/client";
import type { AuditLogResponse } from "../types/audit";
export async function getAuditLogs(): Promise<AuditLogResponse> {
    const response = await api.get<AuditLogResponse>(
        "/audit",
    );
    return response.data;
}