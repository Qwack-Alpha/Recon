import "./Cases.css";

import {useState} from "react";

import{

Loader,
EmptyState,
Card,
PageContainer,
SectionHeader

}from"../../components/common";

import{

useCases

}from"../../hooks/useCases";

import{

getCase

}from"../../services/caseService";

import type{

InvestigationCaseResponse

}from"../../types/case";

import CaseStatistics from "../../components/cases/CaseStatistics";
import CaseFilters from "../../components/cases/CaseFilters";
import CaseTable from "../../components/cases/CaseTable";
import CaseDetailsDrawer from "../../components/cases/CaseDetailsDrawer";

export default function Cases(){

const{

cases

}=useCases();

const[search,setSearch]=useState("");

const[status,setStatus]=useState("ALL");

const[detail,setDetail]=useState<InvestigationCaseResponse|null>(null);

async function openCase(id:string){

const data=await getCase(id);

setDetail(data);

}

if(cases.isLoading){

return<Loader/>;

}

if(cases.isError){

return(

<EmptyState

title="Unable to load cases"

message="Please refresh."

/>

);

}

const filtered=(cases.data??[]).filter(x=>{

const s=x.case_number.toLowerCase().includes(search.toLowerCase());

const st=status==="ALL"||x.status===status;

return s&&st;

});

return(

<PageContainer>

<SectionHeader

title="Investigation Cases"

subtitle="Manage investigation workflow."

/>

<CaseStatistics items={cases.data??[]}/>

<Card>

<CaseFilters

search={search}

status={status}

onSearch={setSearch}

onStatusChange={setStatus}

/>

<CaseTable

items={filtered}

onOpen={openCase}

/>

</Card>

<CaseDetailsDrawer

detail={detail}

onClose={()=>setDetail(null)}

/>

</PageContainer>

);

}
