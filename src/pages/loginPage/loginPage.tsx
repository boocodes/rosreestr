import styled from "styled-components";

interface Props{

}



function LoginPage({}:Props){
    return(
        <>
            <ExternalWrapper>
                <HeaderInner>
                    <LogoWrapper>
                        <LogoImage src={"./images/codezipLogo.svg"}/>
                    </LogoWrapper>
                </HeaderInner>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`

`
const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    border-bottom: 1px solid #dcdcde;
`
const LogoWrapper = styled.div`

`
const LogoImage = styled.img`
   width: 100px;
`




export default LoginPage;