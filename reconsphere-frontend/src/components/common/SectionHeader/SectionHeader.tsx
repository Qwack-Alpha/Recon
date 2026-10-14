import "./SectionHeader.css";

export default function SectionHeader({

title,

subtitle

}:{

title:string;

subtitle?:string;

}){

return(

<div>

<h2 className="sectionTitle">

{title}

</h2>

{

subtitle&&

<p className="sectionSubtitle">

{subtitle}

</p>

}

</div>

);

}
