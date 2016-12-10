import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Weather from './components/Weather';
import About from './components/About';
import Contact from './components/Contact';
import Examples from './components/Examples';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={Weather} />
			<Route path="/about" component={About} />
			<Route path="/timer" component={Timer} />
			<Route path="/countdown" component={Countdown} />
			<Route path="/contact" component={Contact} />
			<Route path="/examples" component={Examples} />
		</Route>
	</Router>, 
	document.getElementById("app")
);
