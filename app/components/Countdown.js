import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';
import status from './const'
import Controls from './Controls'

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			count: 0, 
			countdownStatus: status.STOPPED 
		};
		this.handleSetCountdown = this.handleSetCountdown.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {		
		if(this.state.countdownStatus !== prevState.countdownStatus){
			switch(this.state.countdownStatus){
				case status.STARTED:
					this.startTimer();
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

	startTimer(){
		this.timer = setInterval(() => {
			let newCount = this.state.count - 1;
			newCount = newCount >= 0 ? newCount : 0;
			this.setState({ count: newCount });
		}, 1000);
	}

	handleSetCountdown(seconds){
		this.setState({ 
			count: seconds, 
			countdownStatus: status.STARTED 
		});
	}

	handleStatusChange(newStatus){
		this.setState({
			countdownStatus: newStatus
		});
	}

	render(){
		let { count, countdownStatus } = this.state;

		let renderControlsArea = () => {
			if(countdownStatus === status.STOPPED){ 
				return <CountdownForm onSetCountdown={this.handleSetCountdown} />
			} else { // status == start || pause
				return <Controls 
							countdownStatus={countdownStatus} 
							onStatusChange={this.handleStatusChange} />
			}
		};

		return (
			<div className="row">
				<div className="col-sm-4 offset-sm-4 col-md-6 offset-md-3">
					<Clock totalSeconds={count}/>				
					{renderControlsArea()}
				</div>
			</div>
		);
	}
}

export default Countdown;