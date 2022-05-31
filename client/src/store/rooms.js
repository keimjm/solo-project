const GET_ROOMS = 'rooms/GET_ROOMS';
const REMOVE_ROOM = 'rooms/REMOVE_ROOM';


const getRooms = (rooms) => {
    return {
      type: GET_ROOMS,
      rooms
    };
  };

const removeRoom = () => {
    return {
      type: REMOVE_ROOM,
    };
  };


export const loadRooms = () => async dispatch =>  {
    const response = await fetch('api/rooms');
    const data = await response.json();
    //console.log(data.rooms);
    dispatch(getRooms(data.rooms));
    return data.rooms;
};



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
    case REMOVE_ROOM:
      newState = Object.assign({}, state);
      newState.rooms = null;
      return newState;
    default:
      return state;
  }
};

export default roomReducer;
