import styled from "styled-components";
import ButtonLink from "../linkButton/button";
import {Link} from "react-router-dom";

interface Props{

}


function NotLoginCase(props:Props){
    return(
        <AuthorizationWrapper>
            <LoginLinkWrapper>
                <Link to={'/login'}>Авторизация</Link>
            </LoginLinkWrapper>
            <RegistrationLinkWrapper>
                <Link to={'/signup'}>Регистрация</Link>
            </RegistrationLinkWrapper>
        </AuthorizationWrapper>
    )
}

const AuthorizationWrapper = styled.div`
    display: flex;
    align-items: center;
`
const LoginLinkWrapper = styled.div`
    margin-right: 20px;    
    color: white;
`
const RegistrationLinkWrapper = styled.div`

`

export default NotLoginCase;