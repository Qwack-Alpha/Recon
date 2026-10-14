
export interface AuditLogItem {
    timestamp: string;
    user: string;
    action: string;
    entity: string;
    entity_id: string;
    ip_address: string | null;
    details: string | null;
}
export interface AuditLogResponse {
    total_records: number;
    logs: AuditLogItem[];
}
