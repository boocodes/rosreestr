import styled from "styled-components";
import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";
import {Link} from "react-router-dom";


interface Props{

}


function WorkspacePage(props:Props){
  return(
      <>
          <Header/>
          <MainContent>
              <LatestRepositoriesWrapper>
                  <LatestRepositoriesTitleWrapper>
                      <LatestRepositoriesTitle>
                          Последние контейнеры
                      </LatestRepositoriesTitle>
                      <LatestRepositoriesAddButton>
                          <LatestRepositoriesAddLink to={"/new"}>Добавить</LatestRepositoriesAddLink>
                      </LatestRepositoriesAddButton>
                  </LatestRepositoriesTitleWrapper>
                  <LatestRepositoryFindForm>
                      <LatestRepositoryFindInput placeholder={"Искать контейнер..."} type={"text"}/>
                  </LatestRepositoryFindForm>
                  <LatestRepositoryContainerList>
                      <LatestRepositoryContaiterElem>boocodes/rosreestr</LatestRepositoryContaiterElem>
                      <LatestRepositoryContaiterElem>boocodes/resreestr_backend</LatestRepositoryContaiterElem>
                      <LatestRepositoryContaiterElem>boocodes/sarofanTest</LatestRepositoryContaiterElem>
                      <LatestRepositoryContaiterElem>boocodes/trelello-without-redux</LatestRepositoryContaiterElem>
                      <LatestRepositoryContaiterElem>boocodes/trelello-with-redux</LatestRepositoryContaiterElem>
                      <LatestRepositoryContaiterElem>boocodes/react-init-files</LatestRepositoryContaiterElem>
                  </LatestRepositoryContainerList>
                  <LatestRepositoryContainerListShowMoreButton>Показать больше</LatestRepositoryContainerListShowMoreButton>
              </LatestRepositoriesWrapper>
              <LatestNewsWrapper>
                  <LatestNewsTitleWrapper>
                      <LatestNewsTitleText>Новости</LatestNewsTitleText>
                  </LatestNewsTitleWrapper>
              </LatestNewsWrapper>
          </MainContent>
          <Footer/>
      </>
  )
}


const MainContent = styled.div`
    font-family: 'Gilroy';
    font-size: 19px;
    padding: 0px 70px 50px 0px;
    display: flex;
    height: 65vh;
`

const LatestRepositoriesWrapper = styled.div`
    padding: 40px 70px 0px 70px;
    font-family: 'Gilroy';
`
const LatestRepositoriesTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`
const LatestRepositoriesTitle = styled.p`
    font-size: 22px;
    margin-right: 70px;
`
const LatestRepositoriesAddButton = styled.button`
    font-family: 'Gilroy';
    background-color: #1f883d;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 13px;
    cursor: pointer;
    color: white;
`
const LatestRepositoriesAddLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-family: 'Gilroy';
    font-size: 15px;
`

const LatestRepositoryFindForm = styled.form`
    margin-top: 25px;
`
const LatestRepositoryFindInput = styled.input`
    padding: 5px 15px;
    position: relative;
    width: 100%;
    border-radius: 5px;
    outline: none;
    font-family: 'Gilroy';
    font-size: 18px;
    border: 1px solid #d0d7de;
    background-color: #f6f8fa;
`
const LatestRepositoryContainerList = styled.div`
    margin-top: 20px;
`
const LatestRepositoryContaiterElem = styled.p`
    font-size: 15px;
    margin-bottom: 5px;
`
const LatestRepositoryContainerListShowMoreButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-family: 'Gilroy';
    margin-top: 15px;
    color: Gray;
`


const LatestNewsWrapper = styled.div`
    padding: 40px 0px 0px 50px;
    width: 750px;
`
const LatestNewsTitleWrapper = styled.div`
    border-bottom: 1px solid #d8dee4;
    padding-bottom: 15px;
`
const LatestNewsTitleText = styled.p`
    position: relative;
    font-weight: 700;   
`


export default WorkspacePage;