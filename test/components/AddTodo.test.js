import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import AddTodo from '../../app/components/AddTodo';

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).to.exist;
	});

	it('should call handleAddTodo with valid data', () => {
		let todoText = "Check mail";
		var spy = sinon.spy();
		let AddTodoComponent = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
		let $el = $(ReactDOM.findDOMNode(AddTodoComponent));

		AddTodoComponent.refs.todo.value = todoText;
		TestUtils.Simulate.submit($el.find("form")[0]);
		expect(spy).have.been.calledWith(todoText);
	});

	it('should not call handleAddTodo with invalid data', () => {
		var spy = sinon.spy();
		let AddTodoComponent = TestUtils.renderIntoDocument(<AddTodo handleAddTodo={spy} />);
		let $el = $(ReactDOM.findDOMNode(AddTodoComponent));

		AddTodoComponent.refs.todo.value = "";
		TestUtils.Simulate.submit($el.find("form")[0]);
		expect(spy).not.have.been.called;
	});
});