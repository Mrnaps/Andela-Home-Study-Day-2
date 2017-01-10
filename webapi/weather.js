//require http server module here
var https = require("https");

function weather(longitude,latitude){
	https.get("https://api.darksky.net/forecast/02928a1e388bcb4b696f8eb35ee54681/"+longitude+ ","+latitude, function(response){

	var info = "";

	response.on("data", function(chunk){
		info += chunk;
	});

	response.on("end", function(){
		if(response.statusCode === 200){
			try{
				//parsing the string in the json object
				var data = JSON.parse(info);
				console.log("Weather is " +data.currently.summary+" in "+data.timezone+". ");


			}catch(error){
				console.log("Sorry something went wrong")
			}
		}
		else{
			console.log("Sorry something went wrong");
		}
	});

});
}

module.exports.weather = weather;