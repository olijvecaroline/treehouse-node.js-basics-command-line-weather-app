const weather = require('./weather');
//const query = process.argv.slice(2).join('_').replace(' ', '_');

var state = process.argv.slice(2)[0]
var city = process.argv.slice(3)

weather.get(state,city);
