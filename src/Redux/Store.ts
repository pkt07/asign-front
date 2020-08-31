import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';
  export const configureStore = (initialState={}) => {
    const store = createStore(
      Reducers, 
      initialState, 
      applyMiddleware(thunk)
    );
  return store;
}