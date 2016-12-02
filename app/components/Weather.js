import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = { location: 'New York', temp: 0 };
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location){	
		var self = this;
		openWeatherMap.getTemperature(location)
			.then(function(temperature) {
				self.setState({ 
					location: location, 
					temp: temperature 
				});
			}, function(error) {
				console.log("Error: ", error);
			});
	}

	render(){
		return(
			<div>
				<WeatherForm handleSearch={this.handleSearch} />
				<WeatherMessage location={this.state.location} temp={this.state.temp} />
			</div>
		);
	}
};

export default Weather;
