import styled from 'styled-components'
import {
    ButtonLink,
    Header,
    Footer,
}   from '../../';

interface Props{

}


function WelcomePage(props:Props){
    return(
        <ExternalPage>
            <Header/>
            <MainContent>
                Навигация по контейнерам
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