import React from 'react';
import moment from 'moment';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		
	}

	render(){
		let { id, text, completed, created_at, completed_at } = this.props;

		let renderDate = () => {
			let message = 'Created:';
			let timestamp = created_at;

			if(completed){
				message = "Completed:";	
				timestamp = completed_at;
			}

			return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`
		};

		return (
			<div onClick={event => this.props.onToggle(id)}>
				<input type="checkbox" checked={completed} onChange={this.handleChange} ref="completed"/>
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		);
	}
}

export default TodoItem;