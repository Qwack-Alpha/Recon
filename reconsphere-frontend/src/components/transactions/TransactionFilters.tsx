import "./TransactionFilters.css";

import SearchBox from "../common/SearchBox/SearchBox";

interface Props{

search:string;

status:string;

onSearch:(value:string)=>void;

onStatusChange:(value:string)=>void;

}

export default function TransactionFilters({

search,

status,

onSearch,

onStatusChange

}:Props){

return(

<div className="transactionFilters">

<SearchBox

value={search}

placeholder="Search transaction..."

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

All Status

</option>

<option value="SUCCESS">

Success

</option>

<option value="FAILED">

Failed

</option>

<option value="PENDING">

Pending

</option>

<option value="MATCHED">

Matched

</option>

<option value="EXCEPTION">

Exception

</option>

</select>

</div>

);

}
