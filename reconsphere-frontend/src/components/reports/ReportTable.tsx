import "./ReportTable.css";
import type { DashboardReport } from "../../types/report";
interface Props {
    report?: DashboardReport;
}
export default function ReportTable({ report }: Props) {
    const total = report?.total_transactions ?? 0;
    const matched = report?.matched ?? 0;
    const matchRate = total > 0 ? Math.round((matched / total) * 100) : 0;
    const rows: Array<{ label: string; value: number }> = [
        { label: "Total Transactions", value: report?.total_transactions ?? 0 },
        { label: "Matched", value: report?.matched ?? 0 },
        { label: "Unmatched", value: report?.unmatched ?? 0 },
        { label: "Exceptions", value: report?.exceptions ?? 0 },
    ];
    return (
        <table className="reportTable">
            <thead>
                <tr>
                    <th>Metric</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr key={row.label}>
                        <td>{row.label}</td>
                        <td>{row.value}</td>
                    </tr>
                ))}
                <tr className="rateRow">
                    <td>Match Rate</td>
                    <td>
                        <div className="rateBar">
                            <div
                                className="rateFill"
                                style={{ width: `${matchRate}%` }}
                            />
                            <span>{matchRate}%</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}