import React from 'react';
import Clock from './Clock';

class Timer extends React.Component {
	render(){
		return (
			<h1>
				<Clock/>
			</h1>
		);
	}
}

export default Timer;