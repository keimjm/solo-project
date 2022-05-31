import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, NavLink, Route } from 'react-router-dom'
import FilterBar from './components/FilterBar/index'
import './Home.css'
import CardBlock from './components/CardBlock'
import {loadRooms} from './store/rooms';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadRooms());

  }, [dispatch]);



  // useEffect(() => {
    
  //   dispatch(getARoom());
  // }, [dispatch, selectRoom])




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
          return (
            <CardBlock key={room.id} room={room}/>
          
          );
        })}
            
            {/* <CardBlock/>
            <CardBlock/>
            <CardBlock/> */}
        </div>
    </div>
  )
}

export default Home
