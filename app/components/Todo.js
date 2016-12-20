import React from 'react';
import TodoList from './TodoList';
import AddTodo from'./AddTodo';
import TodoSearch from './TodoSearch';

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showCompleted: false,
			searchText: "",
			todos: [
				{ id: 1, text: "Go to store"},
				{ id: 2, text: "Go to sleep"},
				{ id: 3, text: "Drink a coofee"},
				{ id: 4, text: "Another Todo"}
			]
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleAddTodo(text){
		
	}

	handleSearch(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});		
	}

	render(){
		let { todos } = this.state;

		return(
			<div className="row">
				<div className="col-sm-4 offset-sm-4 col-md-6 offset-md-3">
					<TodoSearch onSearch={this.handleSearch}/>
					<TodoList todos={todos} />
					<AddTodo handleAddTodo={this.handleAddTodo} />
				</div>
			</div>
		);
	}
} 

export default Todo;