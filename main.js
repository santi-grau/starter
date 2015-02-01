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
var pckg = require('./package.json');

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
	res.render('index', {title: pckg.name});
});

// ┌────────────────────────────────────────────────────────────────────┐
// | Init!!
// └────────────────────────────────────────────────────────────────────┘
app.listen(port);

figlet.fonts(function(err, fonts) {
	var font = fonts[Math.floor(Math.random() * fonts.length)];
	figlet(pckg.name, { font : font},function(err, data) {
		console.log(data)
		console.log('V ' + pckg.version)
		console.log('\n↳ Listening on port: ' + port);
	});
});
