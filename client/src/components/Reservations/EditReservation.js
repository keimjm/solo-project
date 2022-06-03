import React, {useState} from 'react'
import './Reservation.css'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {editReservation } from '../../store/reservation'
import './EditReservation.css'

function EditReservation({room, user, reservation, hideEditForm}) {
    const dispatch = useDispatch();

    console.log(reservation)

    const [startDate, setStartDate] = useState(reservation?.start_date);
    const [endDate, setEndDate] = useState(reservation?.end_date);

  
    const updateStartDate = (e) => setStartDate(e.target.value);
    const updateEndDate = (e) => setEndDate(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
    
    let createdReservation = await dispatch(editReservation(payload, reservation?.id));
    if (createdReservation) {
      window.location.reload();
      hideEditForm();
      
    }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideEditForm()
        
      };
  return (
    <div >
    <section className="edit-reservation-form-holder centered middled">
      <form className='edit-reservation-form' onSubmit={handleSubmit}>
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
      <button className='book-btn' type="submit">Edit Reservation</button>
      <button className='book-btn' type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  </section>
  </div>
  )
}

export default EditReservation;
