import React from 'react';
import { Link, IndexLink } from 'react-router';

class WeatherNav extends React.Component {
	render(){
		return(
			<div className="card-header">
				<ul className="nav nav-tabs card-header-tabs float-xs-left">
					<li className="nav-item">        					
						<IndexLink to="/" activeClassName="active" className="nav-link">Weather App</IndexLink>
					</li>
					<li className="nav-item">
						<Link to="/examples" activeClassName="active" className="nav-link">City Examples</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default WeatherNav;
