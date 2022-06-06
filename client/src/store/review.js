import { csrfFetch } from "./csrf";


const CREATE_REVIEW = 'review/CREATE_REVIEW'


const leaveReview = (review) => {
    return {
      type: CREATE_REVIEW,
      review
    }
  }

export const createReview = (payload, id) => async dispatch => {
    const response = await csrfFetch(`/api/rooms/${id}/review`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': "application/json"
      }
    })
  
    const data = await response.json();
    dispatch(leaveReview(data.review));
    return data.review
  }


const initialState = { review: null };

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_REVIEW:
      newState = Object.assign({}, state);
     newState.review = action.review;
      return newState
    default:
      return state;
  }
};

export default reviewReducer;
