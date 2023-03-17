import React from 'react';
import './details.css';


const Details = ({ title, body }) => {
  return (
    <div className='details'>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
  )
}

export default Details;