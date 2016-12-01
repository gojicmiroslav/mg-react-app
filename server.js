var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log("sServer is listening on the port: " + PORT);
});