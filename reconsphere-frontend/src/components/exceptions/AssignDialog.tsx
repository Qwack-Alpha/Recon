import "./AssignDialog.css";

import {useState} from "react";

import type {ExceptionSummary} from "../../types/exception";

interface Props{

item:ExceptionSummary|null;

loading:boolean;

onClose:()=>void;

onSubmit:(userId:string)=>void;

}

export default function AssignDialog({

item,

loading,

onClose,

onSubmit

}:Props){

const[userId,setUserId]=useState("");

if(!item)return null;

return(

<div className="dialogOverlay">

<div className="dialog">

<h2>Assign Exception</h2>

<input

placeholder="User Id"

value={userId}

onChange={e=>setUserId(e.target.value)}

/>

<div className="dialogButtons">

<button onClick={onClose}>Cancel</button>

<button

disabled={loading}

onClick={()=>onSubmit(userId)}

>

Assign

</button>

</div>

</div>

</div>

);

}
