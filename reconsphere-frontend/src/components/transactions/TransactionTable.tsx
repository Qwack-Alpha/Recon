import "./TransactionTable.css";

import type{

TransactionSummary

}from"../../types/transaction";

interface Props{

transactions:TransactionSummary[];

onSelect:(id:string)=>void;

}

export default function TransactionTable({

transactions,

onSelect

}:Props){

return(

<table className="transactionTable">

<thead>

<tr>

<th>

Reference

</th>

<th>

Bank

</th>

<th>

Amount

</th>

<th>

Currency

</th>

<th>

Status

</th>

<th>

Date

</th>

</tr>

</thead>

<tbody>

{

transactions.length?

transactions.map(item=>(

<tr

key={item.id}

onClick={()=>onSelect(item.id)}

>

<td>

{item.transaction_reference}

</td>

<td>

{item.bank}

</td>

<td>

{item.amount.toLocaleString()}

</td>

<td>

{item.currency}

</td>

<td>

{item.status}

</td>

<td>

{

new Date(

item.payment_date

).toLocaleDateString()

}

</td>

</tr>

))

:

<tr>

<td colSpan={6}>

No transactions found.

</td>

</tr>

}

</tbody>

</table>

);

}
