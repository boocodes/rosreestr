import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./pages/welcome";
import {Route, Routes} from "react-router-dom";



function App() {
  return (
   <>
        <Routes>
            <Route
                path={"/welcome"}
                element={<Welcome/>}
            />

        </Routes>
   </>
  );
}

export default App;
