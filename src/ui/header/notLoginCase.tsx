import styled from "styled-components";
import ButtonLink from "../linkButton/button";
import {Link} from "react-router-dom";

interface Props{

}


function NotLoginCase(props:Props){
    return(
        <AuthorizationWrapper>
            <LoginLinkWrapper>
                <NavigationLink to={'/login'}>Авторизация</NavigationLink>
            </LoginLinkWrapper>
            <RegistrationLinkWrapper>
                <NavigationLink to={'/signup'}>Регистрация</NavigationLink>
            </RegistrationLinkWrapper>
        </AuthorizationWrapper>
    )
}

const NavigationLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 19px;
`

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