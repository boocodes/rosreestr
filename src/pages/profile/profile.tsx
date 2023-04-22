import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import ProfileCommonPage from "./profileCommon";

import ProfileCommon from "./profileCommon";

interface Props{

}


function ProfilePage(props:Props){


    return(
       <>
            <ProfileCommonPage/>
       </>
    );
}


export default ProfilePage;