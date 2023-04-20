import styled from "styled-components";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";


interface Props{

}


function WorkspacePage(props:Props){
  return(
      <>
          <Header/>
          <MainContent>
              рабочее пространство
          </MainContent>
          <Footer/>
      </>
  )
}


const MainContent = styled.div`
    padding: 40px 70px 50px 70px;
`



export default WorkspacePage;