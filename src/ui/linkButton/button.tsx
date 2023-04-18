import {NavLink, Link} from "react-router-dom";

interface Props{
    link: string;
    linkText: string;
}


function ButtonLink(props:Props){
    return(
       <a href={props.link}>{props.linkText}</a>
    )
}


export default ButtonLink;