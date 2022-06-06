import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import './Map.css'


function Map() {
    const history = useHistory();

    const rooms = useSelector(state => {
        if(state.room.rooms.length > 0) return state.room.rooms    
      });

      const sendToRoom = (id) => {
        history.push(`/rooms/${id}`)
      }


    const google_api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: google_api_key 
    })

    if(!isLoaded) {
        return (
            <div>Loading...</div>
        )
    }

    const center = {lat: 38.864049, lng: -77.068902}

  return (
    <div id="map">
        <GoogleMap zoom={8} center={center} mapContainerClassName="map-container">
            {rooms.map(room => {
                return (
                 <Marker position={{ lat: room?.location.latitude, lng: room?.location.longitude}} onClick={() => sendToRoom(room?.id)} />
                
                )
            })}

            
        </GoogleMap>
        <NavLink exact to="/" className="list-link">
            <button className='list-btn'>See List</button>
        </NavLink>
    </div>
  )
}

export default Map
