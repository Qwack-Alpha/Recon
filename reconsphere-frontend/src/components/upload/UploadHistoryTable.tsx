import "./UploadHistoryTable.css";
import type {
    PaymentFile,
    FileStatus,
} from "../../types/file";
import SearchBox from "../common/SearchBox/SearchBox";
import StatusBadge from "./StatusBadge";
interface Props {
    files: PaymentFile[];
    search: string;
    status: "ALL" | FileStatus;
    onSearch: (value: string) => void;
    onStatusChange: (status: "ALL" | FileStatus) => void;
}
export default function UploadHistoryTable({
    files,
    search,
    status,
    onSearch,
    onStatusChange,
}: Props) {
    return (
        <>
            <div className="historyToolbar">
                <SearchBox
                    value={search}
                    placeholder="Search payment files..."
                    onChange={onSearch}
                />
                <select
                    value={status}
                    onChange={e =>
                        onStatusChange(e.target.value as "ALL" | FileStatus)
                    }
                >
                    <option value="ALL">All Status</option>
                    <option value="UPLOADED">Uploaded</option>
                    <option value="VALIDATING">Validating</option>
                    <option value="PROCESSING">Processing</option>
                    <option value="COMPLETED">Completed</option>
                    <option value="FAILED">Failed</option>
                </select>
            </div>
            <table className="historyTable">
                <thead>
                    <tr>
                        <th>Filename</th>
                        <th>Bank</th>
                        <th>Type</th>
                        <th>Records</th>
                        <th>Status</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {files.length ? (
                        files.map(file => (
                            <tr key={file.id}>
                                <td>{file.file_name}</td>
                                <td>{file.bank_id}</td>
                                <td>{file.file_type}</td>
                                <td>
                                    {file.valid_records}/{file.total_records}
                                </td>
                                <td>
                                    <StatusBadge status={file.processing_status} />
                                </td>
                                <td>
                                    {new Date(file.created_at).toLocaleString()}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>No files found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
}