import "./Audit.css";
import{
Card,
Loader,
EmptyState,
PageContainer,
SectionHeader
}from"../../components/common";
import{
useAudit
}from"../../hooks/useAudit";
import AuditTable from "../../components/audit/AuditTable";
export default function Audit(){
const{
logs
}=useAudit();
if(logs.isLoading){
return<Loader/>;
}
if(logs.isError){
return(
<EmptyState
title="Audit unavailable"
message="Please refresh."
/>
);
}
return(
<PageContainer>
<SectionHeader
title="Audit"
subtitle={`${logs.data?.total_records ?? 0} recorded events`}
/>
<Card>
<AuditTable
items={logs.data?.logs ?? []}
/>
</Card>
</PageContainer>
);
}
