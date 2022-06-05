import { csrfFetch } from './csrf';

const GET_ROOMS = 'rooms/GET_ROOMS';
const REMOVE_ROOM = 'rooms/REMOVE_ROOM';
const GET_ONE_ROOM = 'rooms/GET_ONE_ROOM';
const EDIT_ROOM = 'rooms/EDIT_ROOM'
const CREATE_ROOM = 'rooms/CREATE_ROOM'
const FILTER_ROOMS = 'rooms/FILTER_ROOMS'


const getRooms = (rooms) => {
    return {
      type: GET_ROOMS,
      rooms
    };
  };

  const filterRooms = (rooms) => {
    return {
      type: FILTER_ROOMS,
      rooms
    };
  };

  const getOneRoom = (room) => {
    return {
      type: GET_ONE_ROOM,
      room
    };
  };

  const editRoom = (room) => {
    return {
      type: EDIT_ROOM,
      room
    }
  }

const removeRoom = () => {
    return {
      type: REMOVE_ROOM,
    };
  };

const createARoom = (room) => {
  return {
    type: CREATE_ROOM,
    room
  }
}


export const loadRooms = () => async dispatch =>  {
    const response = await csrfFetch('/api/rooms');
    const data = await response.json();
    //console.log(data.rooms);
    dispatch(getRooms(data.rooms));
    return data.rooms;
};

export const getARoom = (id) => async dispatch => {
  const response = await csrfFetch(`/api/rooms/${id}`);
  //console.log(url)
  const data = await response.json();

  dispatch(getOneRoom(data.room));
  return data.room;
}

export const editARoom = (id, payload) => async dispatch => {
  const response = await csrfFetch(`/api/rooms/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  console.log(data.room)
  dispatch(editRoom(data.room))
  return data.room
}

export const removeARoom = (id) => async dispatch => {
  const response = await csrfFetch(`/api/rooms/${id}`, {
    method: 'DELETE'
  })

  await response.json();
  dispatch(removeRoom())
  return 
}


export const createRoom = (payload, id) => async dispatch => {
  const response = await csrfFetch(`/api/users/${id}/room`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': "application/json"
    }
  })

  const data = await response.json();
  dispatch(createARoom(data.room));
  return data.room
}

export const filter = (filtered) => async dispatch =>  {
  dispatch(filterRooms(filtered))
}


const initialState = { rooms: [], room: null };

const roomReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ROOMS:
      newState = Object.assign({}, state);
     newState.rooms = action.rooms;
      return newState
    case GET_ONE_ROOM:
      newState = Object.assign({}, state);
      newState.room = action.room;
      return newState
    case EDIT_ROOM:
        newState = Object.assign({}, state);
        newState.room = action.room;
        return newState
    case REMOVE_ROOM:
      newState = Object.assign({}, state);
      newState.room = null;
      return newState;
    case FILTER_ROOMS:
     newState = Object.assign({}, state);
     newState.rooms = action.rooms;
      return newState
    default:
      return state;
  }
};

export default roomReducer;
