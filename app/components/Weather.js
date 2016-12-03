import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			isLoading: false
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location){	
		var self = this;
		this.setState({ isLoading: true });

		openWeatherMap.getTemperature(location)
			.then(function(temperature) {
				self.setState({ 
					location: location, 
					temp: temperature,
					isLoading: false
				});
			}, function(error) {
				self.setState({ isLoading: false });
				alert(error);
			});
	}

	render(){
		var { isLoading, location, temp } = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3>Fetching weather...</h3>;
			} else if(temp && location) {
				return <WeatherMessage location={location} temp={temp} />
			}
		}

		return(
			<div>
				<WeatherForm handleSearch={this.handleSearch} />
				{renderMessage()}
			</div>
		);
	}
};

export default Weather;
