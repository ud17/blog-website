import React from 'react';
import styled from 'styled-components';
import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <div className='about-card'>
      <div className='card-img'>
        <img src={"../images/display-picture.jpg"} alt="display-picture"/>
      </div>      
      <h1><i>"Travel is the only thing you buy that makes you richer"</i></h1>
      <h3>Welcome to my travel blog, Love Travelling. I’m Udit, an independent traveller writing about my visits to countries near and far.
          I research destinations myself without the need for a tour guide or packaged trip.  That’s part of the fun – visiting the local library and selecting some travel guides, looking things up online and, of course, all the amazing tips I discover from fellow travel bloggers.</h3>
    </div>
  )
}

export default AboutMe;