import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions/';

describe('actions', function() {
	
	describe('saveComment', function() {
		it('has the correct type', function() {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT);
		});

		it('has the correct payload', function() {
			const action = saveComment('New Comment');
			expect(action.payload).to.equal('New Comment');
		});
	});

});