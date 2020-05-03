'use strict';
console.log('hi frontend!');

/* todos
1. fetch data from fcc weather api
   use https://
  make sure it's for my current location

2. connect weather icon that's part of the json data
3. make a toggle for fahrenheit and celsius
*/

const url = 'https://fcc-weather-api.glitch.me/';

const sucessCB = async (position) => {
  const weather = document.getElementById('weather');
  const location = document.getElementById('location');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const tempSystem = document.getElementById('tempSystem');
  const icon = document.getElementById('icon');
  const loader = document.getElementById('loader');

  const { coords } = position;
  // lat is coords.latitude long is coords.longitude
  console.log(`lat is ${coords.latitude} long is ${coords.longitude}`);

  const response = await fetch(
    `${url}api/current?lat=${coords.latitude}&lon=${coords.longitude}`
  );
  const data = await response.json();
  console.log(data);
  if (data.name === 'Shuzenji') {
    // debug for fcc api problem
    alert(
      'API bug.. Ignore the location Shuzenzi and refresh the browser to run it again'
    );
  }
  weather.removeChild(loader); // remove loader
  // load data to nodes
  location.textContent = data.name;
  temperature.textContent = data.main.temp.toFixed(1);
  // use hex code to render degree sign through js
  tempSystem.textContent = `\xB0C`;
  description.textContent = data.weather[0].main;
  icon.src = data.weather[0].icon;
};

// clickHandler for tempSystem toggle
const onClickHandler = (event) => {
  const temperature = document.getElementById('temperature');
  if (event.target.textContent.includes('C')) {
    event.target.textContent = `\xB0F`;
    // change temp to F
    temperature.textContent = ((temperature.textContent * 9) / 5 + 32).toFixed(
      1
    );
  } else if (event.target.textContent.includes('F')) {
    event.target.textContent = '\xB0C';
    temperature.textContent = (
      ((temperature.textContent - 32) * 5) /
      9
    ).toFixed(1);
  }
};

const errorCB = (error) => {
  console.log(error);
};

// does geolocation exist on browser? if not, it's not supported
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(sucessCB, errorCB);
} else {
  alert('Gelolocation is not supported. Please update your browser.');
}

// fetch();
