function reloadWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    
    
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;

     temperatureElement.innerHTML = Math.round(temperature);
    
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

