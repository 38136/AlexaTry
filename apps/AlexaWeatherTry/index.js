module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('test-skill');
var requestpackage = require('request');
var rp = require('request-promise');
var http = require('http');


app.launch(function (request, response) {
    response.say('Welcome to Weather Forecasting do you want to know about todays Monsoon').shouldEndSession(false);
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
app.intent('WeatherIntent', {
        "slots": {
            "cityname": "AMAZON.AT_CITY"
        }
    },
    function (request, response) {
        var city = request.slot('cityname');

        if (city) {
            var options = {
                method: 'GET',
                uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f124bbe4bc06cf62b4dbbc17cb4c0692`,
                json: true,
                timeout: 160
            };
            // console.log("logging the error" + JSON.stringify(options));
            // rp(options).then(function (response) {
            //     console.log('user has %d repos', response.length);
            //     let desc = repos.weather.description;
            //     let humidity = repos.main.humidity;
            //     let visibility = repos.googleMapResults.visibility;
            //     let wind = repos.googleMapResults.wind.speed;
            //     response.say(`Today weather looks  ${desc}  in  ${city}  with humidity is ${humidity}  temperature is ${temp} visibility is ${visibility} and the wind speed is ${wind} Do you like to continue.`).shouldEndSession(false);

            // }).catch(function (err) {
            //     console.log("api called failed");
            // });


            requestpackage(options, function (error, response, body) {
                var data = JSON.stringify(body);
                let desc = data.weather.description;
                let humidity = data.main.humidity;
                let visibility = data.googleMapResults.visibility;
                let wind = data.googleMapResults.wind.speed;
                response.say(`Today weather looks  ${desc}  in  ${city}  with humidity is ${humidity}  temperature is ${temp} visibility is ${visibility} and the wind speed is ${wind} Do you like to continue.`).shouldEndSession(false);
                if (error) {
                    return console.log(error);
                }
                console.log(JSON.stringify(response));
                console.log(data.name);
            });

        } else {
            response.say("please tell me your city name").shouldEndSession(false);
        }
    });
app.intent('ThankYouIntent', function (request, response) {
    response.say("Thank you, Namdri and dhanniyavaath");
});

module.exports = app;