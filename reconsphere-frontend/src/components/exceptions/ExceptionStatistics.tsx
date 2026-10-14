import "./ExceptionStatistics.css";

import{

MdWarning,

MdError,

MdAssignmentInd,

MdTaskAlt

}from"react-icons/md";

import{

StatCard

}from"../common";

import type{

ExceptionSummary

}from"../../types/exception";

interface Props{

items:ExceptionSummary[];

}

export default function ExceptionStatistics({

items

}:Props){

const critical=

items.filter(

x=>x.severity==="CRITICAL"

).length;

const assigned=

items.filter(

x=>x.assigned_to

).length;

const open=

items.filter(

x=>x.status!=="RESOLVED"

).length;

return(

<div className="exceptionStats">

<StatCard

title="Exceptions"

value={items.length}

icon={<MdWarning/>}

/>

<StatCard

title="Critical"

value={critical}

icon={<MdError/>}

/>

<StatCard

title="Assigned"

value={assigned}

icon={<MdAssignmentInd/>}

/>

<StatCard

title="Open"

value={open}

icon={<MdTaskAlt/>}

/>

</div>

);

}
