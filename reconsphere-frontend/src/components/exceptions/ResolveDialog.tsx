
import "./ResolveDialog.css";
import {useState} from "react";
import type {ExceptionSummary} from "../../types/exception";
interface Props{
item:ExceptionSummary|null;
loading:boolean;
onClose:()=>void;
onSubmit:(notes:string)=>void;
}
export default function ResolveDialog({
item,
loading,
onClose,
onSubmit
}:Props){
const[notes,setNotes]=useState("");
if(!item)return null;
return(
<div className="dialogOverlay">
<div className="dialog">
<h2>Resolve Exception</h2>
<textarea
rows={5}
value={notes}
onChange={e=>setNotes(e.target.value)}
placeholder="Resolution Notes"
/>
<div className="dialogButtons">
<button onClick={onClose}>Cancel</button>
<button
disabled={loading}
onClick={()=>onSubmit(notes)}
>
Resolve
</button>
</div>
</div>
</div>
);
}