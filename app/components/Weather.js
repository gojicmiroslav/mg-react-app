import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';
import WeatherNav from './WeatherNav';
import ErrorModal from './ErrorModal';

class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			isLoading: false
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		let location = this.props.location.query.location;
		if(location && location.length > 0) {
			this.handleSearch(location);
			//reset the URL
			window.location.hash = '#/';	
		}
	}

	handleSearch(location){	
		var self = this;
		this.setState({ 
			isLoading: true, 
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemperature(location)
			.then(function(temperature) {
				self.setState({ 
					location: location, 
					temp: temperature,
					isLoading: false
				});
			}, function(error) {
				self.setState({ isLoading: false, errorMessage: error.message });
			});
	}

	// called when components props are updated
	componentWillReceiveProps(newProps) {
		let location = newProps.location.query.location;
		if(location && location.length > 0) {
			this.handleSearch(location);
			//reset the URL
			window.location.hash = '#/';	
		} 
	}

	render(){
		var { isLoading, location, temp, errorMessage } = this.state;

		function renderMessage(){
			if(isLoading){
				return (
					<div className="alert alert-info margin-top-30" role="alert">
  						<h3>Fetching weather...</h3>
					</div>
				);
			} else if(temp && location) {
				return <WeatherMessage location={location} temp={temp} />
			} 
		}

		function renderErrorMessage(){
			if(typeof errorMessage === 'string'){
				return <ErrorModal message={errorMessage} />;
			}
		}

		return(
			<div className="starter-template">				
				<div className="card text-xs-center">
  					<WeatherNav />
  					<div className="card-block">
    					<h2 className="card-title page-title">Weather Application API</h2>
    					
						<WeatherForm handleSearch={this.handleSearch} />
						{ renderMessage() }
						{ renderErrorMessage() }
					</div>
				</div>
			</div>
		);
	}
};

export default Weather;
