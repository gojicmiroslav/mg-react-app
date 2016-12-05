import React from 'react';

class WeatherForm extends React.Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e){
		e.preventDefault();
		var location = this.refs.location.value;

		if(location.length > 0) {
			this.props.handleSearch(location);
			this.refs.location.value = '';	
		} 
	}

	render(){
		return (
			<div className="margin-top-30">
				<form onSubmit={this.onFormSubmit}>
					<div className="input-group input-group-lg">
						<input type="text" ref="location" className="form-control" placeholder="Enter a city name..." />	
						<span className="input-group-btn">
        					<button type="submit" className="btn btn-primary">Get Weather</button>
      					</span>
					</div>
				</form>
			</div>
		);
	}
};

export default WeatherForm;