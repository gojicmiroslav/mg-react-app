import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import TodoItem from '../../app/components/TodoItem';

describe('TodoItem', () => {
	it("should exist", () => {
		expect(TodoItem).to.exist;
	});

	it('should call onToggle prop with id on click', () => {
		let todoData = {id: 199, text: "Test", completed: true};
		let spy = sinon.spy();

		let TodoItemComponent = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy} />);
		let $el = $(ReactDOM.findDOMNode(TodoItemComponent));	
		TestUtils.Simulate.click($el[0]);
		expect(spy).have.been.calledWith(199);
	});
});