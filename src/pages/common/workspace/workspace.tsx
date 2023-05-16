import styled from "styled-components";
import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectContains} from "../../../redux/reducers/contain/selector";
import {selectUserData} from "../../../redux/reducers/user/selector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {useEffect} from "react";
import {getSelfContains} from "../../../utils/fetchMethod";
import {addContain} from "../../../redux/reducers/contain/reducer";
import {isArrayEmpty} from "../../../utils/usefullMethods";
import {changeUserAuthFlag} from "../../../redux/reducers/user/reducer";

interface Props{

}

interface IContainsList{
    title: string;
    contain_link: string;
    private: string;
    user_id: string;
    edited: string;
    created: string;
    contain_id: string;
    description: string;
}

function WorkspacePage(props:Props){

    const containList = useAppSelector(selectContains);
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    console.log(containList);
    useEffect(()=>{
        const objectData = {
            user_id: userData.user_id,
            user_password: userData.password,
        }
        getSelfContains("POST", objectData, "https://rosreestr/api/container/get_self_contains.php", dispatch, addContain);
    }, [])

    console.log(containList);
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
                  {
                      isArrayEmpty(containList) ? <LatestRepositoryContainerElemNotLink>Ничего не найдено</LatestRepositoryContainerElemNotLink> :
                          <LatestRepositoryContainerList>
                              {
                                  containList.map((elem:IContainsList)=>{
                                      return <LatestRepositoryContainerElem to={"/container/" + userData.login + "/" + elem.title} key={elem.title}>{userData.login}/{elem.title}</LatestRepositoryContainerElem>
                                  })
                              }
                          </LatestRepositoryContainerList>
                  }
                  <LatestRepositoryContainerListShowMoreButton>Показать больше</LatestRepositoryContainerListShowMoreButton>
              </LatestRepositoriesWrapper>
              <LatestNewsWrapper>
                  <LatestNewsTitleWrapper>
                      <LatestNewsTitleText>Новости</LatestNewsTitleText>
                  </LatestNewsTitleWrapper>
                  <LatestNewsTextWrapper>
                      <LatestNewText>Новостей пока что нет</LatestNewText>
                  </LatestNewsTextWrapper>
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
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const LatestRepositoryContainerElem = styled(Link)`
    font-size: 17px;
    margin-bottom: 5px;
    text-decoration: none;
    color: black;
    margin-bottom: 15px;
    :last-child{
        margin-bottom: 0px;
    }
    
`
const LatestRepositoryContainerElemNotLink = styled.p`
    font-size: 15px;
    margin-bottom: 5px;
    text-decoration: none;
    margin-top: 20px;
    font-weight: 700;
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
const LatestNewsTextWrapper = styled.div`
    margin-top: 35px;
`

const LatestNewText = styled.p`

`


export default WorkspacePage;