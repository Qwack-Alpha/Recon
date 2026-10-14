import "./Transactions.css";

import {

useMemo,

useState

} from "react";

import {

Card,

EmptyState,

Loader,

PageContainer,

SectionHeader

} from "../../components/common";

import {

useTransactions

} from "../../hooks/useTransactions";

import {

getTransaction

} from "../../services/transactionService";

import type {

TransactionDetail

} from "../../types/transaction";

import TransactionStatistics from "../../components/transactions/TransactionStatistics";

import TransactionFilters from "../../components/transactions/TransactionFilters";

import TransactionTable from "../../components/transactions/TransactionTable";

import TransactionDrawer from "../../components/transactions/TransactionDrawer";

export default function Transactions(){

const{

transactions

}=useTransactions();

const[

search,

setSearch

]=useState("");

const[

status,

setStatus

]=useState("ALL");

const[

selected,

setSelected

]=useState<TransactionDetail|null>(null);

const filtered=

useMemo(()=>{

const data=

transactions.data??[];

return data.filter(item=>{

const searchMatch=

item.transaction_reference

.toLowerCase()

.includes(

search.toLowerCase()

);

const statusMatch=

status==="ALL"||

item.status===status;

return searchMatch&&statusMatch;

});

},[

transactions.data,

search,

status

]);

async function openDrawer(

id:string

){

const detail=

await getTransaction(id);

setSelected(detail);

}

if(transactions.isLoading){

return<Loader/>;

}

if(transactions.isError){

return(

<EmptyState

title="Unable to load transactions"

message="Please refresh the page."

/>

);

}

return(

<PageContainer>

<SectionHeader

title="Transactions"

subtitle="Search and inspect payment transactions."

/>

<TransactionStatistics

transactions={

transactions.data??[]

}

/>

<Card>

<TransactionFilters

search={search}

status={status}

onSearch={setSearch}

onStatusChange={setStatus}

/>

<TransactionTable

transactions={filtered}

onSelect={openDrawer}

/>

</Card>

<TransactionDrawer

transaction={selected}

onClose={()=>setSelected(null)}

/>

</PageContainer>

);

}
