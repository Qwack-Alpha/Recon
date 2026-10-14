import "./TransactionStatistics.css";

import{

MdPayments,

MdCheckCircle,

MdWarning,

MdAttachMoney

}from"react-icons/md";

import{

StatCard

}from"../common";

import type{

TransactionSummary

}from"../../types/transaction";

interface Props{

transactions:TransactionSummary[];

}

export default function TransactionStatistics({

transactions

}:Props){

const total=

transactions.length;

const successful=

transactions.filter(

x=>x.status==="SUCCESS"

).length;

const exceptions=

transactions.filter(

x=>

x.status!=="SUCCESS"

).length;

const amount=

transactions.reduce(

(sum,item)=>sum+item.amount,

0

);

return(

<div className="transactionStats">

<StatCard

title="Transactions"

value={total}

icon={<MdPayments/>}

/>

<StatCard

title="Successful"

value={successful}

icon={<MdCheckCircle/>}

/>

<StatCard

title="Exceptions"

value={exceptions}

icon={<MdWarning/>}

/>

<StatCard

title="Amount"

value={amount.toLocaleString()}

icon={<MdAttachMoney/>}

/>

</div>

);

}
