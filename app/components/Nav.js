import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
	constructor(props){
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(e){
		e.preventDefault();
		var location = this.refs.search.value;
		if(location.length > 0) {
			this.refs.search.value = '';	
			let encodedLocation = encodeURIComponent(location);
			window.location.hash = `#/?location=${encodedLocation}`;
		}
	}

	render(){		
		return (
			<nav className="navbar navbar-static-top navbar-dark" style={{backgroundColor: "#465762"}}>
	    		<ul className="nav navbar-nav">
	    			<li className="navbar-brand"><h4 className="font-weight-bold">ReactApp</h4></li>
	      			<li className="nav-item">
	        			<IndexLink to="/" activeClassName="active" className="nav-link">Weather API</IndexLink>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/timer" activeClassName="active" className="nav-link">Timer</Link>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/countdown" activeClassName="active" className="nav-link">Countdown</Link>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/todo" activeClassName="active" className="nav-link">Todo App</Link>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/about" activeClassName="active" className="nav-link">About</Link>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/contact" activeClassName="active" className="nav-link">Contact</Link>
	      			</li>
			    </ul>

	    		<form className="form-inline float-xs-right nav-form" onSubmit={this.onSearch}>
	      			<input className="form-control" ref="search" type="search" placeholder="Search weather by city..."/>
	      			<button className="btn btn-outline-secondary nav-form-btn" type="submit">Get Weather</button>
	    		</form>
	  		</nav>
		);
	}
}

export default Nav;
