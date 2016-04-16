import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', function() {
	
	it('handles actions with unknown type', function() {
		// expect(commentReducer()).to.be.instanceof(Array);
		expect(commentReducer(undefined, {})).to.be.eql([])
	});

	it('handles action of type SAVE_COMMENT', function() {
		const action = {type: SAVE_COMMENT, payload: 'New Comment'};
		expect(commentReducer([], action)).to.be.eql(['New Comment']);
	});

});
