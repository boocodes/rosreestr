import styled from "styled-components";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";

interface Props{

}


function ProfileCommonPage(props:Props){

    const userData = useAppSelector(selectUserData)

    return(
        <>
            <Header/>
            <MainContent>
                <AboutUserWrapper>
                    <UserImage></UserImage>
                    <UserDataTextFieldWrapper>
                        <UserFirstname>{userData.firstname}</UserFirstname>
                        <UserLogin>{userData.login}</UserLogin>
                    </UserDataTextFieldWrapper>
                    <EditUserDataButtonWrapper>
                        <EditUserDataButton>Изменить</EditUserDataButton>
                    </EditUserDataButtonWrapper>
                    <AchievmentsWrapper>
                        <AchievmentsTitle>Достижения:</AchievmentsTitle>
                        <AchievmentsListWrapper>
                            <AchievmentsListElem>Список пуст</AchievmentsListElem>
                        </AchievmentsListWrapper>
                    </AchievmentsWrapper>
                </AboutUserWrapper>
                <WorkspaceWrapper>
                    <WorkspaceWrapperHeader>
                        <WorkspaceWrapperHeaderElement href={"./profile"}>Предпросмотр</WorkspaceWrapperHeaderElement>
                        <WorkspaceWrapperHeaderElement href={"./contains"}>Контейнеры</WorkspaceWrapperHeaderElement>
                    </WorkspaceWrapperHeader>
                    <RecentContainsWrapper>
                        <RecentContainsWrapperTitle>Недавние контейнеры</RecentContainsWrapperTitle>
                        <RecentContainsListWrapper>
                            <RecentContainsListElem></RecentContainsListElem>
                        </RecentContainsListWrapper>
                    </RecentContainsWrapper>

                </WorkspaceWrapper>
            </MainContent>
            <Footer/>
        </>
    )
}

const MainContent = styled.div`
    width: 1400px;
    border: 1px solid red;
    margin: 0 auto 200px auto;
    display: flex;
    
`

const AboutUserWrapper = styled.div`
    font-family: 'Gilroy';
    padding: 30px 0px 30px 40px;
`

const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    font-family: 'Gilroy';
`

const UserImage = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    background-color: yellow;   
`
const UserDataTextFieldWrapper = styled.div`
  margin-top: 25px;
`
const UserFirstname = styled.p`
    font-size: 32px;
    font-weight: 600;
   
    margin-bottom: 5px;
`
const UserLogin = styled.p`
    font-size: 24px;
    opacity: 0.7;
`

const EditUserDataButtonWrapper = styled.div`
    margin-top: 20px;
`
const EditUserDataButton = styled.button`
    width: 250px;
    border: none;
    font-size: 24px;
    font-family: 'Gilroy';
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
`
const AchievmentsWrapper = styled.div`
    margin-top: 30px;
`
const AchievmentsTitle = styled.p`
    font-size: 24px;
`
const AchievmentsListWrapper = styled.div`

`
const AchievmentsListElem = styled.div`

`

const WorkspaceWrapperHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

const WorkspaceWrapperHeaderElement = styled.a`
    text-decoration: none; 
    color: black;
    margin-right: 10px;
    font-size: 20px;
    border: 1px solid black;
    padding: 10px;
`

const RecentContainsWrapper = styled.div`
    margin-top: 50px;
`
const RecentContainsWrapperTitle = styled.p`
    font-size: 22px;
    
`
const RecentContainsListWrapper = styled.div`

`
const RecentContainsListElem = styled.p`

`

export default ProfileCommonPage;