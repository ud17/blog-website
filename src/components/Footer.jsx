import React from 'react';
import "../styles/Footer.css";
const LINK = require("../utils/Links");

function Footer() {
  return (
    <div className='footer'>
      <a href={LINK.github} target="_blank"><img src={"../images/github.png"} /></a>
      <a href={LINK.instagram} target="_blank"><img src={"../images/instagram.png"} /></a>
      <a href={LINK.linkedin} target="_blank"><img src={"../images/linkedin.png"} /></a>
    </div>
  )
}

export default Footer;