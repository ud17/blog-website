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
                                    <img src={'../images/banff.jpg'} alt="travel"/>
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