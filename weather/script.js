function getWeather(city) {
  fetch(
    `https://api.weatherstack.com/current?access_key=8494cad4ff43b999635320654f2690b1&query=${city}`
  )
    .then((res) => res.json())
    .then((data) => showInApp(data))
    .catch((error) => console.log(error.message));
}

function showInApp(data) {
  let html = `
      <div class="header">
        <h1>Weather Report</h1>
        <h2 id="place">${data.location.country} , ${data.location.name}</h2>
        <p id="local-time">${data.location.localtime}</p>
      </div>
      <div class="weather-icon">
        <img id="weather-icon" src="${data.current.weather_icons[0]}" alt="Weather Icon" />
        <p id="weather-description">${data.current.weather_descriptions[0]}</p>
      </div>
      <div class="weather-details">
        <div class="weather-card">
          <h3>Temperature</h3>
          <p id="temperature">${data.current.temperature}°C</p>
        </div>
        <div class="weather-card">
          <h3>Humidity</h3>
          <p id="humidity">${data.current.humidity}%</p>
        </div>
        <div class="weather-card">
          <h3>Observation Time</h3>
          <p id="observation-time">${data.current.observation_time}</p>
        </div>
        <div class="weather-card">
          <h3>UV Index</h3>
          <p id="uv-index">${data.current.uv_index}</p>
        </div>
        <div class="weather-card">
          <h3>Visibility</h3>
          <p id="visibility">${data.current.visibility} km</p>
        </div>
        <div class="weather-card">
          <h3>Wind Speed</h3>
          <p id="wind-speed">${data.current.wind_speed} km/h</p>
        </div>
      </div>
      `;
  document.querySelector(".weather-app").innerHTML = html;
}
let inputCity = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", function (e) {
  let cityname = inputCity.value;
  getWeather(cityname);
  inputCity.value = "";
});
