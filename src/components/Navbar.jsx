import React from 'react';
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';


function Navbar() {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <img src={"./images/travel.png"} />
            <Logo to={"/"}>Nomadic Fool</Logo>
        </div>
        <div className='link-container'>
            <Navigate to={"/blogs/"}>Blogs</Navigate>            
            <Navigate to={"/about/"}>About me</Navigate>
            {/* <Navigate to={"/contact/"}>Contact</Navigate> */}
        </div>        
    </div>
  )
}

const Navigate = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    color: bisque;
    padding: 0rem 0.5rem;
`;

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    color: bisque;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Sans', Arial, sans-serif;
    padding: 0rem 0.5rem;
`;

export default Navbar;