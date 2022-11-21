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
      // var long = data[0].lon
      // var lata = data[0].lat;
      // console.log(lata,long)
     

      for (let i = 0; i < data.length; i++) {
          var cityNames = data[i].name;
          var stateName = data[i].state;
          var optionList = [`${cityNames}, ${stateName}`];
          var lat = data[i].lat;
          var lon = data[i].lon;
    
          // console.log(optionList)
          var listItem = document.createElement('li');
          listItem.id ="search_"+ ( i + 1);
          var br = document.createElement('br');
          var aLink = document.createElement('a');
          aLink.textContent = optionList;
          aLink.href = '#';
          listItem.classList.add('searchList_underline');
          listItem.appendChild(aLink);
          searchList.appendChild(listItem).append(br);
          cardDisplay(lat,lon)

          // searchList.addEventListener('click', cardDisplay(lat, lon));
          

    }
    // console.log(searchList)
    // searchList.addEventListener('click', cardDisplay);

   
  });

  // searchList.addEventListener('click', cardDisplay(event))

  };

  // searchList.addEventListener('click', cardDisplay);


  // function cardDisplay(event) {
    function cardDisplay(lat, lon) {
      searchList.addEventListener('click',(event) =>{
      var slot1 = document.querySelector('#search_1');
      var slot2 = document.querySelector('#search_2');
      var slot3 = document.querySelector('#search_3');
      var slot4 = document.querySelector('#search_4');
      console.log(slot1);
      if (event = slot1) {

        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=0586f93376fa6711704b9de4a46cfc56`)

      }
   
      });
      

  // fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=0586f93376fa6711704b9de4a46cfc56`)

  

}
