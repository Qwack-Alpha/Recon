import "./SearchBox.css";

import {MdSearch} from "react-icons/md";

type Props={

value:string;

placeholder:string;

onChange:(value:string)=>void;

};

export default function SearchBox({

value,

placeholder,

onChange

}:Props){

return(

<div className="search">

<MdSearch size={20}/>

<input

value={value}

placeholder={placeholder}

onChange={e=>onChange(e.target.value)}

/>

</div>

);

}
