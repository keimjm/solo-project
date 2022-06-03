import React from 'react'
import './AssociatedBookings.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation } from '../../store/reservation';

function AssociatedBookings({room}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const cancelBooking = (id) => {
      
      dispatch(deleteReservation(id))
      window.location.reload();
    }

    
    
  return room?.reservation.map((reservation) => (
    <div className='associated-bookings'>
    <tr key={reservation?.id}>
      <td className="centered">{reservation?.start_date}</td>
      <td className="centered">{reservation?.end_date}</td>
      {(reservation?.user_id === sessionUser?.id) && (
        <td className="centered">
          <button onClick={() => console.log()} className="booking-btn">
            Edit
          </button>
        </td>
      )}
      {(reservation?.user_id === sessionUser?.id) && (
        <td className="centered">
          <button onClick={() => cancelBooking(reservation?.id)} className="booking-btn">
            Cancel
          </button>
        </td>
        
      )}
    </tr>
    </div>
  ))
}

export default AssociatedBookings
