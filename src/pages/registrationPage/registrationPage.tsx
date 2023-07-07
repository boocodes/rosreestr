import styled from "styled-components";
import {
    RegistrationForm,
    RegistrationFormSecondStep,
} from '../../';
import {useState} from "react";



interface Props{

}

function RegistrationPage({}:Props){

    const [registrationStep, setRegistrationStep] = useState<number>(1);


    return(
        <>
            <ExternalWrapper>
                <HeaderInner>
                    <LogoWrapper>
                        <LogoImage src={"./images/codezipLogo.svg"}/>
                    </LogoWrapper>
                </HeaderInner>
                {
                    registrationStep === 1 ?
                        <RegistrationForm changeRegistrationStep={setRegistrationStep}/>
                        :
                        registrationStep === 2 ?
                            <RegistrationFormSecondStep changeRegistrationStep={setRegistrationStep}/>
                            :
                            null
                }
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

const OfferWrapper = styled.div`

`
const OfferText = styled.h1`

`
const SubOfferText = styled.h3`

`


export default RegistrationPage;
