/**
 * What do we need in our Test Environment?
 *
 * 1. It should be running like-a-browser within command line.
 *
 * 2. We need a renderComponent helper that renders React Components
 *
 * 3. An helper for simulating events like button click, form submit
 *
 * 4. Chai JQuery (Easy DOM)
 */

/* Chai Core */
import chai, { expect } from 'chai'; 
import chaiJquery from 'chai-jquery';

/* 1. Running Like-a-Browser within Command Line */
import jsdom from 'jsdom'; // JSDOM
import jquery from 'jquery'; // _$ becuase we use JQuery only in testing

// Fake DOM for Command Line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window); // JQuery is defined on our Fake DOM

/* 2. Rendering React Components to our Fake DOM */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

function renderComponent (ComponentClass, props, state) {
  // A reference to React Component
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );
  
  // Accessing to Rendered Component
  const component = ReactDOM.findDOMNode(componentInstance);
  
  // Producing HTML of that Component, with JQuery
  return $(component); 
}

/* 3. Simulating Events */
$.fn.simulate = function (eventName, value) {
  if (value) this.val(value);
  TestUtils.Simulate[eventName](this[0]);
}

/* 4. Setting Up Chai JQuery */
chaiJquery(chai, chai.util, $);

export { renderComponent, expect }
