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
          // searchList.addEventListener('click', function(){cardDisplay(lat,lon);})

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
        var lat = data.lat;
        var lon = data.lon;
      });


  };
  

  

  function cardDisplay() {
   

};
