//function doWork(data, callback) {
//    callback('done');
//}
//
//function doWorkPromise(data) {
//    return new Promise(function(resolve, reject) {
//        setTimeout(function() {
//            resolve('everything worked!');
//            
//        }, 1000);
//        
////        
////        reject({
////            error: 'something bad happened'    
////        });
//    });
//}
//
//doWorkPromise('some data').then(function(data) {
//    console.log(data);
//}, function(error) {
//    console.log(error);
//});

var request = require('request');

function getWeather (location) {
    return new Promise(function(resolve,reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&appid=c723c414e2362635d8195620b55e8962';
    
        if (!location) {
            return reject('No location provided');
        }

        request({
                url:url,
                json: true
        }, function(error,response,body) {
            if (error) {
                reject('Unable to fetch weather.');
            } else {
            //console.log(JSON.stringify(body,null,4));
                resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
            }

        });

    
   
        
    });
    
    
    
}

getWeather('new york').then(function(currentWeather) {
    console.log(currentWeather);
},function(error) {
    console.log(error); 
});