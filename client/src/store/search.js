import { csrfFetch } from './csrf';

const SEARCH = 'search/SEARCH';


const searchAction = (search) => {
    return {
      type: SEARCH,
      search
    };
  };


export const search = (searchText) => async dispatch => {
    const response = await csrfFetch(`/api/search?query=${searchText}`);

    const data = await response.json();
    dispatch(searchAction(data.rooms));
    return data.rooms;
}


const initialState = { search: null };

const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SEARCH:
      newState = Object.assign({}, state);
      newState.search = action.search;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
