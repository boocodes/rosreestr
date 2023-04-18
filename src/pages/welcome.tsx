import styled from 'styled-components'


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
                        <a href={"./login"}>Авторизация</a>
                    </LoginLinkWrapper>
                    <RegistrationLinkWrapper>
                        <a href={"./signup"}>Регистрация</a>
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
    
`
const Header = styled.div`
    padding: 30px 50px 30px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;
`
const MainContent = styled.div`
     padding: 50px 50px 50px 50px;
     
`
const Footer = styled.div`
    border-top: 1px solid #DDDDDD;
    padding: 30px 50px 30px 50px;
`
const LogoWrapper = styled.div`

`
const LogoText = styled.h1`
    font-size: 28px;
    text-transform: uppercase;
`

const AuthorizationWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
`
const LoginLinkWrapper = styled.a`
    margin-right: 20px;
`
const RegistrationLinkWrapper = styled.a`

`

export default WelcomePage;