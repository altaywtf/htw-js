import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export function usersReducer(state = [], action) {
	switch (action.type) {
		case FETCH_USERS:
			return [...state, ...action.payload.data];
		default: 
			return state;
	}
}

export function fetchUsers() {
	const request = axios.get('http://jsonplaceholder.typicode.com/users');

	return {
		type: FETCH_USERS,
		payload: request
	};
}