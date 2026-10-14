import "./Button.css";

import type {ButtonHTMLAttributes} from "react";

type Props=ButtonHTMLAttributes<HTMLButtonElement>&{

loading?:boolean;

};

export default function Button({

loading,

children,

...props

}:Props){

return(

<button

className="btn"

disabled={loading||props.disabled}

{...props}

>

{loading?"Please wait...":children}

</button>

);

}
