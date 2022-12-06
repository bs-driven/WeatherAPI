var searchButton = document.querySelector("#searchBtn");
var searchContainer = document.querySelector("#searchform");
var resultArea = document.querySelector("#resultDisplay")
var searchList = document.querySelector(".searchList");
var optionList = []
var first_day = document.querySelector('#day_one');
var second_day = document.querySelector('#day_two');
var third_day = document.querySelector('#day_three');
var fouth_day = document.querySelector('#day_four');
var fifth_day = document.querySelector('#day_five');

// var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
// var listHistory =JSON.parse(localStorage.setItem([""],[""]));
searchButton.addEventListener("click", search);
searchContainer.addEventListener("keypress", function(e){
  if(e.key === 'Enter'){
    search()
  }
})

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
          var aLink = document.createElement('a');
          aLink.textContent = optionList;
          aLink.href = '#';
          listItem.classList.add('searchList_underline');
          listItem.appendChild(aLink);
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
      // day one date
      var dayOne_date = data.list[2].dt_txt;
      var dayOne_titleArea = document.querySelector('#date_dayOne');
      var dayOne_instanceOne = document.querySelector('#intervalOne_dayOne');
      var dayOne_instanceTwo = document.querySelector('#intervalTwo_dayOne');
      var dayOne_instanceThree = document.querySelector('#intervalThree_dayOne');

      // day one main temp
      var dayOne_6am_Temp = data.list[2].main.temp;
      var dayOne_Noon_Temp = data.list[4].main.temp;
      var dayOne_6pm_Temp = data.list[6].main.temp;
      // day one weather
      var dayOne_6am_Weather = data.list[2].weather[0].description;
      var dayOne_Noon_Weather = data.list[4].weather[0].description;
      var dayOne_6pm_weather = data.list[6].weather[0].description;

      var titleContent_dayone = document.createTextNode(`${dayOne_date}`);
      var firstIn_dayOne = document.createTextNode(`This weater report starts from the time given with the date. The tempature is ${dayOne_6am_Temp}°. While the weather is ${dayOne_6am_Weather}`);
      var secondIn_dayOne = document.createTextNode(`Here is reflection  six hours from the before mentioned tempature and weather. With the tempature being ${dayOne_Noon_Temp}°,while outside there is ${dayOne_Noon_Weather}`);
      var thirdIn_dayOne = document.createTextNode(`This six hours from the above tempature and weather. The tempature is ${dayOne_6pm_Temp}°, while outside there is ${dayOne_6pm_weather}`);
      dayOne_titleArea.append(titleContent_dayone);
      dayOne_instanceOne.append(firstIn_dayOne);
      dayOne_instanceTwo.append(secondIn_dayOne);
      dayOne_instanceThree.append(thirdIn_dayOne);
  


    //  day two date
      var dayTwo_date = data.list[10].dt_txt;
      var dayTwo_titleArea = document.querySelector('#date_dayTwo');      
      var dayTwo_instanceOne = document.querySelector('#intervalOne_dayTwo');
      var dayTwo_instanceTwo = document.querySelector('#intervalTwo_dayTwo');
      var dayTwo_instanceThree = document.querySelector('#intervalThree_dayTwo');

      // day two main temp
      var dayTwo_6am_Temp = data.list[10].main.temp;
      var dayTwo_Noon_Temp = data.list[12].main.temp;
      var dayTwo_6pm_Temp = data.list[14].main.temp;
      // day two weather
      var dayTwo_6am_Weather = data.list[10].weather[0].description;
      var dayTwo_Noon_Weather = data.list[12].weather[0].description;
      var dayTwo_6pm_weather = data.list[14].weather[0].description;

      var titleContent_daytwo =  document.createTextNode(`${dayTwo_date}`);
      var firstIn_dayTwo = document.createTextNode(`This weater report starts from the time given with the date. The tempature is ${dayTwo_6am_Temp}°. While the weather is ${dayTwo_6am_Weather}`);
      var secondIn_dayTwo = document.createTextNode(`Here is reflection  six hours from the before mentioned tempature and weather. With the tempature being ${dayTwo_Noon_Temp}°,while outside there is ${dayTwo_Noon_Weather}`);
      var thirdIn_dayTwo = document.createTextNode(``);
      dayTwo_titleArea.append(titleContent_daytwo);

      // day threee date
      var dayThree_date = data.list[18].dt_txt;
      var dayThree_titleArea = document.querySelector('#date_dayThree');
      var dayThree_instanceOne = document.querySelector('#intervalOne_dayThree');
      var dayThree_instanceTwo = document.querySelector('#intervalTwo_dayThree');
      var dayThree_instanceThree = document.querySelector('#intervalThree_dayThree');

      // day three main temp
      var dayThree_6am_Temp = data.list[18].main.temp;
      var dayThree_Noon_Temp = data.list[20].main.temp;
      var dayThree_6pm_Temp = data.list[22].main.temp;
      // day three weather
      var dayThree_6am_Weather = data.list[18].weather[0].description;
      var dayThree_Noon_Weather = data.list[20].weather[0].description;
      var dayThree_6pm_weather = data.list[22].weather[0].description;

      var titleContent_dayThree =  document.createTextNode(`${dayThree_date}`);
      var firstIn_dayThree = document.createTextNode(`This weater report starts from the time given with the date. The tempature is ${dayThree_6am_Temp}°. While the weather is ${dayThree_6am_Weather}`);
      var secondIn_dayThree = document.createTextNode(`Here is reflection  six hours from the before mentioned tempature and weather. With the tempature being ${dayThree_Noon_Temp}°,while outside there is ${dayThree_Noon_Weather}`);
      var thirdIn_dayThree = document.createTextNode(``);
      dayThree_titleArea.append(titleContent_dayThree);

      // day four date
      var dayFour_date = data.list[26].dt_txt;
      var dayFour_titleArea = document.querySelector('#date_dayFour');
      var dayFour_instanceOne = document.querySelector('#intervalOne_dayFour');
      var dayFour_instanceTwo = document.querySelector('#intervalTwo_dayFour');
      var dayFour_instanceThree = document.querySelector('#intervalThree_dayFour');

      // day four main temp
      var dayFour_6am_Temp = data.list[26].main.temp
      var dayFour_Noon_Temp = data.list[28].main.temp
      var dayFour_6pm_Temp = data.list[30].main.temp
      // day four weather
      var dayFour_6am_Weather = data.list[26].weather[0].description;
      var dayFour_Noon_Weather = data.list[28].weather[0].description;
      var dayFour_6pm_Weather = data.list[30].weather[0].description;

      var titleContent_dayFour =  document.createTextNode(`${dayFour_date}`);
      var firstIn_dayFour = document.createTextNode(`This weater report starts from the time given with the date. The tempature is ${dayFour_6am_Temp}°. While the weather is ${dayFour_6am_Weather}`);
      var secondIn_dayFour = document.createTextNode(`Here is reflection  six hours from the before mentioned tempature and weather. With the tempature being ${dayFour_Noon_Temp}°,while outside there is ${dayFour_Noon_Weather}`);
      var thirdIn_dayFour = document.createTextNode(``);
      dayFour_titleArea.append(titleContent_dayFour);

      // day five date
      var dayFive_date = data.list[34].dt_txt;
      var dayFive_titleArea = document.querySelector('#date_dayFive');
      var dayFive_instanceOne = document.querySelector('#intervalOne_dayFive');
      var dayFive_instanceTwo = document.querySelector('#intervalTwo_dayFive');
      var dayFive_instanceThree = document.querySelector('#intervalThree_dayFive');

      // day five main temp
      var dayFive_6am_Temp = data.list[34].main.temp;
      var dayFive_Noon_Temp = data.list[36].main.temp;
      var dayFive_6pm_Temp = data.list[38].main.temp;
      // day five weather
      var dayFive_6am_Weather = data.list[34].weather[0].description;
      var dayFive_Noon_Weather = data.list[36].weather[0].description;
      var dayFive_6pm_Weather = data.list[38].weather[0].description;
      
      var titleContent_dayFive =  document.createTextNode(`${dayFive_date}`);
      var firstIn_dayFive = document.createTextNode(`This weater report starts from the time given with the date. The tempature is ${dayFive_6am_Temp}°. While the weather is ${dayFive_6am_Weather}`);
      var secondIn_dayFive = document.createTextNode(`Here is reflection  six hours from the before mentioned tempature and weather. With the tempature being ${dayFive_Noon_Temp}°,while outside there is ${dayFive_Noon_Weather}`);
      var thirdIn_dayFive = document.createTextNode(``);
      dayFive_titleArea.append(titleContent_dayFive);

      daysInsert()


      function daysInsert(){
        function dayOneInserts(){
          var titleContent_dayone = document.createTextNode(`${dayOne_date}`);
        dayOne_titleArea.append(titleContent_dayone);
  
          
        }
  
  
      }

    });
    


  };
  

 
