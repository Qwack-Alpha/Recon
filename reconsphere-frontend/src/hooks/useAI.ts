import{

useMutation,

useQuery

}from"@tanstack/react-query";

import{

chat,

history,

explain,

recommend

}from"../services/aiService";

export function useAI(){

const chatHistory=

useQuery({

queryKey:["aiHistory"],

queryFn:history

});

const ask=

useMutation({

mutationFn:chat

});

const explainCase=

useMutation({

mutationFn:explain

});

const recommendCase=

useMutation({

mutationFn:recommend

});

return{

chatHistory,

ask,

explainCase,

recommendCase

};

}
