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

    
    
  return (
    <div>
    <h2>Reservations</h2>
    
    {room?.reservation.map((reservation) => {
      return (
    <div className='associated-bookings'>
      <tr>
        <th>Start Date</th>
        <th> End Date</th>
        <th>Total</th>
      </tr>
      
    <tr key={reservation?.id}>
      <td className="centered">{reservation?.start_date}</td>
      <td className="centered">{reservation?.end_date}</td>
      <td className="centered">{reservation?.total}</td>
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
  )
})}
</div>
)
}

export default AssociatedBookings
