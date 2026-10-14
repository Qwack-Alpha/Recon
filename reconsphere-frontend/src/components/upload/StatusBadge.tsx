import "./StatusBadge.css";
interface Props {
    status: string;
}
export default function StatusBadge({ status }: Props) {
    return (
        <span className={"status " + status.toLowerCase()}>
            {status}
        </span>
    );
}