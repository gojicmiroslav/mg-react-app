import React from 'react';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e){
		e.preventDefault();
		let todo = this.refs.todo.value;

		if(todo.length > 0){
			this.props.handleAddTodo(todo);			
		}

		this.refs.todo.value = "";
		this.refs.todo.focus();
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit} ref="form">
					<div className="form-group">
						<input type="text" placeholder="Add Todo..." ref="todo" className="form-control"/>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-primary btn-block">Add Todo</button>
					</div>
				</form>
			</div>
		);
	}
}

export default AddTodo;