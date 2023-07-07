import styled from "styled-components";
import {
    RegistrateButton,
    LoginButton,
}   from '../../../';
import {useNavigate} from "react-router-dom";



interface Props{

}


function NotAuthorizedHeader({}:Props){

    const navigate = useNavigate();

    return(
        <>
            <ExternalWrapper>
                <LogoWrapper>
                    <LogoImage src={"./images/codezipLogo.svg"}/>
                </LogoWrapper>
                <StartButtons>
                    <LoginButtonWrapper onClick={()=>{
                        navigate("/login")
                    }}>
                        <LoginButton/>
                    </LoginButtonWrapper>
                    <RegistrateButtonWrapper onClick={()=>{
                        navigate("/registration")
                    }}>
                        <RegistrateButton/>
                    </RegistrateButtonWrapper>
                </StartButtons>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    background-color: white;
    -webkit-box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 8px 8px 0px rgba(34, 60, 80, 0.2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 200px;
    z-index: 2;
`

const LogoWrapper = styled.div`

`
const LogoImage = styled.img`
    width: 100px;    
`

const StartButtons = styled.div`
    display: flex;
    align-items: center;
`

const LoginButtonWrapper = styled.div`
    margin-right: 50px;
`
const RegistrateButtonWrapper = styled.div`

`




export default NotAuthorizedHeader;