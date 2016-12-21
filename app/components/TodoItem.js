import React from 'react';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		
	}

	render(){
		let { id, text, completed } = this.props;

		return (
			<div onClick={event => this.props.onToggle(id)}>
				<input type="checkbox" checked={completed} onChange={this.handleChange} ref="completed"/>
				{text}
			</div>
		);
	}
}

export default TodoItem;