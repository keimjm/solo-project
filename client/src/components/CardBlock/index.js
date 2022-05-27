import React from 'react'

function CardBlock({src, distance, city, country, review, price }) {
  return (
    <div className='card-block'>
        <img src={src} alt="" />
        <div className='car-info'>
            <h2>{city}, {country}</h2>
            <span>{review}</span>
            <h4>{distance}</h4>
            <p>$ {price}</p>
        </div>
    </div>
  )
}

export default CardBlock;
