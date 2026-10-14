import "./AuditTable.css";
import type { AuditLogItem } from "../../types/audit";
interface Props {
    items: AuditLogItem[];
}
export default function AuditTable({ items }: Props) {
    return (
        <table className="auditTable">
            <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>User</th>
                    <th>Action</th>
                    <th>Entity</th>
                    <th>Entity Id</th>
                    <th>IP Address</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {items.length ? (
                    items.map((log, index) => (
                        <tr key={`${log.entity_id}-${index}`}>
                            <td>{new Date(log.timestamp).toLocaleString()}</td>
                            <td>{log.user}</td>
                            <td>{log.action}</td>
                            <td>{log.entity}</td>
                            <td>{log.entity_id}</td>
                            <td>{log.ip_address ?? "-"}</td>
                            <td>{log.details ?? "-"}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={7}>No audit records found.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}