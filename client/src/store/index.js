import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reservationReducer from './reservation';
import reviewReducer from './review';
import roomReducer from './rooms';
import searchReducer from './search';
import sessionReducer from './session';
import userReducer from './user';

const rootReducer = combineReducers({
    session: sessionReducer,
    room: roomReducer,
    reservation: reservationReducer,
    search: searchReducer,
    user: userReducer,
    review: reviewReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
  export default configureStore;
