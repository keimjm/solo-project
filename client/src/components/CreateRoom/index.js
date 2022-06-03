import React, { useState} from 'react'
import { createRoom } from '../../store/rooms';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import './CreateRoom.css'


function CreateRoom() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);

    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [occupancy, setOccupancy] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");

  
    const updateDescription = (e) => setDescription(e.target.value);
    const updateOccupancy = (e) => setOccupancy(e.target.value);
    const updateBedrooms = (e) => setBedrooms(e.target.value);
    const updateBathrooms = (e) => setBathrooms(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateType = (e) => setType(e.target.value);
    const updateImage = (e) => setImage(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
            const payload = {
      description,
      total_occupancy: occupancy,
      total_bedrooms: bedrooms,
      total_bathrooms: bathrooms,
      price,
      house_type: type,
      file_name: image,
      country,
      city,
      address
    };
    
    let createdRoom = await dispatch(createRoom(payload, sessionUser?.id)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    if (createdRoom) {
      
    }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`)
        
      };


  return (
    <div className="create-form-holder centered middled">
    <h1>Add your Room</h1>
      <form className='create-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
        <input
        type="text"
        placeholder="House Type"
        required
        className='input'
        value={type}
        onChange={updateType} />
        <input
        type="text"
        placeholder="Description"
        required
        className='input'
        value={description}
        onChange={updateDescription} />
        <input
        type="number"
        placeholder="Occupancy"
        min="0"
        max="100"
        required
        className='input'
        value={occupancy}
        onChange={updateOccupancy} />
        <input
        type="number"
        placeholder="Bedrooms"
        value={bedrooms}
        min="0"
        className='input'
        onChange={updateBedrooms} />
        <input
        type="number"
        placeholder="Bathrooms"
        value={bathrooms}
        min="0"
        className='input'
        onChange={updateBathrooms} />
        <input
        type="number"
        placeholder="Price"
        value={price}
        min="0"
        className='input'
        onChange={updatePrice} />
        <input
        type="text"
        placeholder="Image"
        value={image}
        className='input'
        onChange={updateImage} />
        <input
        type="text"
        placeholder="City"
        value={city}
        className='input'
        onChange={updateCity} />
        <input
        type="text"
        placeholder="Country"
        value={country}
        className='input'
        onChange={updateCountry} />
        <input
        type="text"
        placeholder="Address"
        value={address}
        className='input'
        onChange={updateAddress} />
      <button className='create-form-btn' type="submit">Create Room</button>
      <button className='create-form-btn' type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </div>
  )
}

export default CreateRoom;
