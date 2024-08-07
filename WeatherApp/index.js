let inputCity = document.querySelector(".inp-city");
let sButton = document.querySelector(".search-but");
let weatherImg = document.querySelector(".weather img");

console.log(weatherImg);

let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity-per");
let wind = document.querySelector(".wind-speed");

sButton.addEventListener("click", async function getData() {
  cityc = inputCity.value;
  if (cityc === "") {
    alert("Please enter city !");
    return;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityc}&appid=d9b9ac632bdc802b30dedf49142654eb`;
  let response;
  let data;

  try {
    response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error while fetching data !");
    }
    data = await response.json();

    console.log(data);

    city.innerHTML = data.name;
    temp.innerHTML = Math.round((data.main.temp - 273.15).toFixed(2)) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if (Math.round((data.main.temp - 273.15).toFixed(2)) < 25) {
      weatherImg.src = "./images/rain.png";
    } else if (Math.round((data.main.temp - 273.15).toFixed(2)) < 30) {
      weatherImg.src = "./images/clouds.png";
    } else {
      weatherImg.src = "./images/clear.png";
    }
  } catch (err) {
    console.log("Error: " + err.message);
    return;
  }
});
