import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../styles/Latest.css";
import { Link } from "react-router-dom";
import { useGetLatestBlogsQuery } from '../service/blogApi';
const CONSTANT = require("../global/constant");

const Latest = () => {

    const [latest, setLatest] = useState([]);

    // react redux returns {} by default
    const {data, isLatestFetching} = useGetLatestBlogsQuery();

    useEffect(() => {
        const getLatestBlogs = data?.data;
        setLatest(getLatestBlogs);
    }, [data])

    if(isLatestFetching) return "Loading...";

    return (
        <div className='container-div'>
            <h3>Newly Added</h3>
            <Splide options={{
                perPage: 3,
                arrows: true,
                pagination: false,
                drag: "free",
                gap: "5rem"
            }}>
                {
                    latest?.map((blog) => {
                        console.log(blog.image)
                        return (
                            <SplideSlide key={blog._id}>
                                <div className='card'>
                                    <Link to={"/blog/" + blog._id}>
                                        <p>{blog.title}</p>
                                        <img src={`${CONSTANT.baseUrl}/${blog.image}`} alt="travel"/>
                                        <Gradient />
                                    </Link>
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