import React, {useState} from 'react'
import './Reservation.css'
import { useDispatch } from 'react-redux'
import {createReservation } from '../../store/reservation'

function CreateReservation({room, user, hideCreateForm}) {


    const dispatch = useDispatch();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [errors, setErrors] = useState([]);

  
    const updateStartDate = (e) => setStartDate(e.target.value);
    const updateEndDate = (e) => setEndDate(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

       let endDay = parseInt(endDate.split("-")[2])
       let startDay = parseInt(startDate.split("-")[2])

        const total = room.price * (endDay - startDay)

            const payload = {
                end_date: endDate,
                start_date: startDate,
                total,
                user,
                room,  
    };
    
    let reservation = await dispatch(createReservation(payload, room.id)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
    if (reservation) {
      window.location.reload();
      hideCreateForm();
      
    }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideCreateForm()
        
      };
  return (
    <div >
    <section className="create-reservation-form-holder centered middled">
      <form className='create-reservation-form' onSubmit={handleSubmit}>
        <label>Start Date</label>
        <input
        type="date"
        placeholder="Start Date"
        required
        value={startDate}
        onChange={updateStartDate} />
        <label>End Date</label>
        <input
        type="date"
        placeholder="End Date"
        required
        value={endDate}
        onChange={updateEndDate} />
      <button className='book-btn' type="submit">Make Reservation</button>
      <button className='book-btn' type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </section>
  </div>
  )
}

export default CreateReservation;
