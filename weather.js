var request = require('request');


module.exports = function (location,callback) {
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=bd82977b86bf27fb59a04b61b657fb6f';
    
    if (!location) {
        return callback('No location provided');
    }
    
    request({
            url:url,
            json: true
            }, function(error,response,body) {
            if (error) {
            callback('Unable to fetch weather.');
            } else {
            //console.log(JSON.stringify(body,null,4));
            callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
            }
    
            });
    
    //console.log('After request!');
}