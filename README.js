# cpjax

callback passing javascript and xtra stuff hopefully not xml

## What

Make ajax requests look like anything else async in javascript

## Usage

var cpjax = require('cpjax');

cpjax('http://www.google/com', function(error, data){
    if(error){
        return console.log('OH NOES GOOGLE IS DOWN');
    }

    console.log('The google homepage: ' + data);
});

cpjax is a wrapper around `simple-ajax`, and it returns a `simple-ajax` object that you can use if you want to.