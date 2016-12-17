import React from 'react';
import TodoList from './TodoList';

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

	render(){
		let { todos } = this.state;

		return(
			<div>
				<TodoList todos={todos} />
			</div>
		);
	}
}

export default Todo;