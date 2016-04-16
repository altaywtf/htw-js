import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', function () {

	let component;

	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

	describe('initialization', function() {
		it('has the correct class', function () {
			expect(component).to.have.class('CommentBox');
		})

		it('has a text area', function () {
			expect(component.find('textarea')).to.exist;
		});

		it('has a button', function () {
			expect(component.find('button')).to.exist;
		});
	});

	describe('textarea behavior', function() {
		beforeEach(() => {
			component.find('textarea').simulate('change', 'new comment');
		})

		it('shows entered text', function() {
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it('clears the input on submit', function() {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});
	});

});