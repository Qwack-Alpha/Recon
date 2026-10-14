import api from "../api/client";

import type{

ExceptionSummary,

AssignExceptionRequest,

ResolveExceptionRequest

}from"../types/exception";

export async function getExceptions(){

const response=

await api.get<ExceptionSummary[]>(

"/exceptions"

);

return response.data;

}

export async function assignException(

id:string,

request:AssignExceptionRequest

){

await api.put(

`/exceptions/${id}/assign`,

request

);

}

export async function resolveException(

id:string,

request:ResolveExceptionRequest

){

await api.put(

`/exceptions/${id}/status`,

request

);

}
