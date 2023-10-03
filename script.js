//add api url that consist of weather API Key and units that convert temperature into celcius
const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?appid=d44983d8f640a0dca9b55c54de07f9a0&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
const response = await fetch(apiUrl + city);
//check if the entered value does not exist
if (response.status == 404) {
  document.querySelector(".error").style.display = "block";
  document.querySelector(".weather").style.display = "none";
}
//If the value exist display the weather information
else {

  var data = await response.json();
  
  //display the weather information from json file
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  //use condition statement to display the weather condition 
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}
}
//Make the search button clickable and perform task
searchBtn.addEventListener("click", () => {
checkweather(searchBox.value);
});