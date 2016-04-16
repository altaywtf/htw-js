import { SAVE_COMMENT } from '../actions/types';

export default function (state = [], action) {
	
	switch (action.type) {
		case SAVE_COMMENT:
			return [...state, action.payload];
			break;
		default:
			return state;
			break;
	}

}