import React from 'react';

const WeatherMessage = ({ temp, location }) => {
	return (
		<div className="alert alert-success margin-top-30" role="alert">
  			<h3>It is it <i>{temp}</i> in <i>{location}</i></h3>
		</div>
	);
};

export default WeatherMessage;