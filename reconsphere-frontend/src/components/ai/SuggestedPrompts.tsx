import "./SuggestedPrompts.css";

interface Props{

onSelect:(text:string)=>void;

}

const prompts=[

"Why did reconciliation fail?",

"Explain this exception.",

"Summarize today's reconciliation.",

"Recommend next action."

];

export default function SuggestedPrompts({

onSelect

}:Props){

return(

<div className="promptGrid">

{

prompts.map(prompt=>(

<button

key={prompt}

onClick={()=>onSelect(prompt)}

>

{prompt}

</button>

))

}

</div>

);

}
