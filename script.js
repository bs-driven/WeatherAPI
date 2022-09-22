var currentWeather = fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=hourly,daily&appid=0586f93376fa6711704b9de4a46cfc56");
// &appid=0586f93376fa6711704b9de4a46cfc56 (API key goes at the end)
var desiredLocation = document.querySelector("#searchLocation");

console.log(desiredLocation);

fetch(currentWeather)
.then(function (response) {
    return response.json();
  });
  
  
