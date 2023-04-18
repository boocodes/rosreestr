import styled from 'styled-components'

import Button from "../ui/linkButton/button";
import ButtonLink from "../ui/linkButton/button";


interface Props{

}


function WelcomePage(props:Props){
    return(
        <ExternalPage>
            <Header>
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
            </Header>
            <MainContent>
                Хранилище кода
            </MainContent>
            <Footer>
                Подвал сайта
            </Footer>
        </ExternalPage>
    )
}

const ExternalPage = styled.div`
    display: flex;
    flex-direction: column;
    
    font-family: 'Gilroy';
`
const Header = styled.div`
    padding: 40px 70px 50px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
`
const MainContent = styled.div`
    padding: 70px;
`
const Footer = styled.div`
    border-top: 1px solid #DDDDDD;
    padding: 70px;
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

export default WelcomePage;