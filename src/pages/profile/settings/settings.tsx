import styled from "styled-components";
import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectUserData} from "../../../redux/reducers/user/selector";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import CommonSettingsTab from "./settingsTabs/commonTab";
import AdminSettingsTab from "./settingsTabs/adminTab";
import AppearanceSettingsTab from "./settingsTabs/appearanceTab";
import {getLastElemOfPath} from "../../../utils/paramsMethods";


interface Props{

}


interface IDisplayinTabCase{
    tab: string;
}

function DisplayingTabCase(props:IDisplayinTabCase){
    switch (props.tab){
        case "common":
            return <CommonSettingsTab/>
        case "admin":
            return <AdminSettingsTab/>
        case "appearance":
            return <AppearanceSettingsTab/>
        default:
            return <></>
    }
}


function ProfileSettingsPage(props:Props){

    const userData = useAppSelector(selectUserData);
    const location = useLocation();
    const settingsForm = useRef<HTMLFormElement>(null);

    function handleSumbit(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }

    const [tabState, setTabState] = useState("common");
    console.log(tabState);
    useEffect(()=>{
        setTabState(getLastElemOfPath(location.pathname));
    }, [location.pathname])


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
                            <NavigateSettingsListElem to={"./common"}>Открытые данные</NavigateSettingsListElem>
                            <NavigateSettingsListElem to={"./admin"}>Страница</NavigateSettingsListElem>
                            <NavigateSettingsListElem to={"./appearance"}>Окружение</NavigateSettingsListElem>
                        </NavigateSettingsListWrapper>
                    </NavigationSettingsWrapper>
                    <DisplayingTabCase tab={tabState}/>
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






export default ProfileSettingsPage;