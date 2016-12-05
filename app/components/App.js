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
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-lg-8 col-sm-10 offset-md-1 offset-lg-2 offset-sm-1">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
