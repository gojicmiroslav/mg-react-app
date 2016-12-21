import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Todo from '../../app/components/Todo';

describe('Todo', () => {
	it("should exist", () => {
		expect(Todo).to.exist;
	});

	it('should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'Test';
		let TodoAppComponent = TestUtils.renderIntoDocument(<Todo />);

		TodoAppComponent.setState({ todos: [] });
		TodoAppComponent.handleAddTodo(todoText);

		expect(TodoAppComponent.state.todos[0].text).to.equal(todoText);
	});

	it('should toggle completed value when handleToggle called', () => {
		let todoData = {id:11, text: "Test", completed: false};

		let TodoAppComponent = TestUtils.renderIntoDocument(<Todo />);
		TodoAppComponent.setState({todos: [todoData]});
		expect(TodoAppComponent.state.todos[0].completed).to.equal(false);
		TodoAppComponent.handleToggle(11);
		expect(TodoAppComponent.state.todos[0].completed).to.equal(true);		
	});
});