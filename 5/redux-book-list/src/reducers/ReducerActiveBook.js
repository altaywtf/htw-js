/*
 * Active Book Reducer
 */

// Reducers are only called when there's an action!
// State argument is not the application state here, it is the state that this reducer is responsible for.
export default (state = null, action) => {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}

	return state;
}

// WE NEVER MUTATE the CURRENT STATE
// WE ALWAYS WANT TO RETURN A FRESH OBJECT!