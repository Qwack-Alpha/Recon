import "./EmptyState.css";

import {MdInbox} from "react-icons/md";

export default function EmptyState({

title,

message

}:{

title:string;

message:string;

}){

return(

<div className="empty">

<MdInbox size={72}/>

<h2>{title}</h2>

<p>{message}</p>

</div>

);

}
