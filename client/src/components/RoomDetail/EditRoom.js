import React, { useState} from 'react'
import { editARoom } from '../../store/rooms';
import { useDispatch } from 'react-redux'

function EditRoom({ room, hideForm }) {

    const dispatch = useDispatch();

    const [type, setType] = useState(room.house_type);
    const [description, setDescription] = useState(room.description);
    const [occupancy, setOccupancy] = useState(room.total_occupancy);
    const [bedrooms, setBedrooms] = useState(room.total_bedrooms);
    const [bathrooms, setBathrooms] = useState(room.total_bathrooms);
    const [price, setPrice] = useState(room.price);
    const [image, setImage] = useState(room.file_name);
    const [city, setCity] = useState(room.location.city);
    const [country, setCountry] = useState(room.location.country);
    const [address, setAddress] = useState(room.location.address)

  
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
      ...room,
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
    
    let updatedRoom = await dispatch(editARoom(room.id, payload));
    if (updatedRoom) {
      hideForm();
    }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
      };

  return (
    <section className="edit-form-holder centered middled">
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Update Room</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </section>
  )
}

export default EditRoom
