export interface ReconciliationItem {

    reconciliation_id: string;

    payment_transaction_id: string;

    bank_transaction_id: string | null;

    payment_reference: string;

    bank_reference: string | null;

    payment_amount: number;

    bank_amount: number | null;

    payment_currency: string;

    bank_currency: string | null;

    ai_confidence: number;

    status: string;

}
