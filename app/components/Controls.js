import React from 'react'
import status from './const'

class Controls extends React.Component {
	static propTypes = {
		countdownStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
	}

	onStatusChange(newStatus){
		return (e) => {
			this.props.onStatusChange(newStatus);
		}
	}

	render(){
		let { countdownStatus } = this.props;

		let renderStartStopButton = () => {
			if(countdownStatus === status.STARTED){
				return <button className="btn btn-secondary" 
								onClick={this.onStatusChange(status.PAUSED)}>Pause</button>	
			} else {
				return <button className="btn btn-primary"
								onClick={this.onStatusChange(status.STARTED)}>Start</button>	
			}
		};

		return (
			<div className="controls form-group">
				{renderStartStopButton()}
				<button className="btn btn-danger" 
						onClick={this.onStatusChange(status.STOPPED)}>Clear</button>
			</div>	
		);
	}
}

export default Controls;