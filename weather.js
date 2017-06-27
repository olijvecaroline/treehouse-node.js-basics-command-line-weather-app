var api = require('./api.json');
var https = require('https');

//print temperature
function printWeather(weather){
	const message = `The temperature in ${weather.current_observation.observation_location.city } is ${weather.current_observation.temp_c} degrees`;
	console.log(message);
}
//print errors
function printError(){
	console.log(http.STATUS_CODES[response.statusCode]);
}

function get(state, city){
	try{
	  var queryString = `https://api.wunderground.com/api/${api.key}/conditions/q/${state}/${city}.json`
	  const request = https.get(queryString, response => {
	      console.log(`responsecode : ${response.statusCode}`);
				//checking statusCode
				if(response.statusCode === 200){
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
				}else {
					console.log(`error in retrieving the information`)
				}
	    });//end of get-request
		}catch{
			printError();
		}//end of try-catch block
}//end of get-function


module.exports.get = get;
