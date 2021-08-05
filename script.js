var APIKey = "efbadddaeba4c377be25ce82e79aa3ca";

var city = "Houston";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL).then(function(response){
    return response.json()
}) .then(function(data){
    console.log(data)
})