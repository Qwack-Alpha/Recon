import{

useMutation,

useQuery,

useQueryClient

}from"@tanstack/react-query";

import{

getExceptions,

assignException,

resolveException

}from"../services/exceptionService";

export function useExceptions(){

const client=

useQueryClient();

const exceptions=

useQuery({

queryKey:["exceptions"],

queryFn:getExceptions

});

const assign=

useMutation({

mutationFn:({

id,

user_id

}:{

id:string;

user_id:string;

})=>

assignException(

id,

{

user_id

}

),

onSuccess:()=>{

client.invalidateQueries({

queryKey:["exceptions"]

});

}

});

const resolve=

useMutation({

mutationFn:({

id,

resolution_notes

}:{

id:string;

resolution_notes:string;

})=>

resolveException(

id,

{

resolution_notes

}

),

onSuccess:()=>{

client.invalidateQueries({

queryKey:["exceptions"]

});

}

});

return{

exceptions,

assign,

resolve

};

}
