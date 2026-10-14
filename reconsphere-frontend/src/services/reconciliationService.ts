import api from "../api/client";

import type {

    ReconciliationItem

} from "../types/reconciliation";

export async function getResults() {

    const response =

        await api.get<ReconciliationItem[]>(

            "/reconciliation/results"

        );

    return response.data;

}

export async function runReconciliation() {

    await api.post(

        "/reconciliation/run"

    );

}
