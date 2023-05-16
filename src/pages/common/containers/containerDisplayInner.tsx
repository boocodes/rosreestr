import styled from "styled-components";
import {useDispatch} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectUserData} from "../../../redux/reducers/user/selector";
import {
    selectContainClosedFlag,
    selectContainNotFoundFlag,
    selectContainViewPage
} from "../../../redux/reducers/contain/selector";
import {getBooleanFromTextBoolean} from "../../../utils/usefullMethods";
import {useEffect, useState} from "react";
import {getLastElemOfPath} from "../../../utils/paramsMethods";
import ContainSettingsTab from "./containTabs/settingsTab/settingsTab";
import ContainIssuesTab from "./containTabs/issuesTab/issuesTab";
import ContainPullRequestsTab from "./pullRequestsTab/pullRequestsTab";
import ContainCodeTab from "./containTabs/codeTab/codeTab";
import Header from "../../../ui/header/header";
import Footer from "../../../ui/footer/footer";
interface Props{

}


interface IDisplayingContainTabs{
    tab: string;
}

function DisplayingContainTabs(props:IDisplayingContainTabs){
    switch (props.tab){
        case "settings":
            return <ContainSettingsTab/>
        case "issues":
            return <ContainIssuesTab/>
        case "pulls":
            return <ContainPullRequestsTab/>
        default:
            return <ContainCodeTab/>
    }
}


function ContainerDisplayInner(props:Props){

    const dispatch = useDispatch();
    const location = useLocation();
    const userData = useAppSelector(selectUserData);
    const containViewPage = useAppSelector(selectContainViewPage);
    const containClosedFlag = useAppSelector(selectContainClosedFlag);
    const containNotFoundFlag = useAppSelector(selectContainNotFoundFlag);


    const [navTab, setNavTab] = useState("");

    useEffect(()=>{
        setNavTab(getLastElemOfPath(location.pathname));
    }, [location])



    return (
        <>
            <Header/>
            <MainContent>
                <HeaderContain>
                    <HeaderInnerWrapper>
                        <TitleWrapper>
                            <ContainerMainDataTitle>
                                <TitleAuthorLogin>
                                    <TitleAuthorLoginLink to={"/profile/" + containViewPage.contain_author_login}>
                                        {containViewPage.contain_author_login}
                                    </TitleAuthorLoginLink>
                                </TitleAuthorLogin>
                                <TitleSlash>/</TitleSlash>
                                <TitleContainerTitle>
                                    <TitleContainerTitleLink to={"/container/"+ containViewPage.contain_author_login + "/" + containViewPage.title}>
                                        {containViewPage.title}
                                    </TitleContainerTitleLink>
                                </TitleContainerTitle>

                                <PrivateOrPublicTicket>
                                    <PrivateOrPublickTicketText>{getBooleanFromTextBoolean(containViewPage.private) ? "Закрыт" : "Публичный"}</PrivateOrPublickTicketText>
                                </PrivateOrPublicTicket>
                            </ContainerMainDataTitle>
                        </TitleWrapper>
                        <HeaderAdditionalButtonsWrapper>
                            <HeaderAdditionalButtonWrapper>
                                <HeaderAdditionalButtonTitle>Ответвления</HeaderAdditionalButtonTitle>
                            </HeaderAdditionalButtonWrapper>
                        </HeaderAdditionalButtonsWrapper>
                    </HeaderInnerWrapper>
                    <HeaderNavigationWrapper>
                        <HeaderNavigationWrapperElem pathname={navTab}>
                            <HeaderNavigationWrapperTitle to={containViewPage.contain_author_login + "/" + containViewPage.title}>Код</HeaderNavigationWrapperTitle>
                        </HeaderNavigationWrapperElem>
                        <HeaderNavigationWrapperElem pathname={navTab}>
                            <HeaderNavigationWrapperTitle to={containViewPage.contain_author_login + "/" + containViewPage.title + "/issues"}>Проблемы</HeaderNavigationWrapperTitle>
                        </HeaderNavigationWrapperElem>
                        <HeaderNavigationWrapperElem pathname={navTab}>
                            <HeaderNavigationWrapperTitle to={containViewPage.contain_author_login + "/" + containViewPage.title +"/pulls"}>Запросы на вытягивание</HeaderNavigationWrapperTitle>
                        </HeaderNavigationWrapperElem>
                        <HeaderNavigationWrapperElem pathname={navTab}>
                            <HeaderNavigationWrapperTitle to={containViewPage.contain_author_login + "/" + containViewPage.title + "/settings"}>Настройки</HeaderNavigationWrapperTitle>
                        </HeaderNavigationWrapperElem>
                    </HeaderNavigationWrapper>
                </HeaderContain>
                <DisplayingContainTabs tab={navTab}/>
            </MainContent>
            <Footer/>
        </>
    )
}

const TitleAuthorLoginLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const TitleContainerTitleLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const MainContent = styled.div`
    font-family: 'Gilroy';
`

const HeaderContain = styled.div`
    padding: 40px 50px 0px 70px;
    background-color: #f6f8fa;
    border-bottom: 1px solid #d8dee4;
`

const HeaderInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
`
const TitleAuthorLogin = styled.p`
    font-size: 26px;
    font-weight: 400;
    margin-right: 5px;
`
const TitleSlash = styled.p`
    font-size: 26px;
    font-weight: 600;
`
const TitleContainerTitle = styled.p`
    font-size: 26px;
    font-weight: 600;
    margin-left: 5px;
`

const ContainerMainDataTitle = styled.div`
    display: flex;
    align-items: center;
`

const PrivateOrPublicTicket = styled.div`
    border: 1px solid #dde3e8;
    border-radius: 10px;
    padding: 7px 12px;
    margin-left: 20px;
    font-size: 12px;
`
const PrivateOrPublickTicketText = styled.p`
        
`

const HeaderAdditionalButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const HeaderAdditionalButtonWrapper = styled.div`
    border: 1px solid #d5d8db;
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`
const HeaderAdditionalButtonTitle = styled.p`
    opacity: 0.5;
`

const HeaderNavigationWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`

interface IHeaderNavigationWrapperElem{
    pathname: string;
}

const HeaderNavigationWrapperElem = styled.div<IHeaderNavigationWrapperElem>`
    margin-right: 25px;
    :last-child{
        margin-right: 0px;
    }
    position: relative;
    margin-bottom: -1px;
    padding-bottom: 20px;
    :nth-child(${props=>props.pathname === "settings" ? "4" :
                 props.pathname === "pulls" ? "3" :
                 props.pathname === "issues" ? "2" : "1"
    }){
        border-bottom: 2px solid #fd8c73;
    }
    
`

const HeaderNavigationWrapperTitle = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 19px;
`



export default ContainerDisplayInner;