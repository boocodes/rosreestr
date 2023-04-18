import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./pages/welcome";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/login";



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
                element={<Welcome/>}
            />
            <Route
                path={"/signup"}
                element={<Welcome/>}
            />
            <Route
                path={"profile/settings"}
                element={<Welcome/>}
            />
            <Route
                path={"/workspace"}
                element={<Welcome/>}
            />

        </Routes>
   </>
  );
}

export default App;
