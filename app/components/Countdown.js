import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import status from './const'
import Controls from './Controls'

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, status: status.STOPPED };
		this.handleSetCountdown = this.handleSetCountdown.bind(this);
		this.startTimer = this.startTimer.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.status !== prevState.status){
			switch(this.state.status){
				case status.STARTED:
					this.startTimer();
					break;
			}
		}
	}

	startTimer(){
		this.timer = setInterval(() => {
			let newCount = this.state.count - 1;
			newCount = newCount >= 0 ? newCount : 0;
			this.setState({ count: newCount });
		}, 1000);
	}

	handleSetCountdown(seconds){
		this.setState({ count: seconds, status: status.STARTED });
	}

	render(){
		let { count } = this.state;

		return (
			<div className="row">
				<div className="col-sm-4 offset-sm-4 col-md-6 offset-md-3">
					<Clock totalSeconds={count}/>
					<CountdownForm onSetCountdown={this.handleSetCountdown} />
					<Controls countdownStatus={this.state.status}/>
				</div>
			</div>
		);
	}
}

export default Countdown;