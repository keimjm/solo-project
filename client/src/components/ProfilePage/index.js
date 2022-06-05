import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardBlock from '../CardBlock'
import {loadRooms} from '../../store/rooms';
import { NavLink } from 'react-router-dom';
import './ProfilePage.css'
import AssociatedBookings from '../RoomDetail/AssociatedBookings';
import { getUser } from '../../store/user';
import { deleteReservation} from '../../store/reservation'

function ProfilePage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(() => {
      console.log(sessionUser)

     dispatch(getUser(sessionUser?.id));
    }, [sessionUser])


    const viewBooking = (id) => {

      dispatch(deleteReservation(id))
      window.location.reload();
    }

    const user = useSelector(state => state.user.user);
    const member = new Date(user?.createdAt)
    const date = member.getDate();
    const month = member.getMonth(); 
    const year = member.getFullYear();
    const monthDateYear  = (month+1) + "/" + date + "/" + year; 

    const stateRooms = useSelector(state => {
          if(state.room.rooms.length > 0) return state.room.rooms
      });

      const rooms = stateRooms?.filter(room => room.owner_id === user?.id)


  return (
    <div className='user-profile'>
        <div className='username-block'>
            <h1>{user?.username}</h1>
            <h4>{user?.email}</h4>
            <p>Member since {monthDateYear}</p>
        </div>
        <div className='rooms-reservations'>
        <h2 className='user-headers'>Your Rooms</h2> 
        <div className='room-section'>
        
          {rooms.map((room) => {
          return (
            <div className='room-card-link'>
             <NavLink key={room.id} to={`/rooms/${room.id}`} room={room} className="room-nav-link">
             <CardBlock key={room.id} room={room} />
            </NavLink>
            </div>
          );
        })}
        </div>
        <div>
        <h2 className='user-headers'>Your Reservations</h2>
        {user?.reservation.map((reservation) => {
      return (
    <div className='user-bookings'>
      <table>
      <tr>
        <th>Start Date</th>
        <th> End Date</th>
        <th>Total</th>
      </tr>
      
    <tr key={reservation?.id}>
      <td className="centered">{reservation?.start_date}</td>
      <td className="centered">{reservation?.end_date}</td>
      <td className="centered">${reservation?.total}</td>
      {(reservation?.user_id === sessionUser?.id) && (
        <td className="centered">
          <button onClick={() => viewBooking(reservation?.id)} className="booking-btn">
            View Booking
          </button>
        </td>
        
      )}
    </tr>
    </table>
    </div>
  )
})}
        </div>
        <h2 className='user-headers'>Reviews</h2>
    <div className='review-block'>
    {user?.review.map((review) => {
      return (
    <div className='user-reviews'>
        <table>
      <tr>
        <th>Rating</th>
        <th>Comment</th>
      </tr>
      
    <tr key={review?.id}>
      <td className="centered">{review?.rating} <i className="fa-solid fa-star fa-sm"></i></td>
      <td className="centered">{review?.comment}</td>
    </tr>
    </table>
    </div>
  )
})}
</div>
    </div>
        
    </div>
  )
}

export default ProfilePage
