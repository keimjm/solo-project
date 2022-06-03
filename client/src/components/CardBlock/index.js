import React from 'react'
import './CardBlock.css'

function CardBlock({ room }) {

  let avgRating;

  if(room?.review.length > 0){
  const total = room?.review.reduce((acc, review) => acc + review.rating, 0);
     avgRating = total / room?.review.length;
  } else {
     avgRating = "No Reviews";
  }

  
  
  
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
