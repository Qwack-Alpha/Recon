import axios from "axios";
import { env } from "../config/env";
import {
TokenStorage
} from "../utils/tokenStorage";
const api=axios.create({
baseURL:env.apiBaseUrl,
headers:{
"Content-Type":"application/json"
}
});
api.interceptors.request.use(
config=>{
const token=TokenStorage.access();
if(token){
config.headers.Authorization=`Bearer ${token}`;
}
return config;
}
);
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            TokenStorage.clear();
            if (window.location.pathname !== "/login") {
                window.location.assign("/login");
            }
        }
        return Promise.reject(error);
    },
);
export default api;