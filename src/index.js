
function getWeather(cityInput) {

let apiKey= "8abcca59e0e54e69a53183749252006";
let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityInput}&aqi=no`

axios.get(apiUrl).then(showWeather);


}

function showWeather(response) {
    console.log(response.data);
    let cityInput = document.querySelector("#city-input");
    let city = document.querySelector("#city");
    let temperature = document.querySelector("#temperature-input");
    let icon = document.querySelector("#icon");

    city.innerHTML = response.data.location.name;
    temperature.innerHTML = Math.round(response.data.current.temp_c);
    icon.innerHTML =`<img src="https:${response.data.current.condition.icon}" class="weather-icon" alt="Weather Icon" />`;
}

let form = document.querySelector("#search-form");
let cityInputElement = document.querySelector("#city-input");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const city = cityInputElement.value; 
  // Get the value from the input
  getWeather(city);
});

getWeather("Kano"); // Initial weather for your current location

