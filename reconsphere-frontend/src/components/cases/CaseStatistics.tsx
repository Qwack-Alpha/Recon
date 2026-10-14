import "./CaseStatistics.css";

import{

MdWork,

MdAssignment,

MdSchedule,

MdTaskAlt

}from"react-icons/md";

import{

StatCard

}from"../common";

import type{

InvestigationCaseSummary

}from"../../types/case";

interface Props{

items:InvestigationCaseSummary[];

}

export default function CaseStatistics({

items

}:Props){

const open=

items.filter(

x=>x.status==="OPEN"

).length;

const progress=

items.filter(

x=>x.status==="IN_PROGRESS"

).length;

const resolved=

items.filter(

x=>

x.status==="RESOLVED"||

x.status==="CLOSED"

).length;

return(

<div className="caseStats">

<StatCard
title="Cases"
value={items.length}
icon={<MdWork/>}
/>

<StatCard
title="Open"
value={open}
icon={<MdAssignment/>}
/>

<StatCard
title="In Progress"
value={progress}
icon={<MdSchedule/>}
/>

<StatCard
title="Resolved"
value={resolved}
icon={<MdTaskAlt/>}
/>

</div>

);

}
