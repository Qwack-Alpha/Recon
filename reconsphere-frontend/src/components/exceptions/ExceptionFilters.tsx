import "./ExceptionFilters.css";

import SearchBox from "../common/SearchBox/SearchBox";

interface Props{

search:string;

severity:string;

onSearch:(value:string)=>void;

onSeverityChange:(value:string)=>void;

}

export default function ExceptionFilters({

search,

severity,

onSearch,

onSeverityChange

}:Props){

return(

<div className="exceptionFilters">

<SearchBox

value={search}

placeholder="Search reference..."

onChange={onSearch}

/>

<select

value={severity}

onChange={e=>

onSeverityChange(

e.target.value

)

}

>

<option value="ALL">

All

</option>

<option value="CRITICAL">

Critical

</option>

<option value="HIGH">

High

</option>

<option value="MEDIUM">

Medium

</option>

<option value="LOW">

Low

</option>

</select>

</div>

);

}
