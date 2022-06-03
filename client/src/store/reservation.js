import { csrfFetch } from './csrf';

const CREATE_RESERVATION = 'reservation/CREATE_RESERVATION';
const EDIT_RESERVATION = 'reservation/EDIT_RESERVATION';
const DELETE_RESERVATION = 'reservation/DELETE_RESERVATION';



const createReservations = (reservation) => {
    return {
        type: CREATE_RESERVATION,
        reservation
    }
}

const deleteReservations = () => {
    return {
        type: DELETE_RESERVATION
    }
}

const editReservations = () => {
  return {
      type: EDIT_RESERVATION
  }
}

export const createReservation = (payload, id) => async dispatch =>  {
    const response = await csrfFetch(`/api/rooms/${id}/bookings`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    dispatch(createReservations(data.reservation));
    return data.reservation;
};

export const deleteReservation = (id) => async dispatch => {
    const response = await csrfFetch(`/api/bookings/${id}`,{
        method: "DELETE",
    })
    await response.json();
    dispatch(deleteReservations());
}

export const editReservation = (payload, id) => async dispatch => {
  const response = await csrfFetch(`/api/bookings/${id}`,{
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
  })
  const data = await response.json();
  dispatch(editReservations(data.reservation));
  return data.reservation;
}


const initialState = { reservation: null };

const reservationReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_RESERVATION:
      newState = Object.assign({}, state);
      newState.reservation = action.reservation;
      return newState
      case EDIT_RESERVATION:
        newState = Object.assign({}, state);
        newState.reservation = action.reservation;
        return newState;
    case DELETE_RESERVATION:
      newState = Object.assign({}, state);
      newState.reservation = null;
      return newState;
    default:
      return state;
  }
};

export default reservationReducer;
