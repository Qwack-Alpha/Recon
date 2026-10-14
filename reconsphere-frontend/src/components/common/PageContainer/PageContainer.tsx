import "./PageContainer.css";

import type {ReactNode} from "react";

export default function PageContainer({

children

}:{

children:ReactNode

}){

return(

<div className="pageContainer">

{children}

</div>

);

}
