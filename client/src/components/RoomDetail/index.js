import React from 'react'
import { useEffect, useState } from "react";
import {getARoom} from '../../store/rooms'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EditRoom from './EditRoom';
import './RoomDetail.css'
import AssociatedBookings from './AssociatedBookings';
import CreateReservation from '../Reservations';
import EditReservation from '../Reservations/EditReservation';
import ReviewPage from '../Reviews';

function RoomDetail() {
    const history = useHistory();
    const { roomId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showEditRoom, setShowEditRoom] = useState(false);
    const [showCreateReservation, setShowCreateReservation] = useState(false)


    
    useEffect(() => {
        dispatch(getARoom(roomId));
      }, [dispatch]);
 

    const room = useSelector(state => state.room?.room);
    let avgRating;

    if(room?.review.length > 0){
    const total = room?.review.reduce((acc, review) => acc + review.rating, 0);
       avgRating = total / room?.review.length;
    } else {
       avgRating = "No Reviews";
    }

    

      let content = null;

    if(showEditRoom) {
      return (
      <EditRoom key={room?.id} room={room} hideForm={() => setShowEditRoom(false)} />
      )
    }

    if(showCreateReservation) {

      if(!sessionUser?.id){
        history.push("/login");
      } else {
      content = (
        <CreateReservation key={room?.id} room={room} user={sessionUser} hideCreateForm={() => setShowCreateReservation(false)} />
      )
      }
    }  else {
      content = (
        <div className='lower-block'>
        < AssociatedBookings key={room?.id} room={room} user={sessionUser} />
        <ReviewPage key={room?.review.id} room={room} user={sessionUser} />
         </div>
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
