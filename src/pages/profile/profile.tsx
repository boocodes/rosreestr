import styled from "styled-components";
import {Route, Routes, useLocation, useParams} from "react-router-dom";
import ProfileCommonPage from "./profileCommon";
import RecentContainersProfileTab from './profileTabs/recentContainers';
import AllContainersProfileTab from "./profileTabs/allContainers";
import Header from "../../ui/header/header";
import Footer from "../../ui/footer/footer";


interface Props{

}


function ProfilePage(props:Props){

    const a = useLocation();
    console.log(a);
    return(
       <>
           <Header/>
           <MainContent>
               <ProfileCommonPage/>
               <AllContainersProfileTab/>
           </MainContent>
           <Footer/>
       </>
    );
}


const MainContent = styled.div`
    width: 1400px;
    border: 1px solid red;
    margin: 0 auto 200px auto;
    display: flex;
    
`


export default ProfilePage;