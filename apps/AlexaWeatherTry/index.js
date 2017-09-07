module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('test-skill');


app.launch(function (request, response) {
    response.say('Welcome to Weather Forecasting').reprompt('You want to know about the today forecast').shouldEndSession(false).remprompt('I\'m still listening.');
});


app.error = function (exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};
app.intent('WelcomeIntent', function (request, response) {
    response.say("Welcome to Weather Forecasting do you want to know about today's Monsoon").shouldEndSession(false);
});
// app.intent('WeatherIntent',
//     function (request, response) {
//         var city = request.slot('cityname');
//         var weatherreport=require('./weather')(city);
//         let desc = weather.description;
//         let humidity = main.humidity;
//         if (city) {
//             response.say("Today weather looks " + description + " in " + city + "with humidity is " + humidity+"Do you like to continue.").shouldEndSession(false).remprompt('I\'m still listening.');
//         } else {
//             response.say("please tell me your city name").shouldEndSession(false).remprompt('I\'m still listening.');
//         }
//     });

app.intent('ThankYouIntent', function (request, response) {
    response.say("Thank you, Namdri and dhanniyavaath");
});

module.exports = app;