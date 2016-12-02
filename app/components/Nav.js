import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
	return (
		<div>
			<Link to="/" activeClassName="active">Weather</Link>
			<Link to="/about" activeClassName="active">About</Link>
			<Link to="/contact" activeClassName="active">Contact</Link>
		</div>
	);
};

export default Nav;