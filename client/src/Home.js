import React from 'react'
import FilterBar from './components/FilterBar/index'
import './Home.css'
import CardBlock from './components/CardBlock'

function Home() {
  return (
    <div className='home-page'>
        <FilterBar/>

        <div className='room-section'>
            <CardBlock/>
            <CardBlock/>
            <CardBlock/>
            <CardBlock/>
        </div>
    </div>
  )
}

export default Home
