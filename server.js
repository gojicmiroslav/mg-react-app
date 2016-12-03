var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
	// console.log(req.headers.host);
	// console.log(req.hostname);
	// console.log(req.protocol);

	if(req.protocol === 'http'){
		next();
	} else {
		console.log('http://' + req.hostname + req.url);
		res.redirect('http://' + req.hostname + req.url);
	}
});

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