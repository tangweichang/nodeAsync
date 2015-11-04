var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Phladelphia&units=imperial&appid=bd82977b86bf27fb59a04b61b657fb6f';

request({
        url:url,
        json: true
        }, function(error,response,body) {
        if (error) {
        console.log('Unable to fetch weather.');
        } else {
        console.log(JSON.stringify(body,null,4));
        console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
        }
        
        });

console.log('After request!');
