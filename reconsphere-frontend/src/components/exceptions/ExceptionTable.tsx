import "./ExceptionTable.css";

import type { ExceptionSummary } from "../../types/exception";

import SeverityBadge from "./SeverityBadge";

interface Props {

    items: ExceptionSummary[];

    canAssign: boolean;

    canResolve: boolean;

    onAssign: (item: ExceptionSummary) => void;

    onResolve: (item: ExceptionSummary) => void;

}

export default function ExceptionTable({

    items,

    canAssign,

    canResolve,

    onAssign,

    onResolve,

}: Props) {

    const showActions = canAssign || canResolve;

    return (

        <table className="exceptionTable">

            <thead>

                <tr>

                    <th>Reference</th>

                    <th>Severity</th>

                    <th>Status</th>

                    <th>Assigned</th>

                    {showActions && <th>Actions</th>}

                </tr>

            </thead>

            <tbody>

                {items.map(item => {

                    const isAssigned = !!item.assigned_to;

                    const isResolved =
                        item.status === "RESOLVED";

                    return (

                        <tr key={item.id}>

                            <td>{item.related_reference}</td>

                            <td>

                                <SeverityBadge
                                    severity={item.severity}
                                />

                            </td>

                            <td>{item.status}</td>

                            <td>{item.assigned_to ?? "-"}</td>

                            {showActions && (

                                <td>

                                    {canAssign && (

                                        <button

                                            className="actionButton"

                                            disabled={
                                                isAssigned ||
                                                isResolved
                                            }

                                            onClick={() =>
                                                onAssign(item)
                                            }

                                        >

                                            {isAssigned
                                                ? "Assigned ✓"
                                                : "Assign"}

                                        </button>

                                    )}

                                    {canResolve && (

                                        <button

                                            className="actionButton"

                                            disabled={
                                                !isAssigned ||
                                                isResolved
                                            }

                                            onClick={() =>
                                                onResolve(item)
                                            }

                                        >

                                            {isResolved
                                                ? "Resolved ✓"
                                                : "Resolve"}

                                        </button>

                                    )}

                                </td>

                            )}

                        </tr>

                    );

                })}

            </tbody>

        </table>

    );

}