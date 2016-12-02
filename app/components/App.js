import React from 'react';
import Nav from './Nav';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<Nav/>
				<h1>Weather App</h1>
				{this.props.children}
			</div>
		);
	}
}

export default App;
