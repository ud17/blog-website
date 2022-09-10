import React from 'react';
import {Routes, Route} from "react-router-dom";
import AboutMe from './AboutMe.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Home from "./Home.jsx";
import List from './List.jsx';

function Pages() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/blogs/" element={<List />} />
        <Route exact path='/about/' element={<AboutMe />}/>
        {/* <Route exact path="/contact/" element={<Contact />}/> */}
        <Route exact path="/blog/" element={<Blog />}/>
    </Routes>
  )
}

export default Pages;