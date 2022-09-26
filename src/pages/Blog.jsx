import React from 'react';
import styled from 'styled-components';
import {AiFillEye} from "react-icons/ai";
import { useParams } from 'react-router-dom';

function Blog() {

  const { blogId } = useParams();
  console.log('state', blogId);

  return (
    <DetailWrapper>
      <Card>
        <h2>{'Blog title'}</h2>
        <img src={'../images/banff.jpg'} alt="banff" />
        <View>
          <AiFillEye style={{marginTop: '0.3rem', marginRight: '0.3rem'}}/>
          <h4>Views</h4>
        </View>
      </Card>
      <Description>
        <h3>Place Description</h3>
      </Description>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 0% 10%;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 2rem;
    position: relative;
    height: auto; 
    width: auto; 
    max-width: 30rem;
    max-height: 30rem;
}
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

const View = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  h4 {
    margin: 0;
  }
`;

export default Blog;