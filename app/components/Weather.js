import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';
import WeatherNav from './WeatherNav';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			isLoading: false,
			isEmpty: false
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(location){	
		var self = this;
		this.setState({ isLoading: true });

		if(location.length < 0) {
			this.setState({ isLoading: false, isEmpty: true });
		} else {

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
	}

	render(){
		var { isLoading, isEmpty, location, temp } = this.state;

		function renderMessage(){
			if(isLoading){
				return (
					<div className="alert alert-info margin-top-30" role="alert">
  						<h3>Fetching weather...</h3>
					</div>
				);
			} else if(isEmpty){
				return (
					<div className="alert alert-info margin-top-30" role="alert">
						<h3>Please enter a city name...</h3>
					</div>
				);
			} else if(temp && location) {
				return <WeatherMessage location={location} temp={temp} />
			}
		}

		return(
			<div className="starter-template">				
				<div className="card text-xs-center">
  					<WeatherNav />
  					<div className="card-block">
    					<h2 className="card-title">Weather Application API</h2>
    					
						<WeatherForm handleSearch={this.handleSearch} />
						{renderMessage()}
					</div>
				</div>
			</div>
		);
	}
};

export default Weather;
