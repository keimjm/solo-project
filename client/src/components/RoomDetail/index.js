import React from 'react'
import { useEffect, useState } from "react";
import {getARoom} from '../../store/rooms'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditRoom from './EditRoom';


function RoomDetail() {
    const { roomId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showEditRoom, setShowEditRoom] = useState(false);

    
    
    useEffect(() => {
        console.log("HERE")
        dispatch(getARoom(roomId));
      }, [roomId]);
 

    const room = useSelector(state => state.room.room);


    console.log(room)

    //const total = room.review.reduce((acc, review) => acc + review.rating, 0);
    //const avgRating = total / room.review.length;

    const avgRating = 4.5;

    if(showEditRoom) {
      return (
      <EditRoom key={room?.id} room={room} hideForm={() => setShowEditRoom(false)} />
      )
    }


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
    <div>
      {(!showEditRoom && (sessionUser?.id === room?.owner_id)) && (
            <button onClick={() => setShowEditRoom(true)}>Edit</button>
          )}
          </div>
  </div>
  )
}

export default RoomDetail;
