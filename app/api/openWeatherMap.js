//import axios from 'axios';
var axios = require('axios');

const API_KEY = '594accddf05910c32d4da39898ba71e8';
const OPEN_WEATHER_MAP_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

const getTemperature = (location) => {
	var encodedLocation = encodeURIComponent(location);
	var requestUrl =  `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation},us`;

	return axios.get(requestUrl)
		.then(function(res){ //success
			if(res.status !== 200 && res.statusText !== 'OK'){
				throw new Error(res.response.data.message);	
			} else {
				return res.data.main.temp;
			}


		}, function(res){ //error
			throw new Error(res.response.data.message);
		});
};

export default { getTemperature };