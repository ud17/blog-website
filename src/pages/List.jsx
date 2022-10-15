import React from 'react';
import "../styles/List.css";
import {AiFillEye} from "react-icons/ai";
import { useState, useEffect } from 'react';
import { useGetAllBlogsQuery } from '../service/blogApi';
import { Link } from "react-router-dom";
const CONSTANT = require("../global/constant");

function List() {

  const[list, setList] = useState([]);
  const {data, isFetching} = useGetAllBlogsQuery();

  useEffect(() => {
    const response = data?.data.blogs;
    setList(response);
  }, [data]);

  if(isFetching) return "Loading...";

  return (
    <div className='list'>
      {
        list?.map((blog) => {
          return (
            <div className='card'>
              <Link to={{ 
                  pathname: `/blog/${blog._id}`,
                  state: blog
                }}>
                <img src={`${CONSTANT.baseUrl}${blog.image}`} alt={blog.location}/>
                <h4>{blog.location}</h4>
                <div className='view'>
                  <AiFillEye/>
                  <h5>{blog.views}</h5>
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default List;