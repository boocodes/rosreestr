import styled from "styled-components";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectUserData} from "../../redux/reducers/user/selector";
import {Link} from "react-router-dom";
import {useRef} from "react";


interface Props{

}


function ProfileSettingsPage(props:Props){

    const userData = useAppSelector(selectUserData);

    const settingsForm = useRef<HTMLFormElement>(null);

    function handleSumbit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }

    return(
        <>
            <Header/>
            <MainContent>
                <HeaderWrapper>
                    <UserAndLoginTitleWrapper>
                        <UserTitleHeaderTextWrapper>
                            <UserTitleText>{userData.firstname}</UserTitleText>
                            <LoginTitleText>({userData.login})</LoginTitleText>
                        </UserTitleHeaderTextWrapper>
                       <UnderUserTitleText>Ваш личный аккаунт</UnderUserTitleText>
                    </UserAndLoginTitleWrapper>
                    <GoToPersonalPageButton>
                        <GoToPersonalPageLink to={"/profile"}>Перейти на личную страницу</GoToPersonalPageLink>
                    </GoToPersonalPageButton>
                </HeaderWrapper>
                <AttaractiveSettingsWrapper>
                    <NavigationSettingsWrapper>
                        <NavigateSettingsListWrapper>
                            <NavigateSettingsListElem to={"./profile"}>Открытые данные</NavigateSettingsListElem>
                            <NavigateSettingsListElem to={"./admin"}>Страница</NavigateSettingsListElem>
                            <NavigateSettingsListElem to={"./appearance"}>Окружение</NavigateSettingsListElem>
                        </NavigateSettingsListWrapper>
                    </NavigationSettingsWrapper>
                    <DataSettingsWrapper>
                        <DataSettingsTitleWrapper>
                            <DataSettingsTitleText>Открытые данные</DataSettingsTitleText>
                            <DataSettingsUnderTitleLine/>
                        </DataSettingsTitleWrapper>
                        <DataSettingsForm onSubmit={handleSumbit}>
                            <DataSettingsNameInputWrapper>
                                <DataSettingsNameLabel>Имя</DataSettingsNameLabel>
                                <DataSettingsNameInput defaultValue={userData.firstname}/>
                                <DataSettingsNameSubtext>Ваше имя появится там, где отметят ваш вклад. Вы можете удалить его в любое время</DataSettingsNameSubtext>
                            </DataSettingsNameInputWrapper>
                            <DataSettingsNameInputWrapper>
                                <DataSettingsNameLabel>Электронная почта</DataSettingsNameLabel>
                                <DataSettingsNameInput defaultValue={userData.mail}/>
                                <DataSettingsNameSubtext></DataSettingsNameSubtext>
                            </DataSettingsNameInputWrapper>
                            <DataSettingsNameInputWrapper>
                                <DataSettingsNameLabel>О Вас</DataSettingsNameLabel>
                                <DataSettingsNameInput defaultValue={"Данные тут"}/>
                                <DataSettingsNameSubtext>Вы можете @указать других пользователей или организации</DataSettingsNameSubtext>
                            </DataSettingsNameInputWrapper>
                            <DataSettingsNameInputWrapper>
                                <DataSettingsNameLabel>Ссылка</DataSettingsNameLabel>
                                <DataSettingsNameInput defaultValue={"Соцсети..."}/>
                                <DataSettingsNameSubtext></DataSettingsNameSubtext>
                            </DataSettingsNameInputWrapper>
                            <DataSettingsNameInputWrapper>
                                <DataSettingsNameLabel>Компания</DataSettingsNameLabel>
                                <DataSettingsNameInput defaultValue={"ОмГТУ"}/>
                                <DataSettingsNameSubtext></DataSettingsNameSubtext>
                            </DataSettingsNameInputWrapper>
                            <DataSettingsNameInputWrapper>
                                <DataSettingsNameLabel>Расположение</DataSettingsNameLabel>
                                <DataSettingsNameInput defaultValue={"Россия"}/>
                                <DataSettingsNameSubtext></DataSettingsNameSubtext>
                            </DataSettingsNameInputWrapper>
                            <DataSettingsFormSubmitButton value={"Сохранить изменения"} type={"submit"}/>
                        </DataSettingsForm>
                    </DataSettingsWrapper>
                </AttaractiveSettingsWrapper>
            </MainContent>
            <Footer/>
        </>
    )
}

const MainContent = styled.div`
    padding-bottom: 100px;
    width: 1100px;
    font-family: 'Gilroy';
    margin-left: auto;
    margin-right: auto;
   
`

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`

const UserAndLoginTitleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    
`
const UserTitleText = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-right: 10px;
`
const LoginTitleText = styled.p`
    font-size: 22px;
    color: #656d76;
`
const UnderUserTitleText = styled.p`
    margin-top: 10px;
`

const UserTitleHeaderTextWrapper = styled.div`
    display: flex;
    align-items: center;
`

const GoToPersonalPageButton = styled.button`
    background-color: #f6f8fa;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #d5d8db;
`

const GoToPersonalPageLink = styled(Link)`
    text-decoration: none;
    color: #24292f;
    font-family: 'Gilroy';
`


const AttaractiveSettingsWrapper = styled.div`
    display: flex;
    margin-top: 30px;
`

const NavigationSettingsWrapper = styled.div`
    margin-right: 70px;
`

const NavigateSettingsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
`
const NavigateSettingsListElem = styled(Link)`
    margin-top: 20px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;
    text-decoration: none;
    color: black;
    :hover{
        background-color: #f4f6f7;
        transition: 0.4s;
    }
    :first-child{
        font-weight: 600;
        background-color: #f4f6f7;
    }
`

const DataSettingsWrapper = styled.div`
    
`

const DataSettingsTitleWrapper = styled.div`
    margin-top: 10px;
`
const DataSettingsTitleText = styled.h2`
    font-weight: 500;
    margin-bottom: 20px;
`
const DataSettingsUnderTitleLine = styled.div`
    background-color: #d8dee4;
    height: 1px;
    width: 500px;
`

const DataSettingsForm = styled.form`

`

const DataSettingsNameInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`
const DataSettingsNameLabel = styled.label`
    font-size: 20px;
    margin-bottom: 10px;
`
const DataSettingsNameInput = styled.input`
    width: 280px;
    font-size: 17px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #d8dee4;
    font-weight: 500;
`
const DataSettingsNameSubtext = styled.p`
    font-size: 13px;
    width: 280px;
    margin-top: 10px;
    color: #656d76;
`

const DataSettingsFormSubmitButton = styled.input`
    background-color: #1f883d;
    border: 1px solid #1e793a;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    margin-top: 70px;
`

export default ProfileSettingsPage;