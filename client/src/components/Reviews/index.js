import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './ReviewPage.css'

function ReviewPage({room, user}) {
    const sessionUser = useSelector(state => state.session.user);


  return (
  <div className='review-block'>
    <h2>Reviews</h2>
    
    {room?.review.map((review) => {
      return (
    <div className='associated-reviews'>
        <table>
      <tr>
        <th>Rating</th>
        <th>Comment</th>
      </tr>
      
    <tr key={review?.id}>
      <td className="centered">{review?.rating} <i className="fa-solid fa-star fa-sm"></i></td>
      <td className="centered">{review?.comment}</td>
      {/* {(review?.user_id === sessionUser?.id) && (
        <td className="centered">
          <button onClick={() => console.log()} className="booking-btn">
            Edit
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

export default ReviewPage
