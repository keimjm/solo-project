import { csrfFetch } from "./csrf";

const GET_USER = 'user/GET_USER';


 const getAUser = (user) => {
    return {
      type: GET_USER,
      payload: user,
    };
  };

  export const getUser = (id) => async dispatch => {
    const response = await csrfFetch(`/api/user/${id}`);
    const data = await response.json();
    dispatch(getAUser(data.user));
    return response;
  };
