import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./pages/common/welcome";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/authorization/login";
import SignupPage from "./pages/authorization/signup";
import ProfileSettingsPage from "./pages/profile/settings";
import WorkspacePage from "./pages/common/workspace";



function App() {
  return (
   <>
        <Routes>
            <Route
                path={"/welcome"}
                element={<Welcome/>}
            />
            <Route
                path={"/login"}
                element={<LoginPage/>}
            />
            <Route
                path={"/signup"}
                element={<SignupPage/>}
            />
            <Route
                path={"profile/settings"}
                element={<ProfileSettingsPage/>}
            />
            <Route
                path={"/workspace"}
                element={<WorkspacePage/>}
            />
            <Route
                path={"/"}
                element={<Navigate to={"/welcome"}/>}
            />
        </Routes>
   </>
  );
}

export default App;
