import api from "../api/client";

import type{

DashboardSummary,

RecentRun,

BankSummary,

ExceptionChart

}from"../types/dashboard";

const DashboardService={

async summary():Promise<DashboardSummary>{

const response=

await api.get<DashboardSummary>(

"/dashboard/summary"

);

return response.data;

},

async runs():Promise<RecentRun[]>{

const response=

await api.get<RecentRun[]>(

"/dashboard/reconciliation-runs"

);

return response.data;

},

async banks():Promise<BankSummary[]>{

const response=

await api.get<BankSummary[]>(

"/dashboard/bank-summary"

);

return response.data;

},

async exceptionChart():Promise<ExceptionChart>{

const response=

await api.get<ExceptionChart>(

"/dashboard/exception-chart"

);

return response.data;

}

};

export default DashboardService;
