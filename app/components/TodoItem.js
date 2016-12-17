import React from 'react';

class TodoItem extends React.Component {
	render(){
		let todo = this.props;

		return (
			<div>
				{todo.id}: {todo.text}
			</div>
		);
	}
}

export default TodoItem;