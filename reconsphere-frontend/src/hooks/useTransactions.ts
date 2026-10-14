import{

useQuery

}from"@tanstack/react-query";

import{

getTransactions

}from"../services/transactionService";

export function useTransactions(){

const transactions=

useQuery({

queryKey:["transactions"],

queryFn:getTransactions

});

return{

transactions

};

}
