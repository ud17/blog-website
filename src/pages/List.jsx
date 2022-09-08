import React from 'react';
import "../styles/List.css";
import {AiFillEye} from "react-icons/ai";

function List() {
  return (
    <div className='list'>
      <div className='card'>
        <img src={"../images/display-picture.jpg"}/>
        <h4>Niagara Falls</h4>
        <div className='view'>
          <AiFillEye/>
          <h5>125</h5>
        </div>        
      </div>
    </div>
  )
}

export default List;