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


 
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${desiredLocation}&limit=4&appid=0586f93376fa6711704b9de4a46cfc56`)
    .then(function (response) {
        return response.json()
      })
      .then (function(data){
        var city = data[0].name;
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(data);

      // console.log(city);
      // console.log(lat);
      // console.log(lon);
      weatherData(lat, lon);
      // console.log(country);

      });  
      // console.log()  
};

function weatherData(lat, lon){
   // https://pro.openweathermap.org/data/2.5/forecast/climate
  //  http://api.openweathermap.org/data/2.5/forecast
  fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&cnt=6&appid=0586f93376fa6711704b9de4a46cfc56`)

  .then(function (response) {
    return response.json()
  })
  .then (function(data){
    console.log(data)
    // for (let i = 0; i < 10; i++) { }
    
    var name = data.city.name;
    console.log(name);

    var weather = data.list[0].weather[0].main;
    console.log(weather);

    var weatherDesc = data.list[0].weather[0].description;
    console.log(weatherDesc);

    var weatherIcon = data.list[0].weather[0].icon;
    console.log(weatherIcon);

    var tempature = data.list[0].main.temp;
    console.log(tempature);

    cardCreations( name, weather, weatherDesc, tempature)

    // var thEle = document.createElement("th");
    // var tableRow = document.createElement("tr");
    // var tableTD = document.createElement("td");
    // var weatherDetTable = document.getElementById("weatherTable");
    // var tableContentName = document.createTextNode(`${name}`);
    // var tableContentWeather = document.createTextNode(` ${weather}`);
    // var tableBody = document.createElement("tbody");

    // var newTBody = weatherDetTable.appendChild(tableBody);
    // var newTableRow = newTBody.appendChild(tableRow);
    // var newTableHead = newTableRow.appendChild(thEle).append(tableContentName);
    // var newTableTD = newTableRow.appendChild(tableTD).append(tableContentWeather);

    // // remember this section might not be needed erase later!!
    // // var tablePrint = thEle.appendChild();
    // // var cityName = weatherDetTable.append();
    // // var tablePrintWeather = tableRow.appendChild(tableContentWeather);
    // // var cityWeather = weatherDetTable.append(tablePrintWeather);   
  });
};

function cardCreations(name, weather, weatherDesc, tempature){

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
  var cardTitle = document.createTextNode(`${name}`);
  newh5.append(cardTitle);
  // newDiv.appened(`${weatherCardTitle}`);
 
};