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
    <div className="room-block">
    <div className="images-field">
    <div className="listed-images">
    {/* <div className="brew-image-block" key={room.id}>
    <button className="img-button"><img className="brew-image" src={room?.file_name}alt="" /></button>
    </div> */}
    </div>
    <div className="center-image-container">
        <img className="center-image" src={room?.file_name}alt="" />
    </div>
    </div>

    <div className="brew-details-block">

    <h3>{room?.location?.city}, {room?.location?.country}</h3>
    {/* <div className="user-snippet">{users && <img className="profile-image" src={users[brew.user_id]?.image_url}
    alt="" />} {users && users[brew.user_id]?.username}</div>
    <p>{brew?.description}</p>
    {ids.includes(brew.id) && <a href={brew?.pdf_url} download="true">Download</a>} */}

    <p><b>${room?.price}</b></p>

    {/* {brew.brew_tags.map(tag => {
        <p>Tags: {tag?.name}</p>
    })} */}
    </div>

    {/* <div>
    {/* {ids.includes(brew.id) && <a href={brew?.pdf_url} download="true">Download</a>} */}
    {/* <p><b>${brew?.price}</b></p> }
    {brew?.for_sale ? <AddToCart brew={brew}/> : "No longer for Sale" }
    {(brew?.for_sale && sessionUser?.id === brew?.user_id) && (
    <button className="button purple" onClick={() => setShowEditForm(true)}>Show Edit Form</button>
    )}
    </div> */}

{content}

    </div>




  //   <div>
  //   <div className='room-block'>
  //   <h1>{room?.location?.city}, {room?.location?.country}</h1>
  //   <div className='info-image'>
  //       <div className='room-info'>
  //         <span>{avgRating} <i className="fa-solid fa-star fa-sm"></i></span>
  //         <p>${room?.price}</p>
  //         <div className='other-info'>
  //         <p>{room?.total_bathrooms} Bathrooms </p>
  //         <p>{room?.total_bedrooms} Bedrooms</p>
  //         <p>Max Occupancy: {room?.total_occupancy}</p>
  //         </div>
  //     </div>
  //       <img src={room?.file_name}
  //       alt="" className='room-image'/>
  //     <div>
  //     </div>
  //       <div>
  //         <h4 className='description-tag'>{room?.description}</h4>
  //       </div>
  //     {(!showEditRoom && (sessionUser?.id === room?.owner_id)) && (
  //           <button onClick={() => setShowEditRoom(true)} className="room-btn" >Edit</button>
  //         )}
  //         {(!showCreateReservation) && (
  //           <button onClick={() => setShowCreateReservation(true)} className="room-btn" >Book Room</button>
  //         )}
  //         </div>
          
  // </div>
  //  {content}
  // </div>
  
  )
}

export default RoomDetail;
