import React from 'react';
import "../styles/List.css";
import {AiFillEye} from "react-icons/ai";
import { useState, useEffect } from 'react';
import { useGetAllBlogsQuery } from '../service/blogApi';
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
              <img src={`${CONSTANT.baseUrl}/${blog.image}`}/>
              <h4>{blog.location}</h4>
              <div className='view'>
                <AiFillEye/>
                <h5>{blog.views}</h5>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default List;