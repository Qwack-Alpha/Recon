import "./UploadCard.css";

import { useState } from "react";

import { Card } from "../common";

type Kind = "payment" | "bank" | "aml" | "fx" | "correspondent" | "settlement";

interface Props {
    loading: boolean;
    onUpload: (bankId: string, files: Record<Kind, File | null>) => void;
}

const KINDS: { key: Kind; label: string }[] = [
    { key: "payment", label: "Payment File" },
    { key: "bank", label: "Bank Statement" },
    { key: "aml", label: "AML Screening" },
    { key: "fx", label: "FX Conversion" },
    { key: "correspondent", label: "Correspondent" },
    { key: "settlement", label: "Settlement" },
];

export default function UploadCard({ loading, onUpload }: Props) {

    const [bankId, setBankId] = useState("");

    const [files, setFiles] = useState<Record<Kind, File | null>>({
        payment: null,
        bank: null,
        aml: null,
        fx: null,
        correspondent: null,
        settlement: null,
    });

    function set(key: Kind, file: File | null) {
        setFiles(prev => ({ ...prev, [key]: file }));
    }

    function submit() {
        if (!bankId.trim()) {
            alert("Enter Bank Id.");
            return;
        }
        if (!Object.values(files).some(Boolean)) {
            alert("Choose at least one file.");
            return;
        }
        onUpload(bankId, files);
    }

    return (
        <Card>
            <div className="uploadGrid">
                <div>
                    <label>Bank Id</label>
                    <input
                        value={bankId}
                        onChange={e => setBankId(e.target.value)}
                    />
                </div>
                {KINDS.map(k => (
                    <div key={k.key}>
                        <label>{k.label} (optional)</label>
                        <input
                            type="file"
                            accept=".csv,.xlsx,.xls"
                            onChange={e =>
                                set(k.key, e.target.files?.[0] ?? null)
                            }
                        />
                    </div>
                ))}
            </div>
            <button
                className="uploadButton"
                disabled={loading}
                onClick={submit}
            >
                {loading ? "Uploading..." : "Upload & Normalize"}
            </button>
        </Card>
    );
}
