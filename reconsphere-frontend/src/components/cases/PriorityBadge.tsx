import "./PriorityBadge.css";

interface Props{

priority:string;

}

export default function PriorityBadge({

priority

}:Props){

return(

<span

className={`priority ${priority.toLowerCase()}`}

>

{priority}

</span>

);

}
