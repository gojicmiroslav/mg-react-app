import React from 'react';
import WeatherNav from './WeatherNav';
import { Link } from 'react-router';

class Examples extends React.Component {
	render(){
		return(
			<div className="starter-template">				
				<div className="card text-xs-center">
  					<WeatherNav />
  					<div className="card-block">    					
						<h2 className="">Examples</h2>
						<p className="card-text">Here are a few example to locations try out!</p>
						<div className="list-group">
							<Link 
								to="/?location=Chicago" 
								className="list-group-item list-group-item-action"
								activeClassName="list-group-item active">Chicago, USA</Link>
							
							<Link 
								to="/?location=Belgrade"
								className="list-group-item list-group-item-action"
								activeClassName="list-group-item active">Belgrade, Serbia</Link>
						</div>
					</div>
				</div>
			</div>		
		);
	}
}

export default Examples;