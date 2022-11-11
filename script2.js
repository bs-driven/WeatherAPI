var searchButton = document.querySelector("#searchBtn");
var searchContainer = document.querySelector("#searchform");
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var listHistory =JSON.parse(localStorage.setItem([""],[""]));
searchButton.addEventListener("click", search);

function search() {

  var desiredLocation = document.querySelector("#searchLocation").value;

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${desiredLocation}&limit=4&appid=0586f93376fa6711704b9de4a46cfc56`)
  .then(function (response) {
      return response.json()
    })
    .then (function (data) {
      for (let i = 0; i < data.length; i++) {
          var cityNames = data[i].name;
          var stateName = data[i].state;      
      }
      selectionBtnChoice(cityNames, stateName);
    });
};

function selectionBtnChoice(cityNames, stateName){
  var searchList = document.querySelector(".searchList");
  var choices = document.createTextNode(`${cityNames},${stateName}`);


} 