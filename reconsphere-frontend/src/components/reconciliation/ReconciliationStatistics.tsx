import "./ReconciliationStatistics.css";

import{

MdCompareArrows,

MdCheckCircle,

MdWarning,

MdPsychology

}from"react-icons/md";

import{

StatCard

}from"../common";

import type{

ReconciliationItem

}from"../../types/reconciliation";

interface Props{

items:ReconciliationItem[];

}

export default function ReconciliationStatistics({

items

}:Props){

const matched=

items.filter(

x=>x.status==="MATCHED"

).length;

const exceptions=

items.filter(

x=>x.status==="EXCEPTION"

).length;

const pending=

items.filter(

x=>x.status==="PENDING"

).length;

const average=

items.length

?Math.round(

items.reduce(

(sum,x)=>sum+x.ai_confidence,

0

)/items.length

)

:0;

return(

    <div className="reconciliationStats">
    
    <StatCard
    title="Results"
    value={items.length}
    icon={<MdCompareArrows/>}
    />
    
    <StatCard
    title="Matched"
    value={matched}
    icon={<MdCheckCircle/>}
    />
    
    <StatCard
    title="Exceptions"
    value={exceptions}
    icon={<MdWarning/>}
    />
    
    <StatCard
    title="Pending"
    value={pending}
    icon={<MdPsychology/>}
    />
    
    <StatCard
    title="AI Confidence"
    value={`${average}%`}
    icon={<MdPsychology/>}
    />
    
    </div>
    
    );

}
