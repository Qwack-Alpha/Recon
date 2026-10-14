import "./CaseTable.css";

import type { InvestigationCaseSummary } from "../../types/case";

import PriorityBadge from "./PriorityBadge";

interface Props{

items:InvestigationCaseSummary[];

onOpen:(id:string)=>void;

}

export default function CaseTable({

items,

onOpen

}:Props){

return(

<table className="caseTable">

<thead>

<tr>

<th>Case</th>

<th>Transaction</th>

<th>Priority</th>

<th>Status</th>

<th>Owner</th>

<th>Due</th>

</tr>

</thead>

<tbody>

{

items.map(item=>(

<tr

key={item.id}

onClick={()=>onOpen(item.id)}

>

<td>{item.case_number}</td>

<td>{item.transaction_reference}</td>

<td>

<PriorityBadge priority={item.priority}/>

</td>

<td>{item.status}</td>

<td>{item.owner??"-"}</td>

<td>{item.due_date??"-"}</td>

</tr>

))

}

</tbody>

</table>

);

}