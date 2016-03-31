import { combineReducers } from 'redux';

// Importing Reducers
import BooksReducer from './ReducerBooks';
import ActiveBookReducer from './ReducerActiveBook';

// 'Combine Reducers' is like the mapping of App's State
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
