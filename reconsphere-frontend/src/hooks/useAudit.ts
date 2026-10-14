import{

useQuery

}from"@tanstack/react-query";

import{

getAuditLogs

}from"../services/auditService";

export function useAudit(){

const logs=

useQuery({

queryKey:["audit"],

queryFn:getAuditLogs

});

return{

logs

};

}
