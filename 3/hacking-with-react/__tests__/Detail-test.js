jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Detail = require('../src/pages/Detail').default;

describe('Detail', () => {

	// starts with zero commits
    it('starts with zero commits', () => {
	    const rendered = TestUtils.renderIntoDocument(
	        <Detail params={{repo: ''}} />
	    );

	    expect(rendered.state.commits.length).toEqual(0);
	});

    // shows commits by default
	it('shows commits by default', () => {
	    const rendered = TestUtils.renderIntoDocument(
	        <Detail params={{repo: ''}} />
	    );

	    expect(rendered.state.mode).toEqual('commits');
	});

	// shows forks when the button is tapped
		it('shows forks when the button is tapped', () => {
	    const rendered = TestUtils.renderIntoDocument(
	        <Detail params={{repo: ''}} />
	    );

	    const forksButton = rendered.refs.forks;
	    TestUtils.Simulate.click(forksButton);
	    expect(rendered.state.mode).toEqual('forks');
	});

	// shows pulls when the button is tapped
	it('shows pulls when the button is tapped', () => {
	    const rendered = TestUtils.renderIntoDocument(
	        <Detail params={{repo: ''}} />
	    );

	    const pullsButton = rendered.refs.pulls;
	    TestUtils.Simulate.click(pullsButton);
	    expect(rendered.state.mode).toEqual('pulls');
	});

	// fetches forks from Github
	it('fetches forks from GitHub', () => {
	    const rendered = TestUtils.renderIntoDocument(
	        <Detail params={{repo: 'react'}} />
	    );

	    waitsFor(() => {
	        console.log('In waitFor: ' + rendered.state.forks.length);
	        return rendered.state.forks.length > 0;
	    }, "commits to be set", 2000);

	    runs(() => {
	        expect(rendered.state.forks.length).toEqual(30);
	    });
	});

	// fetches forks from a local source
	it('fetches forks from a local source', () => {
	    const rendered = TestUtils.renderIntoDocument(
	        <Detail params={{repo: ''}} />
	    );

	    const testData = require('./forks.json');
	    rendered.saveFeed('forks', testData);
	    rendered.selectMode('forks');

	    const forks =
	        TestUtils.scryRenderedDOMComponentsWithClass(rendered, 'github');

	    expect(forks.length).toEqual(30);
	});
});