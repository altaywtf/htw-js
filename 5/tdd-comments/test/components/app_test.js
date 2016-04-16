import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('shows a commentbox', function() {
		expect(component.find('.CommentBox')).to.exist;
	});

	it('shows a commentlist', function() {
		expect(component.find('.CommentList')).to.exist;
	});
	
});

