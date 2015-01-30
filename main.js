// ┌────────────────────────────────────────────────────────────────────┐
// | Filename: main.js
// └────────────────────────────────────────────────────────────────────┘

// ┌────────────────────────────────────────────────────────────────────┐
// | Require modules
// └────────────────────────────────────────────────────────────────────┘
var express = require("express");
var stylus = require('stylus');
var nib = require('nib');
var fs = require('fs');
var figlet = require('figlet');
var title = require('./package.json').name;

// ┌────────────────────────────────────────────────────────────────────┐
// | Initialize vars + constants
// └────────────────────────────────────────────────────────────────────┘
var app = express();
var port = Number(process.env.PORT || 5000);

// ┌────────────────────────────────────────────────────────────────────┐
// | App setup
// └────────────────────────────────────────────────────────────────────┘
app.set('views', __dirname + '/views'); 
app.set('view engine', 'jade');
app.use(
	stylus.middleware({
		src: __dirname + '/public',
		compile: function(str, path) { return stylus(str).set('filename', path).use(nib()); }
	})
);
app.use(express.static(__dirname + '/public'));

// ┌────────────────────────────────────────────────────────────────────┐
// | Routes
// └────────────────────────────────────────────────────────────────────┘
app.get('/', function(req, res){
	res.render('index', {title: title});
});

// ┌────────────────────────────────────────────────────────────────────┐
// | Init!!
// └────────────────────────────────────────────────────────────────────┘
app.listen(port, function() {
	console.log('\n↳ Listening on port: ' + port);
});


figlet(title, function(err, data) {
	console.log(data)
});
