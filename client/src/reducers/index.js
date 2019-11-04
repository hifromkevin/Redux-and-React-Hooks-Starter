import { combineReducers } from 'redux';
import SomeReducer from './reducer_someReducer';

export default combineReducers({
  posts: SomeReducer
});