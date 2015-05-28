var test = require('tape'),
    cpjax = require('../'),
    MockXhr = require('fake-xml-http-request');

global.window = {
    XMLHttpRequest: MockXhr
};

var code = 200,
    response = '{}';

var send = MockXhr.prototype.send;
MockXhr.prototype.send = function(){
    send.apply(this, arguments);
    var request = this;
    setTimeout(function(){
        request.respond(code, {"Content-Type": "application/json"}, response);
    },1000);
};

test('make simple request', function(t){
    t.plan(2);

    cpjax('http://www.foo.com/', function(error, data){
        t.equal(error, null);
        t.equal(data, '{}');
    });
});


test('make simple request with error', function(t){
    t.plan(2);

    code = 500;
    response = 'BOOM';

    cpjax('http://www.foo.com/', function(error, data){
        t.equal(error, 'BOOM');
        t.equal(data, null);
    });
});