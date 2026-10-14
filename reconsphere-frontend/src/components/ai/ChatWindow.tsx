import "./ChatWindow.css";

import type{

AIChatMessage

}from"../../types/ai";

import MessageBubble from "./MessageBubble";

interface Props{

messages:AIChatMessage[];

}

export default function ChatWindow({

messages

}:Props){

return(

<div className="chatWindow">

{

messages.map((message,index)=>(

<MessageBubble

key={index}

message={message}

/>

))

}

</div>

);

}
