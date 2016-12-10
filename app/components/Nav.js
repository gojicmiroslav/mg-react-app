import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
	constructor(props){
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(e){
		e.preventDefault();
		var location = this.refs.location.value;
		console.log("Location: ", location);

		if(location.length > 0) {
			this.refs.location.value = '';	
		}

	}

	render(){
		return (
			<nav className="navbar navbar-static-top navbar-dark bg-primary">
	    		<ul className="nav navbar-nav">
	    			<li className="navbar-brand"><h4 className="font-weight-bold">ReactApp</h4></li>
	      			<li className="nav-item">
	        			<IndexLink to="/" activeClassName="active" className="nav-link">Weather API</IndexLink>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/about" activeClassName="active" className="nav-link">About</Link>
	      			</li>
	      			<li className="nav-item">
	        			<Link to="/contact" activeClassName="active" className="nav-link">Contact</Link>
	      			</li>
			    </ul>

	    		<form className="form-inline float-xs-right" onSubmit={this.onSearch}>
	      			<input className="form-control" type="search" placeholder="Search weather by city..." ref="location" />
	      			<button className="btn btn-outline-secondary" type="submit">Get Weather</button>
	    		</form>
	  		</nav>
		);
	}
}

export default Nav;
