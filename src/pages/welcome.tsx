import styled from 'styled-components'


interface Props{

}


function WelcomePage(props:Props){
    return(
        <ExternalPage>
            <Header>
                <LogoWrapper>Росреестр</LogoWrapper>
                <AuthorizationWrapper>
                    <LoginLink>

                    </LoginLink>
                    <RegistrationLink>

                    </RegistrationLink>
                </AuthorizationWrapper>
            </Header>
            <MainContent>

            </MainContent>
            <Footer>

            </Footer>
        </ExternalPage>
    )
}

const ExternalPage = styled.div`
    
`
const Header = styled.div`
    
`
const MainContent = styled.div`

`
const Footer = styled.div`

`
const LogoWrapper = styled.div`

`
const LogoText = styled.h1`

`

const AuthorizationWrapper = styled.div`

`
const LoginLink = styled.a`

`
const RegistrationLink = styled.a`

`

export default WelcomePage;