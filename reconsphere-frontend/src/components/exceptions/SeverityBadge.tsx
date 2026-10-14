import "./SeverityBadge.css";

interface Props{

severity:string;

}

export default function SeverityBadge({

severity

}:Props){

return(

<span

className={`severity ${severity.toLowerCase()}`}

>

{severity}

</span>

);

}
