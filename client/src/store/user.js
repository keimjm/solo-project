import { csrfFetch } from "./csrf";

const GET_USER = 'user/GET_USER';


 const getAUser = (user) => {
    return {
      type: GET_USER,
      user,
    };
  };

  export const getUser = (id) => async dispatch => {
    const response = await csrfFetch(`/api/users/${id}`);
    const data = await response.json();
    dispatch(getAUser(data.user));
    return data.user;
  };


  const initialState = { user: null };

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_USER:
      newState = Object.assign({}, state);
     newState.user = action.user;
      return newState
    default:
      return state;
  }
};

export default userReducer;
