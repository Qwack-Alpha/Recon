import{

useQuery,

useMutation,

useQueryClient

}from"@tanstack/react-query";

import{

getCases,

getCase,

updateCaseStatus,

addComment,

addAttachment

}from"../services/caseService";

export function useCases(){

const client=

useQueryClient();

const cases=

useQuery({

queryKey:["cases"],

queryFn:getCases

});

const detail=(id:string)=>

useQuery({

queryKey:["case",id],

queryFn:()=>getCase(id),

enabled:!!id

});

const update=

useMutation({

mutationFn:({

id,

status

}:{

id:string;

status:string;

})=>

updateCaseStatus(id,status),

onSuccess:()=>{

client.invalidateQueries({

queryKey:["cases"]

});

}

});

const comment=

useMutation({

mutationFn:({

id,

text

}:{

id:string;

text:string;

})=>

addComment(id,text)

});

const attachment=

useMutation({

mutationFn:({

id,

file_name,

blob_url

}:{

id:string;

file_name:string;

blob_url:string;

})=>

addAttachment(

id,

file_name,

blob_url

)

});

return{

cases,

detail,

update,

comment,

attachment

};

}
