import React from 'react'
import status from './const'

class Controls extends React.Component {
	static propTypes = {
		countdownStatus: React.PropTypes.string.isRequired
	}

	render(){
		let { countdownStatus } = this.props;
		let renderStartStopButton = () => {
			if(countdownStatus === status.STARTED){
				return <button className="btn btn-secondary">Pause</button>	
			} else if(countdownStatus === status.PAUSED){
				return <button className="btn btn-primary">Start</button>	
			}
		};

		return (
			<div className="controls form-group">
				{renderStartStopButton()}
				<button className="btn btn-danger">Clear</button>
			</div>	
		);
	}
}

export default Controls;