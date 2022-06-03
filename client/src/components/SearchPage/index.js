import React, {useState,} from 'react';
import { useSelector } from 'react-redux';
import CardBlock from '../CardBlock/index'
import { NavLink } from 'react-router-dom';

function SearchPage() {
    const rooms = useSelector(state => state.search.search)

    console.log(rooms)

  return (
    <div className='searchPage'>
        <div className='search-info'>
        {rooms?.map((room) => {
            //console.log(room)
          return (
            <div className='room-card-link'>
             <NavLink key={room?.id} to={`/rooms/${room?.id}`} room={room} className="room-nav-link">
            <CardBlock key={room?.id} room={room} />
            </NavLink>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default SearchPage
