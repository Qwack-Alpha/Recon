import{

useQuery

}from"@tanstack/react-query";

import DashboardService from "../services/dashboardService";

export function useDashboard(){

const summary=

useQuery({

queryKey:["dashboard-summary"],

queryFn:DashboardService.summary

});

const runs=

useQuery({

queryKey:["dashboard-runs"],

queryFn:DashboardService.runs

});

const banks=

useQuery({

queryKey:["dashboard-banks"],

queryFn:DashboardService.banks

});

const chart=

useQuery({

queryKey:["dashboard-chart"],

queryFn:DashboardService.exceptionChart

});

return{

summary,

runs,

banks,

chart

};

}
