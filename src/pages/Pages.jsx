import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./Home.jsx";

function Pages() {
  return (
    <Routes>
        <Route exact path='/' element={<Home />}/>
    </Routes>
  )
}

export default Pages;