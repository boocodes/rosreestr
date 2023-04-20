import styled from "styled-components";
import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";


interface Props{

}


function WorkspacePage(props:Props){
  return(
      <>
          <Header/>
          <MainContent>
              У вас 0 рабочих пространств<br/>
              <br/>
              Список:
          </MainContent>
          <Footer/>
      </>
  )
}


const MainContent = styled.div`
    font-family: 'Gilroy';
    font-size: 19px;
    padding: 40px 70px 50px 70px;
`



export default WorkspacePage;