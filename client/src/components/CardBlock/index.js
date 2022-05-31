import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './CardBlock.css'
import {getARoom} from '../../store/rooms';

function CardBlock({ room }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const total = room.review.reduce((acc, review) => acc + review.rating, 0);
  const avgRating = total / room.review.length;

  const selectRoom = (id) => {
    console.log('HELLOOO')
    dispatch(getARoom(id))
    history.push(`/rooms/${id}`)
  }
  
  return (
    <button onClick={selectRoom(room.id)}>
    <div className='card-block'>
      
      <img src={room.file_name}
      alt="" />
        <div className='card-info'>
            <h2>{room.location.city}, {room.location.country}</h2>
            <span>{avgRating} <i class="fa-solid fa-star fa-sm"></i></span>
            <h4></h4>
            <p>${room.price}</p>
        </div>
    </div>
    </button>
  )
}

export default CardBlock;
