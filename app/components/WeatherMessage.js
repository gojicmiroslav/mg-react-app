import React from 'react';

const WeatherMessage = ({ temp, location }) => {
	return (
		<h2>It is it {temp} in {location}.</h2>
	);
};

export default WeatherMessage;