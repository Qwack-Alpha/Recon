import "./MessageBubble.css";

import type{

AIChatMessage

}from"../../types/ai";

interface Props{

message:AIChatMessage;

}

export default function MessageBubble({

message

}:Props){

const mine=

message.role==="user";

return(

<div className={`bubble ${mine?"user":"assistant"}`}>

<div className="bubbleRole">

{mine?"You":"ReconAI"}

</div>

<div>

{message.message}

</div>

</div>

);

}
