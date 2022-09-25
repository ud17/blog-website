import React from 'react';
import styled from 'styled-components';
import Latest from '../components/Latest';
import Popular from '../components/Popular';

function Home() {

  return (
    <HomeWrapper>
        <Popular />
        <Latest />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  padding: 0% 10%;
`;

export default Home;