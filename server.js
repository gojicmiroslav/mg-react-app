var express = require('express');

var app = express();
var sslRedirect = require('heroku-ssl-redirect');
const PORT = process.env.PORT || 3000;

app.use(sslRedirect());

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log("Server is listening on the port: " + PORT);
});

function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}