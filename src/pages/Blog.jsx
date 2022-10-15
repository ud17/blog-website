import React from 'react';
import styled from 'styled-components';
import {AiFillEye} from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useGetBlogByIdQuery } from '../service/blogApi';
import { useState, useEffect } from 'react';
const CONSTANT = require("../global/constant");

function Blog() {

  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const {data, isFetching} = useGetBlogByIdQuery(blogId);

  useEffect(() => {
    const response = data?.data;
    setBlog(response);
  }, [data])

  if(isFetching) return "Loading...";

  return (
    <DetailWrapper>
      <Card>
        <h2>{blog?.location}</h2>
        <img src={`${CONSTANT.baseUrl}${blog?.image}`} alt={blog?.title} />
        <View>
          <AiFillEye style={{marginTop: '0.3rem', marginRight: '0.3rem'}}/>
          <h4>{blog?.views}</h4>
        </View>
      </Card>
      <Description>
        <h3>{blog?.description}</h3>
      </Description>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 0% 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
    width: 100%; 
    max-width: 30rem;
    max-height: 30rem;
}
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  text-align: justify;
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