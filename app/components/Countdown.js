import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0 };
		this.handleSetCountdown = this.handleSetCountdown.bind(this);
	}

	handleSetCountdown(seconds){
		this.setState({ count: seconds });
	}

	render(){
		let { count } = this.state;

		return (
			<div className="row">
				<div className="col-sm-4 offset-sm-4 col-md-6 offset-md-3">
					<Clock totalSeconds={count}/>
					<CountdownForm onSetCountdown={this.handleSetCountdown} />
				</div>
			</div>
		);
	}
}

export default Countdown;