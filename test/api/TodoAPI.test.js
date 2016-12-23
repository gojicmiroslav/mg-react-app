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

	describe('filterTodos', () => {
		const todos = [
			{ id: 1, text: "First todo", completed: true},
			{ id: 2, text: "Second todo", completed: false},
			{ id: 3, text: "Third todo", completed: true}
		];

		it('should return all items if showCompleted is true', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).to.equal(3);
		});

		it('should return not completed items is showCompleted is false', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, false, '');
			expect(filteredTodos.length).to.equal(1);
		});

		it('should sort by completed status', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).to.be.false;
			expect(filteredTodos[1].completed).to.be.true;
		});

		it('should filter todos by searchText', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, 'Third');
			expect(filteredTodos.length).to.equal(1);
			expect(filteredTodos[0].id).to.equal(3);

			filteredTodos = TodoAPI.filterTodos(todos, true, 'third');
			expect(filteredTodos.length).to.equal(1);
			expect(filteredTodos[0].id).to.equal(3);
		});

		it('should return all todos if searchText is empty', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).to.equal(3);
		});
	});
});