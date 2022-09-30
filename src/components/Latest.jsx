import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../styles/Latest.css";
import { Link, useNavigate } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetLatestBlogsQuery, useIncrementBlogViewMutation } from '../service/blogApi';
const CONSTANT = require("../global/constant");

const Latest = () => {

    const navigate = useNavigate();
    const [latest, setLatest] = useState([]);
    const [blogId, setBlogId] = useState();
    const [incrementBlogViewById, result] = useIncrementBlogViewMutation(skipToken);

    // react redux returns {} by default
    const {data, isLatestFetching} = useGetLatestBlogsQuery();

    // get all latest blogs
    useEffect(() => {
        const getLatestBlogs = data?.data;
        setLatest(getLatestBlogs);
    }, [data])

    // update blog view
    const handleClick = async (blogId) => {
        setBlogId(blogId);
        await incrementBlogViewById(blogId);
    }

    if(isLatestFetching) return "Loading...";

    // wait for api to respond back with `success`
    if(result.isSuccess) navigate(`/blog/${blogId}`);

    return (
        <div className='container-div'>
            <h3>Recently Added</h3>
            <Splide options={{
                perPage: 4,
                arrows: true,
                pagination: false,
                drag: "free",
                gap: "5rem"
            }}>
                {
                    latest?.map((blog) => {
                        return (
                            <SplideSlide key={blog._id}>
                                <div className='card' onClick={() => handleClick(blog._id)}>
                                    {/* <Link to={"/blog/" + blog._id} onClick={() => handleClick(blog._id)}>
                                        <p>{blog.title}</p>
                                        <img src={`${CONSTANT.baseUrl}/${blog.image}`} alt="travel"/>
                                        <Gradient />
                                    </Link> */}
                                    <p>{blog.title}</p>
                                    <img src={`${CONSTANT.baseUrl}/${blog.image}`} alt="travel"/>
                                    <Gradient />
                                </div>        
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: fit-content;
    height: fit-content;
    background: linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5))
`

export default Latest;