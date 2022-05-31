import { csrfFetch } from './csrf';

const GET_ROOMS = 'rooms/GET_ROOMS';
const REMOVE_ROOM = 'rooms/REMOVE_ROOM';
const GET_ONE_ROOM = 'rooms/GET_ONE_ROOM';


const getRooms = (rooms) => {
    return {
      type: GET_ROOMS,
      rooms
    };
  };

  const getOneRoom = (room) => {
    return {
      type: GET_ONE_ROOM,
      room
    };
  };

const removeRoom = () => {
    return {
      type: REMOVE_ROOM,
    };
  };


export const loadRooms = () => async dispatch =>  {
    const response = await csrfFetch('api/rooms');
    const data = await response.json();
    //console.log(data.rooms);
    dispatch(getRooms(data.rooms));
    return data.rooms;
};

export const getARoom = (id) => async dispatch => {
  const response = await csrfFetch(`api/rooms/${id}`);
  const data = await response.json();

  dispatch(getOneRoom(data.room));
  return data.room;
}



const initialState = { rooms: [] };

const roomReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ROOMS:
      newState = Object.assign({}, state);
      //const allRooms = {};
    //   action.rooms.forEach(room => {
    //     allRooms[room.id] = room;
    //   });
     newState.rooms = action.rooms;
      return newState
    case GET_ONE_ROOM:
      newState = Object.assign({}, state);
      newState.room = action.room;
      return newState
    case REMOVE_ROOM:
      newState = Object.assign({}, state);
      newState.rooms = null;
      return newState;
    default:
      return state;
  }
};

export default roomReducer;
