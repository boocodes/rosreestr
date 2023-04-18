import styled from 'styled-components'

import Button from "../../ui/linkButton/button";
import ButtonLink from "../../ui/linkButton/button";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";


interface Props{

}


function WelcomePage(props:Props){
    return(
        <ExternalPage>
            <Header/>
            <MainContent>
                Хранилище кода
            </MainContent>
            <Footer/>
        </ExternalPage>
    )
}

const ExternalPage = styled.div`
    display: flex;
    flex-direction: column;
    
    font-family: 'Gilroy';
`
const MainContent = styled.div`
    padding: 70px;
`


export default WelcomePage;