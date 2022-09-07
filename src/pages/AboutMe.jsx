import React from 'react';
import styled from 'styled-components';

function AboutMe() {
  return (
    <AboutWrapper>
      <div>
        <DisplayImage src={"../images/display-picture.jpg"} alt="display-picture"/>
      </div>
      <Info>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      </Info>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: flex-start;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const DisplayImage = styled.img`
  height: auto; 
  width: auto; 
  max-width: 30rem;
  max-height: auto;
  object-fit: contain;
`;

const Info = styled.div`
  margin-left: 10rem;

  h3 {
    margin-top: 0;
  }
`;

export default AboutMe;