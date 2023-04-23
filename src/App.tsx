import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./pages/common/welcome";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/authorization/login";
import RegistrationPage from "./pages/authorization/signup";
import ProfileSettingsPage from "./pages/profile/settings/settings";
import WorkspacePage from "./pages/common/workspace/workspace";
import {useAppSelector} from "./hooks/useAppSelector";
import {selectUserAuthFlag} from "./redux/reducers/user/selector";
import WelcomePage from "./pages/common/welcome";
import ProfilePage from "./pages/profile/profile";
import ProfileCommonPage from "./pages/profile/profileCommon";
import NotFoundPage from "./pages/common/notFound";
import AddContainerPage from "./pages/common/containers/addContainer";
import LogoutPage from "./pages/common/logout";

function App() {

    const userAuthFlag:boolean = useAppSelector(selectUserAuthFlag);

  return (

   <>
        <Routes>
            <Route
                path={"/welcome"}
                element={userAuthFlag ? <Navigate to={"/workspace"}/> : <WelcomePage/> }
            />
            <Route
                path={"/login"}
                element={userAuthFlag ? <Navigate to={"/workspace"}/> : <LoginPage/>}
            />
            <Route
                path={"/signup"}
                element={userAuthFlag ? <Navigate to={"/workspace"}/> : <RegistrationPage/>}
            />
            <Route
                path={"profile/settings"}
                element={userAuthFlag ? <ProfileSettingsPage/> : <Navigate to={"/login"}/>}
            />
            <Route
                path={"/workspace"}
                element={userAuthFlag ? <WorkspacePage/> : <Navigate to={"/login"}/>}
            />
            <Route
                path={"/"}
                element={<Navigate to={"/welcome"}/>}
            />
            <Route
                path={"/profile/*"}
                element={userAuthFlag ? <ProfilePage/> : <Navigate to={"/login"}/>}
            />
            <Route
                path={"*"}
                element={<NotFoundPage/>}
            />
            <Route
                path={"/new"}
                element={userAuthFlag ? <AddContainerPage/> : <Navigate to={"/login"}/>}
            />
            <Route
                path={"/logout"}
                element={userAuthFlag ? <LogoutPage/> : <Navigate to={"/welcome"}/>}
            />
            <Route
                path={"/settings/*"}
                element={userAuthFlag ? <ProfileSettingsPage/> : <Navigate to={"/login"}/>}
            />
        </Routes>
   </>
  );
}

export default App;
