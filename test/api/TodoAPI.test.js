import chai, { expect } from 'chai';

import TodoAPI from '../../app/api/TodoAPI';

describe('TodoAPI', () =>{
	beforeEach(() => {
		localStorage.clear();
	});

	it('should exist', () => {
		expect(TodoAPI).to.exist;
	})

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			let todos = [{ id: 33, text: "test all files", completed: false }];
			TodoAPI.setTodos(todos);
			let actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).to.eql(todos);
		});

		it('should not set invalid todos array', () => {
			var badTodos = {a: 'b'};
			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem("todos")).to.be.null;
		});
	});

	describe('getTodos', () => {
		it('should return empty array for bad local storage data', () => {
			let todos = TodoAPI.getTodos();

			expect(todos).to.eql([]);
		});

		it('should return todo from array in local storage', () => {
			let todos = [{ id: 23, text: 'test', completed: false }];
			localStorage.setItem('todos', JSON.stringify(todos));
			let actualTodos = TodoAPI.getTodos();

			expect(todos).to.eql(actualTodos);
		});
	});
});