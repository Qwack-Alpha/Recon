import "./UploadStatistics.css";
import {
    MdCloudUpload,
    MdCheckCircle,
    MdSync,
    MdError,
} from "react-icons/md";
import { StatCard } from "../common";
import type { PaymentFile } from "../../types/file";
interface Props {
    files: PaymentFile[];
}
export default function UploadStatistics({ files }: Props) {
    const uploaded = files.length;
    const completed = files.filter(
        x => x.processing_status === "COMPLETED",
    ).length;
    const processing = files.filter(
        x => x.processing_status === "PROCESSING",
    ).length;
    const failed = files.filter(
        x => x.processing_status === "FAILED",
    ).length;
    return (
        <div className="uploadStats">
            <StatCard
                title="Uploaded"
                value={uploaded}
                icon={<MdCloudUpload />}
            />
            <StatCard
                title="Completed"
                value={completed}
                icon={<MdCheckCircle />}
            />
            <StatCard
                title="Processing"
                value={processing}
                icon={<MdSync />}
            />
            <StatCard
                title="Failed"
                value={failed}
                icon={<MdError />}
            />
        </div>
    );
}