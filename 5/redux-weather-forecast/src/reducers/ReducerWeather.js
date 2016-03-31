import { FETCH_WEATHER } from '../actions/index';

/**
 * Reducer Function for Weather Data
 * @param  {array}  initial state
 * @param  {object} dispatched action
 * @return {object} new state
 */
export default function (state = [], action) {

	switch (action.type) {
		case FETCH_WEATHER:
			return [ action.payload.data, ...state ];
	}

	return state;
}

/*********
 * Note! *
 * *******
 * 
 * Since we are going to display more than one city on our homepage,
 * we want to push that new data to our list of cities.
 *
 * In order to do that, we might try something like this:
 *
 * 	switch (action.type) {
 * 		case FETCH_WEATHER:
 * 			return state.push(action.payload.data);
 *  }
 *
 * But in our Flux (Redux) architecture, we never want to mutate our current state.
 * We want to generate a 'new state' by using the old one. So our state should be 'IMMUTABLE'.
 *
 * So, instead of 'push' we could try 'concat' ---> return [state.concat(action.payload.data)];
 * 																						 ---> return [ action.payload.data, ...state ];  (in ES6 synthax).
 * 
 */