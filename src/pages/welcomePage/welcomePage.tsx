import styled from "styled-components";
import {
    NotAuthorizedHeader,
}   from '../../';

interface Props{

}


function WelcomePage({}:Props){
    return(
        <>
           <ExternalWrapper>
               <NotAuthorizedHeader/>
               <MainContent>
                   <OfferWrapper>
                       <OfferText>
                           Start using zipped code repository
                       </OfferText>
                       <SubOfferText>
                            It is free and comfortable
                       </SubOfferText>
                   </OfferWrapper>
               </MainContent>
           </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    min-height: 100vh;
    z-index: 1;
    // background: rgb(214,230,253);
    // background: -moz-linear-gradient(323deg, rgba(214,230,253,1) 0%, rgba(255,255,255,1) 100%);
    // background: -webkit-linear-gradient(323deg, rgba(214,230,253,1) 0%, rgba(255,255,255,1) 100%);
    // background: linear-gradient(323deg, rgba(214,230,253,1) 0%, rgba(255,255,255,1) 100%);
    // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d6e6fd",endColorstr="#ffffff",GradientType=1);
    background-color: white;
    font-family: 'Muller';
`
const MainContent = styled.div`
    padding: 150px 200px;
`
const OfferWrapper = styled.div`

`
const OfferText = styled.h1`
    font-size: 48px;
    margin-bottom: 30px;
`
const SubOfferText = styled.h2`
    font-size: 36px;
    opacity: 0.8;
`



export default WelcomePage;