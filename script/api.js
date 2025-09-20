let currentTempElement = document.querySelector('#current-temp');
let weatherIconElement = document.querySelector('#weather-icon');
let captionDescElement = document.querySelector('figcaption');


const url = `https://api.openweathermap.org/data/2.5/weather?lat=49&lon=6&units=fahrenheit&appid=5185d8012de51aee5e9facf4637c4ed5`;

async function apifetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      let currentTemp = data.main.temp /* current temperature */
      let currentWheather = data.weather[0].description /* current wheather */
      let imageIcon = data.weather[0].icon /* wheather icon */
      console.log(data);
    }
    else {
      throw Error(await response.text());
    }
  }
  catch (error) {
    console.log(error)
  }
}
console.log(apifetch())