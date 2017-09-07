module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('test-skill');


app.launch(function (request, response) {
    response.say('Welcome to Weather Forecasting').reprompt('You want to know about the today forecast').shouldEndSession(false);
});


app.error = function (exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};
app.intent('WelcomeIntent', function (request, response) {
    response.say("Welcome to Weather Forecasting do you want to know about today's Monsoon");
});
app.intent('WeatherIntent',
    function (request, response) {
        var city = request.slot('cityname');
        if (city) {

            response.say("Today weather looks great in " + city + "with 33");

        }
    });

module.exports = app;