import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
	render(){
		let { todos } = this.props;

		let renderTodoItems = () => {
			return todos.map((todo) => {
				return <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />;
			});
		};

		return(
			<div>
				{ renderTodoItems() }
			</div>
		);
	}
}

export default TodoList;