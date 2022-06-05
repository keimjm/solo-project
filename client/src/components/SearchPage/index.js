import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import CardBlock from '../CardBlock/index'
import { NavLink } from 'react-router-dom';
import './SearchPage.css'

function SearchPage() {
    const rooms = useSelector(state => state.search.search)

    if(rooms?.length === 0){
      return (
        <div className='no-results'>
          <h4>Sorry, no posts match that search. Try another one</h4>
        </div>
      )
    }

  return (
    <div className='search-page'>
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
