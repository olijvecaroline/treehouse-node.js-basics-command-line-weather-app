var api = require('./api.json');
var https = require('https');

//print temperature
function printWeather(weather){
	const message = `The temperature in ${weather.current_observation.observation_location.city } is ${weather.current_observation.temp_c} degrees`;
	console.log(message);
}

function get(state, city){
  var queryString = `https://api.wunderground.com/api/${api.key}/conditions/q/${state}/${city}.json`
  const request = https.get(queryString, response => {
                                   console.log(`responsecode : ${response.statusCode}`);
     //reading the data
      let body = "";
      response.on('data', data => {
        body += data;
      });//end of response-on

      //parsing the data
      response.on('end',()=>{
        console.log(queryString);
        let weather = JSON.parse(body);
        printWeather(weather);
      });//end of on-end

    });//end of get-request
}


module.exports.get = get;
