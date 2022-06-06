import React, {useState} from 'react'
import './AssociatedBookings.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteReservation, editReservation } from '../../store/reservation';
import EditReservation from '../Reservations/EditReservation';


function AssociatedBookings({room, user}) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [showEditReservation, setShowEditReservation] = useState(false)
    const [reservation, setReservation] = useState();

  const isAfter = (date) => {
    const today = new Date();
    const startDate = new Date(date)
    return today < startDate 
  }

    const cancelBooking = (id) => {
      
      dispatch(deleteReservation(id))
      window.location.reload();
    }

    const editBooking = (reservation) => {
      setReservation(reservation)
      setShowEditReservation(true)
    }

    const leaveReview = () => {
      
    }

    if(showEditReservation) {
      return (
        <EditReservation room={room} user={user} reservation={reservation} hideEditForm={() => setShowEditReservation(false)} />
      )
    }
    
    
  return (
    <div className='reservation-block'>
    <h2>Reservations</h2>
    
    {room?.reservation.map((reservation) => {
      return (
    <div className='associated-bookings'>
      <table>
      <tr>
        <th>Start Date</th>
        <th> End Date</th>
        <th>Total</th>
      </tr>
      
    <tr key={reservation?.id}>
      <td className="centered">{reservation?.start_date}</td>
      <td className="centered">{reservation?.end_date}</td>
      <td className="centered">${reservation?.total}</td>
      {((reservation?.user_id === sessionUser?.id) && isAfter(reservation?.start_date)) && (
        <td className="centered">
          <button onClick={() => editBooking(reservation)} className="booking-btn">
            Edit
          </button>
        </td>
      )}
      {((reservation?.user_id === sessionUser?.id) && isAfter(reservation?.start_date)) && (
        <td className="centered">
          <button onClick={() => cancelBooking(reservation?.id)} className="booking-btn">
            Cancel
          </button>
        </td>
      )}
            {/* {((reservation?.user_id === sessionUser?.id) && !isAfter(reservation?.start_date)) && (
        <td className="centered">
          <button onClick={() => leaveReview(reservation?.id)} className="booking-btn">
            Leave A Review
          </button>
        </td>
      )} */}
    </tr>
    </table>
    </div>
  )
})}
</div>
)
}

export default AssociatedBookings
