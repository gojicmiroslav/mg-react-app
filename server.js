var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(env === 'production'){
	app.use(function(req, res, next){
		if(req.headers['x-forwarded-proto'] === 'http'){
			next();
		} else {
			res.redirect('http://' + req.hostname + req.url);
		}
	});
}

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log("Server is listening on the port: " + PORT);
});