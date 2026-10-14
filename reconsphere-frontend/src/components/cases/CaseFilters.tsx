import "./CaseFilters.css";

import SearchBox from "../common/SearchBox/SearchBox";

interface Props{

search:string;

status:string;

onSearch:(value:string)=>void;

onStatusChange:(value:string)=>void;

}

export default function CaseFilters({

search,

status,

onSearch,

onStatusChange

}:Props){

return(

<div className="caseFilters">

<SearchBox

value={search}

placeholder="Search case..."

onChange={onSearch}

/>

<select

value={status}

onChange={e=>

onStatusChange(

e.target.value

)

}

>

<option value="ALL">All</option>

<option value="OPEN">Open</option>

<option value="ASSIGNED">Assigned</option>

<option value="IN_PROGRESS">In Progress</option>

<option value="ESCALATED">Escalated</option>

<option value="RESOLVED">Resolved</option>

<option value="CLOSED">Closed</option>

</select>

</div>

);

}
