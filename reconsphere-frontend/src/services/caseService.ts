import api from "../api/client";

import type{

InvestigationCaseSummary,

InvestigationCaseResponse,

CaseComment,

CaseAttachment

}from"../types/case";

export async function getCases(){

const response=

await api.get<InvestigationCaseSummary[]>(

"/cases"

);

return response.data;

}

export async function getCase(

id:string

){

const response=

await api.get<InvestigationCaseResponse>(

`/cases/${id}`

);

return response.data;

}

export async function updateCaseStatus(

id:string,

status:string

){

await api.put(

`/cases/${id}/status`,

null,

{

params:{status}

}

);

}

export async function addComment(

id:string,

comment:string

){

const response=

await api.post<CaseComment>(

`/cases/${id}/comments`,

null,

{

params:{comment}

}

);

return response.data;

}

export async function addAttachment(

id:string,

file_name:string,

blob_url:string

){

const response=

await api.post<CaseAttachment>(

`/cases/${id}/attachments`,

null,

{

params:{

file_name,

blob_url

}

}

);

return response.data;

}
