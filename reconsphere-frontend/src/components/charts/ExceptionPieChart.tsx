import{

PieChart,

Pie,

Tooltip,

ResponsiveContainer,

Cell,

Legend

}from"recharts";

import type{

ExceptionChart

}from"../../types/dashboard";

interface Props{

data:ExceptionChart;

}

const COLORS=[

"#DC2626",

"#F97316",

"#FACC15",

"#22C55E"

];

export default function ExceptionPieChart({

data

}:Props){

const chart=[

{

name:"Critical",

value:data.critical

},

{

name:"High",

value:data.high

},

{

name:"Medium",

value:data.medium

},

{

name:"Low",

value:data.low

}

];

return(

<div style={{

height:320

}}>

<ResponsiveContainer>

<PieChart>

<Pie

data={chart}

dataKey="value"

nameKey="name"

outerRadius={100}

label

>

{

chart.map((_,index)=>(

<Cell

key={index}

fill={COLORS[index]}

/>

))

}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

);

}
