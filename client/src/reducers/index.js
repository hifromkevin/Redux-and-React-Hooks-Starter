import { combineReducers } from 'redux';
import postReducer from './reducer_posts';
import featureReducer from './reducer_features';

export default combineReducers({
  posts: postReducer,
  features: featureReducer
});