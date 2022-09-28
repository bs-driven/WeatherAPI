// var currentWeather = fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=hourly,daily&appid=0586f93376fa6711704b9de4a46cfc56");
// &appid=0586f93376fa6711704b9de4a46cfc56 (API key goes at the end) 
var searchButton = document.querySelector("#searchBtn");
// var searchHistory = JSON.parse(localstorage.getItem(""))
// console.log(desiredLocation.value);
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

searchButton.addEventListener("click", search);

function search (){
  // var searchValue = desiredLocation.value;
  var desiredLocation = document.querySelector("#searchLocation").value;

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${desiredLocation},&limit=4&appid=0586f93376fa6711704b9de4a46cfc56`)
    .then(function (response) {
        return response.json()
      })
      .then (function(data){
        var city = data[0].name;
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(data);

      console.log(city);
      console.log(lat);
      console.log(lon);
      weatherData(lat, lon);
      // console.log(country);

      });  
      // console.log()
  
}

function weatherData(lat, lon){
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=3&appid=0586f93376fa6711704b9de4a46cfc56`)
  .then(function (response) {
    return response.json()
  })
  .then (function(data){
    console.log(data)
    var name = data.city.name;
    console.log(name);
    var weather = data.list[0].weather[0].main;
    console.log(weather);
    
  }
)}