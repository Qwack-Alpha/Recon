import "./StatCard.css";

import Card from "../Card/Card";

import type { ReactNode } from "react";

interface Props{

title:string;

value:string|number;

icon?:ReactNode;

}

export default function StatCard({

title,

value,

icon

}:Props){

return(

<Card>

<div className="statHeader">

<div>

<div className="statTitle">

{title}

</div>

<div className="statValue">

{value}

</div>

</div>

<div className="statIcon">

{icon}

</div>

</div>

</Card>

);

}
