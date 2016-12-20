import React from 'react';
import TodoList from './TodoList';
import AddTodo from'./AddTodo';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 1, text: "Go to store"},
				{ id: 2, text: "Go to sleep"},
				{ id: 3, text: "Drink a coofee"},
				{ id: 4, text: "Another Todo"}
			]
		};
	}

	handleAddTodo(text){
		console.log("New Todo", text);
	}

	render(){
		let { todos } = this.state;

		return(
			<div className="row">
				<div className="col-sm-4 offset-sm-4 col-md-6 offset-md-3">
					<TodoList todos={todos} />
					<AddTodo handleAddTodo={this.handleAddTodo} />
				</div>
			</div>
		);
	}
}

export default Todo;