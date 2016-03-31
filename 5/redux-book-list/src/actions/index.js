/*
 * Contains all the ActionCreators
 */


// Gets book as argument and returns the action 
export const selectBook = (book) => {
	
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};

}