import styled from "styled-components";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    useAppDispatch,
    changeUserAuthFlag,
}   from '../../';

interface Props{

}


function LogoutPage(props:Props){
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(changeUserAuthFlag({authFlag: false}));
        console.log("31231");
    }, [])

    return(
        <></>
    )
}


export default LogoutPage;