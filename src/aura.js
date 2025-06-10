function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#text-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = input.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", signUp);

