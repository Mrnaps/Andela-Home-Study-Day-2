// require weather.js
var weather = require('./weather.js');

	var processData = process.argv.slice(2);
	var args = [];

	processData.forEach(function(value){
		args.push(value);
	});	

weather.weather(args[0],args[1]);