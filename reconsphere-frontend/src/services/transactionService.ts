import api from "../api/client";

import type{

TransactionSummary,

TransactionDetail

}from"../types/transaction";

export async function getTransactions(){

const response=

await api.get<TransactionSummary[]>(

"/transactions"

);

return response.data;

}

export async function getTransaction(

id:string

){

const response=

await api.get<TransactionDetail>(

`/transactions/${id}`

);

return response.data;

}
