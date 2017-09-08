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

app.intent('WeatherIntent',
    function (request, response, next) {
        var city = request.slot('cityname');
        if (city) {
            async function googlemap() {
                const appId = f124bbe4bc06cf62b4dbbc17cb4c0692;
                var googleMapResults = await (await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiId},`)).json();
                let desc = googleMapResults.weather.description;
                let humidity = googleMapResults.main.humidity;
                response.say(`Today weather looks  ${desc}  in  ${city} with humidity is ${humidity} and the temperature is ${temp} Do you like to continue.`).shouldEndSession(false);
            }
        } else {
            response.say("please tell me your city name").shouldEndSession(false);
        }
    });

app.intent('ThankYouIntent', function (request, response) {
    response.say("Thank you, Namdri and dhanniyavaath");
});

module.exports = app;


//     if (city) {
//         var weatherreport = require('./weather')(city);
//         let desc = weather.description;
//         let humidity = main.humidity;
//         response.say("Today weather looks " + desc + " in " + city + "with humidity is " + humidity + "Do you like to continue.").shouldEndSession(false);
//     } else {
//         response.say("please tell me your city name").shouldEndSession(false);
//     }
// });