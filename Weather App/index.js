// let data;

const inputBox = document.querySelector(".input-box");
const countryName = document.querySelector("#countryName");
const stateName = document.querySelector("#stateName");
const cityName = document.querySelector("#cityName");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windSpeed");
const tempreture = document.querySelector("#tempreture");
const feels = document.querySelector("#feels");
const logoImg = document.querySelector("#logoImg");
const weatherStatus = document.querySelector("#weatherStatus");

const getData = async (event) => {
  event.preventDefault();
  if (!inputBox.value) {
    alert("Please Enter City Name: ");
    return;
  }

  const city = inputBox.value;

  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e429ae10e5c34411936204516231303&q=${city}`
  );

  // 2ec89956d36a752aa3083151f2a6bd0d
  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_kph;
  tempreture.innerHTML = data.current.temp_c;
  feels.innerHTML = data.current.feelslike_c;
  logoImg.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;
};

// this is my first serup in home i want to see hows this works i experience is unbelivabalbe
