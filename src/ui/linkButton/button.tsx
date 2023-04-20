import {NavLink, Link} from "react-router-dom";
import styled from 'styled-components';

interface Props{
    link: string;
    linkText: string;
}


function ButtonLink(props:Props){
    return(
       <LinkRoot href={props.link}>{props.linkText}</LinkRoot>
    )
}

const LinkRoot = styled.a`
    color: white;
    text-decoration: none;
`


export default ButtonLink;