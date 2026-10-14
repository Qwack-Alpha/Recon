import "./ConfidenceBadge.css";

interface Props{

confidence:number;

}

export default function ConfidenceBadge({

confidence

}:Props){

let css="low";

if(confidence>=90){

css="high";

}
else if(confidence>=70){

css="medium";

}

return(

<span className={`confidence ${css}`}>

{confidence}%

</span>

);

}
