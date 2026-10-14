import "./ReconciliationTable.css";

import type {

    ReconciliationItem

} from "../../types/reconciliation";

import ConfidenceBadge from "./ConfidenceBadge";

interface Props {

    items: ReconciliationItem[];

}

export default function ReconciliationTable({

    items

}: Props) {

    return (

        <table className="reconciliationTable">

            <thead>

                <tr>

                    <th>

                        Payment Ref

                    </th>

                    <th>

                        Bank Ref

                    </th>

                    <th>

                        Amount

                    </th>

                    <th>

                        Status

                    </th>

                    <th>

                        AI

                    </th>

                </tr>

            </thead>

            <tbody>

                {

                    items.length ?

                        items.map(item => (

                            <tr key={item.reconciliation_id}>

                                <td>

                                    {item.payment_reference}

                                </td>

                                <td>

                                    {item.bank_reference ?? "-"}

                                </td>

                                <td>

                                    {item.payment_amount.toLocaleString()}

                                </td>

                                <td>

                                    {item.status}

                                </td>

                                <td>

                                    <ConfidenceBadge

                                        confidence={item.ai_confidence}

                                    />

                                </td>

                            </tr>

                        ))

                        :

                        <tr>

                            <td colSpan={5}>

                                No reconciliation results.

                            </td>

                        </tr>

                }

            </tbody>

        </table>

    );

}