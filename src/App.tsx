import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {
    LoginPage, RegistrationPage,
    WelcomePage,
} from './';



function App() {
  return (
      <Routes>
          <Route path={"/"} element={<WelcomePage/>}/>
          <Route path={"/login"} element={<LoginPage/>}/>
          <Route path={"/registration"} element={<RegistrationPage/>}/>
      </Routes>
  );
}

export default App;
