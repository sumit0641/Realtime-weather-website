const apiKey = 'c89076b25dcb5d84e5661aeecb284b4f';
const cityInput = document.getElementById('cityInput');

cityInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && cityInput.value) {
    getWeather();
  }
});

async function getWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();

  if (data.cod === '404') {
    document.getElementById('weather').innerHTML = 'City not found ❌';
    return;
  }

  document.getElementById('weather').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ ${data.main.temp} °C</p>
        <p>☁️ ${data.weather[0].description}</p>
      `;
}