//create an app server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');


app.set('views', __dirname + '/views');

app.use("/public", express.static(__dirname + '/public'));

app.use(bodyParser.json()); // for parsing application/json

app.get('/', function(req, res){

	// Read JSON file from filesystem
	var text = fs.readFileSync('public/sellers.json', 'utf8');
	
	// Parse it into an object
	var data = JSON.parse(text);
	
	// Pass arguments to the template and render the page
	res.json(req.body);
	res.render('index.jade', {title: 'Whittl Card Assignment', name: req.business.menuItems.name, data:data});
});


app.listen(3000);

