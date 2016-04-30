import { combineReducers } from 'redux';
import { usersReducer } from './users';

const rootReducer = combineReducers({
  users: usersReducer
});

export default rootReducer;
