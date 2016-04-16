import { combineReducers } from 'redux';
import commentReducer from './comments';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
