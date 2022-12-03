var searchButton = document.querySelector("#searchBtn");
var searchContainer = document.querySelector("#searchform");
var searchList = document.querySelector(".searchList");
var optionList = []

// var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// var listHistory =JSON.parse(localStorage.setItem([""],[""]));
searchButton.addEventListener("click", search);

function search() {

  var desiredLocation = document.querySelector("#searchLocation").value;

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${desiredLocation}&limit=4&appid=0586f93376fa6711704b9de4a46cfc56`)
  .then(function (response) {
      return response.json()
    })
    .then (function (data) {
      console.log(data)
     

      for (let i = 0; i < data.length; i++) {
          var cityNames = data[i].name;
          var stateName = data[i].state;
          var lat = data[i].lat;
          var lon = data[i].lon;
          var optionList = [`${cityNames}, ${stateName}`], lat, lon;
    
          // console.log(optionList)
          var listItem = document.createElement('li');
          listItem.id ="search_"+ ( i + 1);
          // var br = document.createElement('br');
          // var aLink = document.createElement('a');
          listItem.textContent = optionList;
          // aLink.href = '#';
          listItem.classList.add('searchList_underline');
          // listItem.appendChild(aLink);
          searchList.appendChild(listItem);

    }



  })};

  // A check me function in order to check if a event is working
  function check_me(ev) {
    ev.preventDefault();
    console.log(ev.target);
    // alert("Hello World!")
}

  searchList.addEventListener('click', secondSearch);

  function secondSearch(ev){
    var personPick = ev.target;
    var targetID  = ev.target.id;
    var targetText = [ev.target.textContent]
    console.log(targetText)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${targetText[0]},${targetText[1]}&limit=1&appid=0586f93376fa6711704b9de4a46cfc56`)
    .then(function (response) {
        return response.json()
      })
      .then (function (data) {
        console.log(data);
        var state = data[0].state;
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(lat,lon)
        finalSearch(lat,lon, state)
      });


  };
  
  function finalSearch(lat, lon, state){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=0586f93376fa6711704b9de4a46cfc56`)

    .then(function (response) {
      return response.json()
    })
    .then (function(data){
      console.log(data);
      var stateProfile = state;
      var cityProfile = data.city.name;
      // day one main temp
      var dayOne_6am_Temp = data.list[2].main.temp;
      var dayOne_Noon_Temp = data[4].main.temp;
      var dayOne_6pm_Temp = data[6].main.temp;
      // day one weather
      var dayOne_6am_Weather = data[2].weather[0].description;
      var dayOne_Noon_Weather = data[4].weather[0].description;
      var dayOne_6pm_weather = data[6].weather[0].description;
      // day two main temp
      var dayTwo_6am_Temp = data.list[10].main.temp;
      var dayTwo_Noon_Temp = data.list[12].main.temp;
      var dayTwo_6pm_Temp = data.list[14].main.temp;
      // day two weather
      var dayTwo_6am_Weather = data[10].weather[0].description;
      var dayTwo_Noon_Weather = data[12].weather[0].description;
      var dayTwo_6pm_weather = data[14].weather[0].description;
      // day three main temp
      var dayThree_6am_Temp = data.list[18].main.temp;
      var dayThree_Noon_Temp = data.list[20].main.temp;
      var dayThree_6pm_Temp = data.list[22].main.temp;
      // day three weather
      var dayThree_6am_Weather = data.list[18].weather[0].description;
      var dayThree_Noon_Weather = data.list[20].weather[0].description;
      var dayThree_6pm_weather = data.list[22].weather[0].description;
      // day four main temp
      var dayFour_6am_Temp = data.list[26].main.temp
      var dayFour_Noon_Temp = data.list[28].main.temp
      var dayFour_6pm_Temp = data.list[30].main.temp
      // day four weather
      var dayFour_6am_Weather = data.list[26].weather[0].description;
      var dayFour_Noon_Weather = data.list[28].weather[0].description;
      var dayFour_6pm_Weather = data.list[30].weather[0].description;
      // day five main temp
      var dayFive_6am_Temp = data.list[34].main.temp;
      var dayFive_Noon_Temp = data.list[36].main.temp;
      var dayFive_6pm_Temp = data.list[38].main.temp;
      // day five weather
      var dayFive_6am_Weather = data.list[34].weather[0].description;
      var dayFive_Noon_Weather = data.list[36].weather[0].description;
      var dayFive_6pm_Weather = data.list[38].weather[0].description;


      


      


    });


  };
  

  

  function cardDisplay() {
   

};
