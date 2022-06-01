import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom'
import FilterBar from './components/FilterBar/index'
import './Home.css'
import CardBlock from './components/CardBlock'
import {loadRooms, getARoom} from './store/rooms';
import { NavLink } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);



  // const selectRoom = (id) => {
  //   history.push(`/rooms/${id}`)
  // }

  const rooms = useSelector(state => {
    
    if(state.room.rooms.length > 0){
      return state.room.rooms    //.map(roomId => state.room.rooms[roomId])
    }
  });



  if(!rooms) {
    return null;
  }

  return (
    <div className='home-page'>
        <FilterBar/>

        <div className='room-section'>
          {rooms.map((room) => {
            //console.log(room)
          return (
             <NavLink key={room.id} to={`/rooms/${room.id}`} room={room} className="room-nav-link">
            <CardBlock key={room.id} room={room} />
            </NavLink>
            
          );
        })}
        </div>
    </div>
  )
}

export default Home
