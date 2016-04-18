import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', function() {
	let component;

	beforeEach(() => {
		const props = { comments: ['New Comment', 'Other New Comment'] }
		component = renderComponent(CommentList, null, props);
	});

	it('shows an li for each component', function() {
		expect(component.find('li').length).to.equal(2);
	});

	it('shows each component that is provided', function() {
		expect(component).to.contain('New Comment');
		expect(component).to.contain('Other New Comment');
	});
	
});