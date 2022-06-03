import React from 'react'
import { useEffect, useState } from "react";
import {getARoom} from '../../store/rooms'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditRoom from './EditRoom';
import './RoomDetail.css'
import AssociatedBookings from './AssociatedBookings';
import CreateReservation from '../Reservations';

function RoomDetail() {
    const { roomId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showEditRoom, setShowEditRoom] = useState(false);
    const [showCreateReservation, setShowCreateReservation] = useState(false)


    
    useEffect(() => {
        dispatch(getARoom(roomId));
      }, [roomId]);
 

    const room = useSelector(state => state.room.room);



    const total = room?.review.reduce((acc, review) => acc + review.rating, 0);
    const avgRating = total / room?.review.length;

      let content = null;

    if(showEditRoom) {
      return (
      <EditRoom key={room?.id} room={room} hideForm={() => setShowEditRoom(false)} />
      )
    }

    if(showCreateReservation) {
      content = (
        <CreateReservation key={room?.id} room={room} user={sessionUser} hideCreateForm={() => setShowCreateReservation(false)} />
      )
    } else {
      content = (
        < AssociatedBookings key={room?.id} room={room} />
      )
    }


  return (
    <div>
    <div className='room-block'>
        <div className='room-info'>
          <h1>{room?.location?.city}, {room?.location?.country}</h1>
          <span>{avgRating} <i className="fa-solid fa-star fa-sm"></i></span>
          <p>${room?.price}</p>
      </div>
        <img src={room?.file_name}
        alt="" className='room-image'/>
      <div>
        <div>
          <h4 className='description-tag'>{room?.description}</h4>
        </div>
      {(!showEditRoom && (sessionUser?.id === room?.owner_id)) && (
            <button onClick={() => setShowEditRoom(true)} className="room-btn" >Edit</button>
          )}
          {(!showCreateReservation) && (
            <button onClick={() => setShowCreateReservation(true)} className="room-btn" >Book Room</button>
          )}
          </div>
          
  </div>
   {content}
  </div>
  
  )
}

export default RoomDetail;
