import styled from "styled-components";
import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";
import NewContainerForm from "../../../components/addNewContainerForm/newContainerForm";


interface Props{

}

function AddContainerPage(props:Props){


    return(
      <>
          <Header/>
            <MainContent>

                <NewContainerTitle>
                    Создать новый контейнер
                </NewContainerTitle>
                <UndertitleLine/>
                <NewContainerForm/>
            </MainContent>
          <Footer/>
      </>
    )
}


const MainContent = styled.div`
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding-bottom: 100px;
`

const NewContainerTitle = styled.h2`
    font-family: 'Gilroy';
`
const UndertitleLine = styled.div`
    margin-top: 15px;
    background-color: #d8dee4;
    height: 1px;
    position: relative;
    width: 100%;
    margin-bottom: 40px;
`



export default AddContainerPage;