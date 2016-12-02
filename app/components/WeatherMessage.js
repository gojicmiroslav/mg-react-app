import React from 'react';

const WeatherMessage = (props) => {
	return (
		<h2>It is it {props.temp} in {props.location}.</h2>
	);
};

export default WeatherMessage;