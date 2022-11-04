// var currentWeather = fetch ("https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=hourly,daily&appid=0586f93376fa6711704b9de4a46cfc56");
// &appid=0586f93376fa6711704b9de4a46cfc56 (API key goes at the end) 
var searchButton = document.querySelector("#searchBtn");
var searchContainer = document.querySelector("#searchform");


// var searchHistory = JSON.parse(localstorage.getItem(""))
// console.log(desiredLocation.value);
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

searchButton.addEventListener("click", search);
// searchButton.addEventListener("keydown", search )
searchContainer.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // code for enter
    search();
  }
});

function search (){
  // var searchValue = desiredLocation.value;
  
//   desiredLocation.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
var desiredLocation = document.querySelector("#searchLocation").value;

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${desiredLocation}&limit=4&appid=0586f93376fa6711704b9de4a46cfc56`)
    .then(function (response) {
        return response.json()
      })
      .then (function(data){
        // var city = data[0].name;
        var lat = data[0].lat;
        var lon = data[0].lon;
        var state = data[0].state;
        console.log(data);

      // console.log(city);
      // console.log(lat);
      // console.log(lon);
       // weatherDates (lat, lon);
      weatherData(lat, lon ,state);
      // console.log(country);

      });  
      // console.log()  
};
///////////////////////////////////////////////////////////////////////////

// function weatherDates (lat, lon){
//   fetch(`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=6&appid=0586f93376fa6711704b9de4a46cfc56`)
//   .then(function (response) {
//     return response.json()
//   })
//   .then (function(data){
//     console.log(data)
  
//   })

// };

function weatherData(lat, lon,state){
   // https://pro.openweathermap.org/data/2.5/forecast/climate
  //  http://api.openweathermap.org/data/2.5/forecast
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=6&units=imperial&appid=0586f93376fa6711704b9de4a46cfc56`)

  .then(function (response) {
    return response.json()
  })
  .then (function(data){
    console.log(data)
    for (let i = 0; i < 6; i++) { 
    
    var cityName = data.city.name;
    var stateName = state;
    // console.log(cityName);

    var weather = data.list[i].main.feels_like
    // console.log(weather);

    var weatherDesc = data.list[i].weather[0].description;
    // console.log(weatherDesc);

    var weatherIcon = data.list[i].weather[0].icon;
    // console.log(weatherIcon);

    var tempature = data.list[i].main.temp_max;
    // console.log(tempature);

    cardCreations( cityName, weather, weatherDesc, tempature, stateName)
}});

};

function cardCreations(cityName, weather, weatherDesc, tempature, stateName){
  // for (let i = 0; i < 6; i ++){
  var DR = document.getElementById("destinationResults");
  var newArticle = document.createElement("article");
  DR.append(newArticle);
  newArticle.classList.add("card");
  newArticle.style.width = '18rem';
  var newDiv = document.createElement("div");
  newArticle.append(newDiv);
  newDiv.classList.add("card-body");
  var newh5 = document.createElement("h5");
  newDiv.append(newh5);
  var cardTitle = document.createTextNode(`${cityName}, ${stateName}`);
  newh5.append(cardTitle);
  var newh6 = document.createElement('h6');
  newDiv.append(newh6);
  var weatherTitle = document.createTextNode(`${weather}`);
  newh6.append(weatherTitle);
  var newPElement = document.createElement("p")
  newDiv.append(newPElement)
  var pBodytemp = document.createTextNode(`The max high ${tempature} Fahrenheit.`);
  // , Describtion: ${weatherDesc}
  newPElement.append(pBodytemp);
  var pBodydes = document.createTextNode(`Description: ${weatherDesc}. `);
  newPElement.append(pBodydes);
// }
};
function buttongenerate () {
  
}