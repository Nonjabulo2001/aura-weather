function handleEvent(event) {
    event.preventDefault();
    let textInput = document.querySelector("#text-input");
    let cityElement = document.querySelector("#city");
    cityElement = textInput.value;
    
    
}


let searchButton =  document.querySelector("#search-form");
searchButton.addEventListener("submit", handleEvent);