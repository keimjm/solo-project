import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilterBar from './components/FilterBar/index'
import './Home.css'
import CardBlock from './components/CardBlock'
import {loadRooms} from './store/rooms';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRooms());
  }, [dispatch]);

  const rooms = useSelector(state => {
    
    if(state.room.rooms.length > 0){
      // //console.log(state.room.rooms)
      // let returnArr = state.room.rooms.map(roomId => state.room[roomId]);
      // console.log(returnArr)
      // return returnArr
      return state.room.rooms    //.map(roomId => state.room.rooms[roomId])
    }
  });

  console.log(rooms)



  if(!rooms) {
    return null;
  }

  return (
    <div className='home-page'>
        <FilterBar/>

        <div className='room-section'>
          {rooms.map((room) => {
            console.log(room)
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
