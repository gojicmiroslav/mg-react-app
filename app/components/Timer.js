import React from 'react';
import Clock from './Clock';
import Controls from './Controls';
import status from './const';

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			timerStatus: status.STOPPED
		};		

		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleSetTimer = this.handleSetTimer.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.state.timerStatus !== prevState.timerStatus){
			switch(this.state.timerStatus){
				case status.STARTED:
					this.handleStart();
					break;
				case status.STOPPED:
					this.setState({ count: 0 });
					clearInterval(this.timer);
					this.timer = undefined;
					break;
				case status.PAUSED:
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	}

	handleStart(){
		this.timer = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			});
		}, 1000);
	}

	handleSetTimer(seconds){
		this.setState({
			count: seconds,
			timerStatus: status.STARTED 
		});
	}

	handleStatusChange(newTimerStatus){
		this.setState({
			timerStatus: newTimerStatus
		});
	}

	render(){
		let { count, timerStatus } = this.state;

		return (
			<div>
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />	
			</div>
		);
	}
}

export default Timer;