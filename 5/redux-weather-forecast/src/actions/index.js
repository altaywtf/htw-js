import axios from 'axios'; // an npm package for making ajax calls with promise features

const API_KEY = 'c50af4c0633257a66e14203717e326f4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// to keep our action types consisted between action creators an reducers, we decided to do this 
// (assigning action type to a string value, but defining it outside of the action)
export const FETCH_WEATHER = 'FETCH_WEATHER';

/**
 * fetchWeather() makes an ajax call to OpenWeatherMap API
 * @param  {String} city
 * @return {Object} action
 */
export function fetchWeather(city) {
	const URL = `${ROOT_URL}&q=${city},tr`;
	const request = axios.get(URL);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}