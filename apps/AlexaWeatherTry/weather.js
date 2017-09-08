const request = require('request-sync');
const appId = f124bbe4bc06cf62b4dbbc17cb4c0692;
module.exports = function (city) {
    return JSON.parse(request({
        // http://api.openweathermap.org/data/2.5/weather?q=chennai&appid=f124bbe4bc06cf62b4dbbc17cb4c0692
        uri : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`,
        method: 'GET'
    }).body);

};