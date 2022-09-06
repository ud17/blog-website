import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../styles/Latest.css";
import { Link } from "react-router-dom";

function Latest() {

    const [latest, setLatest] = useState([{
        id: 1,
        title: 'First Blog',
        description: 'Description goes here'
    }, {
        id: 2,
        title: 'Second Blog',
        description: 'Description goes here'
    }]);

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
                latest.map((blog) => {
                    return (
                        <SplideSlide key={blog.id}>
                            <div className='card'>
                                <Link to={"/blog/" + blog.id}>
                                    <p>{blog.title}</p>
                                    <img src={'https://image.shutterstock.com/image-photo/travel-photographer-equipment-on-rocky-600w-267670610.jpg'} alt="travel"/>
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
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5))
`;

export default Latest;