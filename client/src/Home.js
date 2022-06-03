import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom'
import FilterBar from './components/FilterBar/index'
import './Home.css'
import CardBlock from './components/CardBlock'
import {loadRooms} from './store/rooms';
import { NavLink } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(false);
  // const history = useHistory();

  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);



  const rooms = useSelector(state => {
     if(state.room.rooms.length > 0) return state.room.rooms
  });



  if(!rooms) {
    return null;
  }

  return (
    <div className='home-page'>
        <FilterBar filterResults={() => setFilter(true)} />

       {(!filter && ( <div className='room-section'>
          {rooms.map((room) => {
            //console.log(room)
          return (
            <div className='room-card-link'>
             <NavLink key={room.id} to={`/rooms/${room.id}`} room={room} className="room-nav-link">
            <CardBlock key={room.id} room={room} />
            </NavLink>
            </div>
          );
        })}
        </div>
        ))}
        <NavLink exact to="/map" className="map-link">
            <button className='map-btn'>See Map</button>
        </NavLink>
    </div>
  )
}

export default Home
