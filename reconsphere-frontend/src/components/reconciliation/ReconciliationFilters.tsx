import "./ReconciliationFilters.css";

import SearchBox from "../common/SearchBox/SearchBox";

interface Props{

search:string;

status:string;

onSearch:(value:string)=>void;

onStatusChange:(value:string)=>void;

}

export default function ReconciliationFilters({

search,

status,

onSearch,

onStatusChange

}:Props){

return(

<div className="reconciliationFilters">

<SearchBox

value={search}

placeholder="Search payment reference..."

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

<option value="ALL">

All

</option>

<option value="MATCHED">

Matched

</option>

<option value="EXCEPTION">

Exception

</option>

<option value="PENDING">

Pending

</option>

</select>

</div>

);

}
