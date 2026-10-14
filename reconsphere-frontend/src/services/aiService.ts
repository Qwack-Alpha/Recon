import api from "../api/client";

import type{

AIQuestionRequest,

AIChatResponse,

ConversationHistoryResponse,

AIInsightResponse

}from"../types/ai";

export async function chat(

request:AIQuestionRequest

){

const response=

await api.post<AIChatResponse>(

"/ai/chat",

request

);

return response.data;

}

export async function history(){

const response=

await api.get<ConversationHistoryResponse>(

"/ai/history"

);

return response.data;

}

export async function explain(

caseId:string

){

const response=

await api.post<AIInsightResponse>(

`/ai/explain/${caseId}`

);

return response.data;

}

export async function recommend(

caseId:string

){

const response=

await api.post<AIInsightResponse>(

`/ai/recommend/${caseId}`

);

return response.data;

}
