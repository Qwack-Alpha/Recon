import "./ChatInput.css";

import{

useState

}from"react";

interface Props{

loading:boolean;

onSend:(text:string)=>void;

}

export default function ChatInput({

loading,

onSend

}:Props){

const[

text,

setText

]=useState("");

function send(){

if(!text.trim())return;

onSend(text);

setText("");

}

return(

<div className="chatInput">

<input

value={text}

placeholder="Ask ReconAI..."

onChange={e=>setText(e.target.value)}

onKeyDown={e=>{

if(e.key==="Enter"){

send();

}

}}

/>

<button

disabled={loading}

onClick={send}

>

Send

</button>

</div>

);

}
