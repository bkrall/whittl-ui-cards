//create an app server
var express = require('express');
var app = express();
var fs = require('fs');

app.set('views', __dirname + '/views');

app.use("/public", express.static(__dirname + '/public'));

app.get('/', function(req, res){

	// Read JSON file from filesystem
	var text = fs.readFileSync('public/sellers.json', 'utf8');
	
	// Parse it into an object
	var data = JSON.parse(text);
	
	// Pass arguments to the template and render the page
	res.render('index.jade', {title: 'Whittl Card Assignment', data:data});
});


app.listen(3000);

