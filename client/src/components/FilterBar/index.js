import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filter, loadRooms } from '../../store/rooms';
import './FilterBar.css'

function FilterBar() {
  const dispatch = useDispatch();

  const rooms = useSelector(state => {
    if(state.room.rooms.length > 0) return state.room.rooms   
  });

  const removeFilter = () => {
    dispatch(loadRooms());
  }

  const filterResults = (filterBy) => {
      const filtered = rooms?.filter(room => room?.house_type === filterBy)
      dispatch(filter(filtered));
  }


  return (
    <div className='filter-block'>
        <div className='filter-bar-icons'>
            <div className='icon-block'>
                <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults("Beachfront")}>
                  <span className='filter-icon'><i className="fa-solid fa-umbrella-beach"></i></span>
                  <span className='filter-name'>Beachfront</span>
                </button>
            </div>
            <div className='icon-block'>
            <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults("Expensive")}>
                <span className='filter-icon'><i className="fa-solid fa-money-bill-1"></i></span>
                <span className='filter-name'>Expensive</span>
            </button>
            </div>
            <div className='icon-block'>
            <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults("Camping")}>
                <span className='filter-icon'><i className="fa-solid fa-campground"></i></span>
                <span className='filter-name'>Camping</span>
            </button>
            </div>
            <div className='icon-block'>
            <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults("Lakefront")}>
                <span className='filter-icon'><i className="fa-solid fa-water"></i></span>
                <span className='filter-name'>Lakefront</span>
            </button>
            </div>
            <div className='icon-block'>
            <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults("City")}>
                <span className='filter-icon'><i className="fa-solid fa-building"></i></span>
                <span className='filter-name'>City</span>
            </button>
            </div>
            <div className='icon-block'>
            <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults("Camper")}>
                <span className='filter-icon'><i className="fa-solid fa-caravan"></i></span>
                <span className='filter-name'>Camper</span>
            </button>
            </div>
            <div className='icon-block'>
                <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true" onClick={() => filterResults("Castles")}>
                  <span className='filter-icon'><i className="fa-solid fa-chess-rook"></i></span>
                  <span className='filter-name'>Castles</span>
                </button>
            </div>
            <div className='filter-icon-block'>
                <button className='filter-button' type= "button" aria-hidden="false" aria-pressed="true"  onClick={() => removeFilter()}>
                  <span className='filter-name'>Remove Filter</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default FilterBar;
