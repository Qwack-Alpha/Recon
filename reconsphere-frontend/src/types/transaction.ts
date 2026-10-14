export interface TransactionSummary{

id:string;

transaction_reference:string;

end_to_end_id:string;

bank:string;

payment_date:string;

amount:number;

currency:string;

status:string;

}

export interface TransactionDetail{

id:string;

transaction_reference:string;

end_to_end_id:string;

sender_name:string;

receiver_name:string;

sender_account:string;

receiver_account:string;

amount:number;

currency:string;

payment_date:string;

settlement_date:string|null;

payment_type:string;

status:string;

raw_json:Record<string,unknown>|null;

}
