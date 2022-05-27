import React from 'react'
import './FilterBar.css'

function FilterBar() {
  return (
    <div className='filter-block'>
        <div className='filter-bar-icons'>
            <div className='icon-block'>
                <button className='filter-icon-button' type= "button" aria-hidden="false" aria-pressed="true">
                  <span className='filter-icon'><i class="fa-solid fa-umbrella-beach"></i></span>
                  <span className='filter-name'>Beachfront</span>
                </button>
            </div>
            <div className='icon-block'>
                <span className='filter-icon'><i class="fa-solid fa-money-bill-1"></i></span>
                <span className='filter-name'>Expensive</span>
            </div>
            <div className='icon-block'>
                <span className='filter-icon'><i class="fa-solid fa-campground"></i></span>
                <span className='filter-name'>Camping</span>
            </div>
            <div className='icon-block'>
                <span className='filter-icon'><i class="fa-solid fa-water"></i></span>
                <span className='filter-name'>Lakefront</span>
            </div>
            <div className='icon-block'>
                <span className='filter-icon'><i class="fa-solid fa-building"></i></span>
                <span className='filter-name'>City</span>
            </div>
            <div className='icon-block'>
                <span className='filter-icon'><i class="fa-solid fa-caravan"></i></span>
                <span className='filter-name'>Camper</span>
            </div>
        </div>
    </div>
  )
}

export default FilterBar;
