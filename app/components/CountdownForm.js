 import React from 'react';

class CountdownForm extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e){
		e.preventDefault();
		let strSeconds = this.refs.seconds.value;

		if(strSeconds.match(/^[0-9]*$/)){
			this.refs.seconds.value = "";
			this.props.onSetCountdown(parseInt(strSeconds, 10));
		} else {
			// TODO: show error message
			this.refs.seconds.value = "";
		}
	}

	render(){
		return(
			<div>
				<form onSubmit={this.onSubmit} ref="form" className="countdown-form">
					<div className="form-group">
						<input type="text" ref="seconds" className="form-control" placeholder="Enter time in seconds"/>
					</div>

					<div className="form-group">
						<button type="submit" className="btn btn-primary btn-block">Start</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CountdownForm;