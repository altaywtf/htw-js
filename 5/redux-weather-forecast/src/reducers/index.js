import { combineReducers } from 'redux';
import WeatherReducer from './ReducerWeather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
