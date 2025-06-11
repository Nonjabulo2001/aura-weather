function reloadWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time")
    let iconElement = document.querySelector("#icon")
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="rain-icon"/>`;
    let date = new Date(response.data.time*100);
    console.log(response.data)
    
    
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML =`${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formDate(date);
     temperatureElement.innerHTML = Math.round(temperature);
    
}
function formDate(date) {
  
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  if(minutes<10){
    minutes = `0${minutes}`
  }

  return `${day}, ${hours}:${minutes}`;
  
}


function searchCity(city) {
    let apiKey = "4df1bdctd7b970a1c5dof432b8f97964";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(reloadWeather);
    
}




function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#text-input");
  
  searchCity(input.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", signUp);

