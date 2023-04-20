import styled from "styled-components";
import ButtonLink from "../linkButton/button";


interface Props{

}


function NotLoginCase(props:Props){
    return(
        <AuthorizationWrapper>
            <LoginLinkWrapper>
                <ButtonLink link={'./login'} linkText={'Авторизация'}/>
            </LoginLinkWrapper>
            <RegistrationLinkWrapper>
                <ButtonLink link={'./signup'} linkText={'Регистрация'}/>
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
`
const RegistrationLinkWrapper = styled.div`

`

export default NotLoginCase;