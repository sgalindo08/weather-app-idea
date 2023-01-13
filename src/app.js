function formatTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  return `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
}
function displayTemperature(response) {
  let currentElement = document.querySelector("#current");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let clockElement = document.querySelector("#clock");
  let dayElement = document.querySelector("#day");
  let currentTime = new Date();
  currentElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  clockElement.innerHTML = formatTime(response.data.time * 1000);
  dayElement.innerHTML = formatDate(currentTime);
}
let apiKey = "atc33fee61a9abfa8d3110b6abo544a9";
let query = "Madrid";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Madrid}&key={atc33fee61a9abfa8d3110b6abo544a9}`;

axios.get(apiUrl).then(displayTemperature);
