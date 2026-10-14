import "./CaseDetailsDrawer.css";

import { useState } from "react";

import type {
    InvestigationCaseResponse
} from "../../types/case";

import type {
    AIInsightResponse
} from "../../types/ai";

import {
    explain
} from "../../services/aiService";

interface Props {
    detail: InvestigationCaseResponse | null;
    onClose: () => void;
}

export default function CaseDetailsDrawer({
    detail,
    onClose
}: Props) {

    const [loading, setLoading] = useState(false);

    const [analysis, setAnalysis] =
        useState<AIInsightResponse | null>(null);

    if (!detail) {
        return null;
    }

    const caseId = detail.overview.id;

    async function analyze() {

        setLoading(true);

        try {

            const result = await explain(caseId);

            setAnalysis(result);

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="drawerOverlay">

            <div className="drawer">

                <div className="drawerHeader">

                    <h2>{detail.overview.case_number}</h2>

                    <button onClick={onClose}>✕</button>

                </div>

                <p className="drawerSubtitle">

                    Transaction:

                    <strong>

                        {" "}

                        {detail.overview.transaction_reference}

                    </strong>

                </p>

                <p className="drawerTitle">

                    {detail.overview.title}

                </p>

                <button

                    className="analyzeBtn"

                    disabled={loading}

                    onClick={analyze}

                >

                    {loading

                        ? "Analyzing..."

                        : "Generate Investigation Report"}

                </button>

                <h3>Executive Summary</h3>

                <p>

                    {analysis?.summary ??

                        "Click 'Generate Investigation Report' to generate an investigation report."}

                </p>

                <h3>Root Cause</h3>

                <p>

                    {analysis?.root_cause ??

                        "-"}

                </p>

                <h3>Business Impact</h3>

                <p>

                    {analysis?.business_impact ??

                        "-"}

                </p>

                <h3>Operational Domain</h3>

                <p>

                    {analysis?.operational_domain ??

                        "-"}

                </p>

                {analysis && (

                    <p className="confidence">

                        Confidence: {analysis.confidence}%

                    </p>

                )}

                {analysis?.evidence?.length ? (

                    <>

                        <h3>Evidence</h3>

                        <table className="evidenceTable">

                            <thead>

                                <tr>

                                    <th>Field</th>

                                    <th>Payment</th>

                                    <th>Bank</th>

                                    <th>Result</th>

                                </tr>

                            </thead>

                            <tbody>

                                {analysis.evidence.map((item, index) => (

                                    <tr key={index}>

                                        <td>{item.field}</td>

                                        <td>{item.payment}</td>

                                        <td>{item.bank}</td>

                                        <td>{item.result}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </>

                ) : null}

                {analysis?.recommended_actions?.length ? (

                    <>

                        <h3>Recommended Actions</h3>

                        <ul className="recommendationList">

                            {analysis.recommended_actions.map((action, index) => (

                                <li key={index}>

                                    ✓ {action}

                                </li>

                            ))}

                        </ul>

                    </>

                ) : null}

            </div>

        </div>

    );

}