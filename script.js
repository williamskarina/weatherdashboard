var APIKey = "efbadddaeba4c377be25ce82e79aa3ca";

var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)