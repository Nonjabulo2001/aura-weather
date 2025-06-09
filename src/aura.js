
function SubmitEvent(event) {
    event.preventDefault();
    let placeHolder = document.querySelector("#placeholder-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= placeHolder.value;
    
    
}




let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", SubmitEvent);