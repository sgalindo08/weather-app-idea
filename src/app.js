function displayTemperature(response) {
  console.log(response.data);
  let currentElement = document.querySelector("#current");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  currentElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "atc33fee61a9abfa8d3110b6abo544a9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Madrid&key=atc33fee61a9abfa8d3110b6abo544a9&units=metric`;

axios.get(apiUrl).then(displayTemperature);
