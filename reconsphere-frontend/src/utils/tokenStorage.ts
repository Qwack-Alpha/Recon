const ACCESS_TOKEN="accessToken";

const REFRESH_TOKEN="refreshToken";

export const TokenStorage={

set(

access:string,

refresh:string

){

localStorage.setItem(

ACCESS_TOKEN,

access

);

localStorage.setItem(

REFRESH_TOKEN,

refresh

);

},

access(){

return localStorage.getItem(

ACCESS_TOKEN

);

},

refresh(){

return localStorage.getItem(

REFRESH_TOKEN

);

},

clear(){

localStorage.removeItem(

ACCESS_TOKEN

);

localStorage.removeItem(

REFRESH_TOKEN

);

}

};
