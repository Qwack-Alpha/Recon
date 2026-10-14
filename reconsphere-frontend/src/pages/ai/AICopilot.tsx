import "./AICopilot.css";

import {useState} from "react";

import{

Card,
Loader,
EmptyState,
PageContainer,
SectionHeader

}from"../../components/common";

import{

useAI

}from"../../hooks/useAI";

import ChatWindow from "../../components/ai/ChatWindow";
import ChatInput from "../../components/ai/ChatInput";
import SuggestedPrompts from "../../components/ai/SuggestedPrompts";

import type{

AIChatMessage

}from"../../types/ai";

export default function AICopilot(){

const{

chatHistory,

ask

}=useAI();

const[

messages,

setMessages

]=useState<AIChatMessage[]>([]);

function send(question:string){

const userMessage:AIChatMessage={

role:"user",

message:question,

created_at:new Date().toISOString()

};

setMessages(prev=>[

...prev,

userMessage

]);

ask.mutate(

{

question

},

{

onSuccess:data=>{

setMessages(prev=>[

...prev,

{

role:"assistant",

message:data.answer,

created_at:new Date().toISOString()

}

]);

}

}

);

}

if(chatHistory.isLoading){

return<Loader/>;

}

if(chatHistory.isError){

return(

<EmptyState

title="AI unavailable"

message="Unable to load AI history."

/>

);

}

return(

<PageContainer>

<SectionHeader

title="ReconSphere AI Copilot"

subtitle="Enterprise AI Assistant"

/>

<Card>

<SuggestedPrompts

onSelect={send}

/>

<ChatWindow

messages={messages}

/>

<ChatInput

loading={ask.isPending}

onSend={send}

/>

</Card>

</PageContainer>

);

}
