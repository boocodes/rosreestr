import styled from "styled-components";
import ButtonLink from "../linkButton/button";

interface Props{

}


function Header(props:Props){
    return(
        <Root>
            <LogoWrapper>
                <LogoText>
                    Росреестр
                </LogoText>
            </LogoWrapper>
            <AuthorizationWrapper>
                <LoginLinkWrapper>
                    <ButtonLink link={'./login'} linkText={'Авторизация'}/>
                </LoginLinkWrapper>
                <RegistrationLinkWrapper>
                    <ButtonLink link={'./signup'} linkText={'Регистрация'}/>
                </RegistrationLinkWrapper>
            </AuthorizationWrapper>
        </Root>
    )
}
const Root = styled.div`
    padding: 40px 70px 50px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
`

const LogoWrapper = styled.div`

`
const LogoText = styled.h1`

`

const AuthorizationWrapper = styled.div`
    display: flex;
    align-items: center;
`
const LoginLinkWrapper = styled.div`
    margin-right: 20px;    
`
const RegistrationLinkWrapper = styled.div`

`

export default Header;