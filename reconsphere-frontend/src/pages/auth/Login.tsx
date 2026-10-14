import {useForm} from "react-hook-form";

import {z} from "zod";

import {zodResolver} from "@hookform/resolvers/zod";

import {toast} from "react-hot-toast";

import {useNavigate} from "react-router-dom";

import {useAuth} from "../../auth/useAuth";

import "./Login.css";

const schema=z.object({

email:z.email(),

password:z.string().min(1)

});

type Form=z.infer<typeof schema>;

export default function Login(){

const navigate=useNavigate();

const{

login

}=useAuth();

const{

register,

handleSubmit,

formState:{errors,isSubmitting}

}=useForm<Form>({

resolver:zodResolver(schema)

});

async function onSubmit(

data:Form

){

try{

await login(data);

toast.success(

"Welcome"

);

navigate("/");

}catch{

toast.error(

"Invalid credentials"

);

}

}

return(

<div className="loginPage">

<form

onSubmit={handleSubmit(onSubmit)}

className="loginCard"

>

<h1>

ReconSphere AI

</h1>

<input

placeholder="Email"

{...register("email")}

/>

<p>

{errors.email?.message}

</p>

<input

type="password"

placeholder="Password"

{...register("password")}

/>

<p>

{errors.password?.message}

</p>

<button

disabled={isSubmitting}

>

Sign In

</button>

</form>

</div>

);

}
