var api = require('./api.json');
var https = require('https');


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
        let parsedData = JSON.parse(body);
          //console.log(parsedData);
          console.log(`The temperature in ${parsedData.current_observation.observation_location.city } is ${parsedData.current_observation.temp_c}`);
      });//end of on-end

    });//end of get-request
}


module.exports.get = get;
