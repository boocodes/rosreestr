import styled from "styled-components";
import {Link, Route, Routes, useLocation, useParams} from "react-router-dom";
import ProfileCommonPage from "./profileCommon";
import RecentContainersProfileTab from './profileTabs/recentContainers';
import AllContainersProfileTab from "./profileTabs/allContainers";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";
import {useEffect, useState} from "react";
import {getLastElemOfPath} from "../../utils/paramsMethods";
import ProjectsProfileTab from "./profileTabs/projects";
import PackagesProfileTab from "./profileTabs/packages";


interface Props{

}


interface IDisplayinTabCase{
    tab: string;
}

function DisplayingTabCase(props:IDisplayinTabCase){

    switch (props.tab){
        case "overview":
            return <RecentContainersProfileTab/>
        case "contains":
            return <AllContainersProfileTab/>
        case "projects":
            return <ProjectsProfileTab/>
        case "packages":
            return <PackagesProfileTab/>
        default:
            return <></>
    }

}


function ProfilePage(props:Props){

    const location = useLocation();

    const [locationPath, setLocationPath] = useState("overview");

    useEffect(()=>{
        setLocationPath(getLastElemOfPath(location.pathname));
    }, [location.pathname])

    return(
       <>
           <Header/>
           <MainContent>
               <ProfileCommonPage/>
               <WorkspaceWrapper>
                   <WorkspaceWrapperHeader>
                       <WorkspaceWrapperHeaderElement tab={locationPath} to={"./overview"}>Предпросмотр</WorkspaceWrapperHeaderElement>
                       <WorkspaceWrapperHeaderElement tab={locationPath} to={"./contains"}>Контейнеры</WorkspaceWrapperHeaderElement>
                       <WorkspaceWrapperHeaderElement tab={locationPath} to={"./projects"}>Проекты</WorkspaceWrapperHeaderElement>
                       <WorkspaceWrapperHeaderElement tab={locationPath} to={"./packages"}>Пакеты</WorkspaceWrapperHeaderElement>
                   </WorkspaceWrapperHeader>
                   <DisplayingTabCase tab={locationPath}/>
               </WorkspaceWrapper>
           </MainContent>
           <Footer/>
       </>
    );
}


const MainContent = styled.div`
    width: 1400px;
    margin: 0 auto 200px auto;
    display: flex;
    
`

const WorkspaceWrapperHeader = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`

interface IWorkspaceWrapperHeaderElement{
    tab: string;
}

const WorkspaceWrapperHeaderElement = styled(Link)<IWorkspaceWrapperHeaderElement>`
    text-decoration: none; 
    color: black;
    margin-right: 10px;
    font-size: 20px;
    :nth-child(
    ${props=>props.tab === "overview" ? "1" : props.tab === "contains" ? "2" : props.tab === "projects" ? "3" : "4"}
    ){
        border-bottom: 2px solid #fd8c73;
    }
    padding: 10px;
`

const WorkspaceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    font-family: 'Gilroy';
`


export default ProfilePage;