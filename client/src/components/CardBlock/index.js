import React from 'react'
import './CardBlock.css'

function CardBlock({ room }) {

  const total = room.review.reduce((acc, review) => acc + review.rating, 0);
  const avgRating = total / room.review.length;

  
  
  
  return (
    <div className='card-block'>
      <img src={room.file_name}
      alt="" /> 
        <div className='card-info'>
            <h2>{room.location.city}, {room.location.country}</h2>
            <span>{avgRating} <i className="fa-solid fa-star fa-sm"></i></span>
            <h4></h4>
            <p>${room.price}</p>
        </div>
    </div>
  )
}

export default CardBlock;
