import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import $ from 'jquery';
import status from '../../app/components/const'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import TodoList from '../../app/components/TodoList';
import TodoItem from '../../app/components/TodoItem';

describe('TodoList', () => {
	it("should exist", () => {
		expect(TodoList).to.exist;
	});

	it('should render one TodoItem component for each todo item', () => {
		let todos = [
			{id:1, text: 'Do something'},
			{id:2, text: 'Check me'}
		];

		let TodoListComponent = TestUtils.renderIntoDocument(<TodoList todos={todos} />); 
		//todoItemsComponents - array of components
		let todoItemsComponents = TestUtils.scryRenderedComponentsWithType(TodoListComponent, TodoItem); 

		expect(todoItemsComponents.length).to.equal(todos.length); 
	});
});