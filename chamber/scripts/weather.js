const url = `https://api.openweathermap.org/data/2.5/weather?lat=49&lon=6&units=fahrenheit&appid=5185d8012de51aee5e9facf4637c4ed5`;

async function apiFetch() {
  let currentweatherElement = document.querySelector('.displayWeather1');
  let currentForecastElement = document.querySelector('.displayWeather2');
  let degree = '&deg'
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const currentTemperature = data.main.temp;
      const forecast = data.main.temp;
      const weatherDescription = data.weather[0].description;
      currentweatherElement
        .innerHTML = `<div class="Weather1-container">
                        <p>${currentTemperature}${degree}<span>f</span></p>
                        <p>${weatherDescription}</p>
                    </div>`
      currentForecastElement
        .innerHTML = `<div class="Weather1-container">
                        <p>Monday   :<span>${forecast}${degree}f</span></p>
                        <p>Tuesday  :<span>${forecast}${degree}f</span></p>
                        <p>Wednesday:<span>${forecast}${degree}f</span></p>
                      </div>`;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error)
  }
}

apiFetch()