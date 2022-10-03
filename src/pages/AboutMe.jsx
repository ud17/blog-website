import React from 'react';
import styled from 'styled-components';
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className='about-card'>
      <img src={"../images/display-picture.jpg"} alt="display-picture"/>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
    </div>
  )
}

export default AboutMe;