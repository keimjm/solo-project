import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardBlock from '../components/CardBlock'
import {loadRooms} from '../store/rooms';
import { NavLink } from 'react-router-dom';
import './ProfilePage.css'
import AssociatedBookings from '../components/RoomDetail/AssociatedBookings';

function ProfilePage() {
    const user = useSelector(state => state.session.user);

    const stateRooms = useSelector(state => {
          if(state.room.rooms.length > 0) return state.room.rooms
      });

      const rooms = stateRooms?.filter(room => room.owner_id === user.id)


  return (
    <div>
        <div>
            <h1>{user?.username}</h1>
            <p>{user?.email}</p>
        </div>
        <div className='room-section'>
            <h2>Your Rooms</h2>
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
        
    </div>
  )
}

export default ProfilePage
