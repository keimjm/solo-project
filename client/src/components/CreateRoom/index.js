import React, { useState} from 'react'
import { createRoom } from '../../store/rooms';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './CreateRoom.css'


function CreateRoom() {
    const dispatch = useDispatch();

    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [occupancy, setOccupancy] = useState("");
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [price, setPrice] = useState(0);
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

            const payload = {
      description,
      occupancy,
      bedrooms,
      bathrooms,
      price,
      type,
      image,
      country,
      city,
      address
    };
    
    let createdRoom = await dispatch(createRoom(payload));
    if (createdRoom) {
      
    }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        
        <Redirect exact to="/" />
      };


  return (
    <div >
    <section className="create-form-holder centered middled">
      <form className='create-form' onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="House Type"
        required
        value={type}
        onChange={updateType} />
        <input
        type="text"
        placeholder="Description"
        required
        value={description}
        onChange={updateDescription} />
        <input
        type="number"
        placeholder="Occupancy"
        min="0"
        max="100"
        required
        value={occupancy}
        onChange={updateOccupancy} />
        <input
        type="number"
        placeholder="Bedrooms"
        value={bedrooms}
        onChange={updateBedrooms} />
        <input
        type="number"
        placeholder="Bathrooms"
        value={bathrooms}
        onChange={updateBathrooms} />
        <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={updatePrice} />
        <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={updateImage} />
        <input
        type="text"
        placeholder="City"
        value={city}
        onChange={updateCity} />
        <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={updateCountry} />
        <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={updateAddress} />
      <button type="submit">Create Room</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </section>
  </div>
  )
}

export default CreateRoom;
