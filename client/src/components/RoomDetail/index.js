import React from 'react'
import { useEffect } from "react";
import {getARoom} from '../../store/rooms'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function RoomDetail() {
    //console.log(room)
    const { roomId } = useParams();
    const dispatch = useDispatch();
    // console.log(roomId)

    //dispatch(getARoom(roomId)) //.then(room => console.log(room))
    
    useEffect(() => {
        console.log("HERE")
        dispatch(getARoom(roomId));
      }, [roomId]);
 

    const room = useSelector(state => state.room.room);

    console.log(room)

    //const total = room.review.reduce((acc, review) => acc + review.rating, 0);
    //const avgRating = total / room.review.length;

    const avgRating = 4.5;


  return (
    <div className='card-block'>
        <div className='card-info'>
          <h2>{room?.location?.city}, {room?.location?.country}</h2>
          <span>{avgRating} <i className="fa-solid fa-star fa-sm"></i></span>
          <h4></h4>
          <p>${room?.price}</p>
      </div>
    <img src={room?.file_name}
    alt="" className='room-image'/>
      
  </div>
  )
}

export default RoomDetail;
