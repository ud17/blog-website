import React, { useState, useEffect } from 'react';
import '../styles/Popular.css';
import {SplideSlide, Splide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useGetMostViewedBlogsQuery } from "../service/blogApi";
const CONSTANT = require("../global/constant");

function Popular() {

    const [mostViewed, setMostViewed] = useState([]);
    const {data, isFetching} = useGetMostViewedBlogsQuery();

    useEffect(() => {
        const getMostViewedBlogs = data?.data;
        setMostViewed(getMostViewedBlogs);
    }, [data])

    if(isFetching) return "Loading...";

    return (
        <div className='container-div'>
            <h3>Most Viewed</h3>
            <Splide options={{
                perPage: 3,
                arrows: true,
                drag: "free",
                gap: "5rem"
            }}>
                {
                    mostViewed?.map((blog) => {
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

export default Popular;