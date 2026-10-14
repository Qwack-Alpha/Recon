import "./TransactionDrawer.css";

import type{

TransactionDetail

}from"../../types/transaction";

interface Props{

transaction:TransactionDetail|null;

onClose:()=>void;

}

export default function TransactionDrawer({

transaction,

onClose

}:Props){

if(!transaction){

return null;

}

return(

<div className="drawerOverlay">

<div className="drawer">

<div className="drawerHeader">

<h2>

Transaction Details

</h2>

<button

onClick={onClose}

>

?

</button>

</div>

<div className="drawerBody">

<p>

<b>

Reference

</b>

<br/>

{transaction.transaction_reference}

</p>

<p>

<b>

Sender

</b>

<br/>

{transaction.sender_name}

</p>

<p>

<b>

Receiver

</b>

<br/>

{transaction.receiver_name}

</p>

<p>

<b>

Amount

</b>

<br/>

{transaction.amount.toLocaleString()} {transaction.currency}

</p>

<p>

<b>

Status

</b>

<br/>

{transaction.status}

</p>

<p>

<b>

Payment Date

</b>

<br/>

{

new Date(

transaction.payment_date

).toLocaleString()

}

</p>

</div>

</div>

</div>

);

}
