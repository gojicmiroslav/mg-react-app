import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import TodoSearch from '../../app/components/TodoSearch';

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).to.exist;
	});

	it('should call onSearch with entered input text', () => {
		let searchText = "Dog";
		let spy = sinon.spy();
		let TodoSearchComponent = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		let $el = $(ReactDOM.findDOMNode(TodoSearchComponent));

		TodoSearchComponent.refs.searchText.value = searchText;
		TestUtils.Simulate.change(TodoSearchComponent.refs.searchText);

		expect(spy).have.been.calledWith(false, searchText);
	});

	it('should call onSearch with proper checked value', () => {
		let spy = sinon.spy();
		let TodoSearchComponent = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
		let $el = $(ReactDOM.findDOMNode(TodoSearchComponent));

		TodoSearchComponent.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(TodoSearchComponent.refs.showCompleted);

		expect(spy).have.been.calledWith(true, '');
	});
});