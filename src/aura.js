
function temperatureSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-input");
    let header = document.querySelector(".heading");
    header = searchInput.value;
    
}




let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("Submit", temperatureSubmit);