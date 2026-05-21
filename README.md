# Realtime Weather Website 🌦️

A simple and responsive **Realtime Weather Website** built using **HTML, CSS, JavaScript, and REST API**.
This project fetches live weather data from a weather API and displays real-time weather information for any city worldwide.

---

## Features

* 🌍 Search weather by city name
* 🌡️ Real-time temperature updates
* ☁️ Weather conditions display
* 💨 Wind speed information
* 💧 Humidity percentage
* 🌅 Dynamic weather icons
* 📱 Fully responsive design
* ⚡ Fast and lightweight UI

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### API

* REST API
* OpenWeatherMap API (or any weather API)

---

## Project Preview

*Add screenshots here*

Example:

```text id="h7cjlwm"
screenshots/homepage.png
screenshots/weather-result.png
```

---

## Folder Structure

```text id="2bg5sd"
Realtime-weather-website/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── weather-icons/
├── screenshots/
└── README.md
```

---

## How It Works

1. User enters a city name.
2. JavaScript sends a request to the Weather REST API.
3. API returns live weather data in JSON format.
4. Website updates the UI dynamically with:

   * Temperature
   * Weather condition
   * Humidity
   * Wind speed
   * Weather icon

---

## API Used

Example API:

```text id="8wy5vq"
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

Get your free API key from:

[OpenWeatherMap Official Website](https://openweathermap.org/api?utm_source=chatgpt.com)

---

## Installation & Setup

### Clone Repository

```bash id="rk0iy0"
git clone https://github.com/sumit0641/Realtime-weather-website.git
```

### Open Project

```bash id="57m8xv"
cd Realtime-weather-website
```

### Run the Website

Simply open `index.html` in your browser.

---

## Example JavaScript Fetch Request

```javascript id="n6e0vk"
const apiKey = "YOUR_API_KEY";
const city = "Delhi";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
```

---

## Future Improvements

* 📍 Current location weather detection
---

## Learning Objectives

This project helps in learning:

* REST API integration
* Fetch API in JavaScript
* DOM manipulation
* Responsive web design
* JSON data handling
* Async JavaScript

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to your branch
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

**Your Name**
GitHub: `(https://github.com/sumit0641/Realtime-weather-website)`

---

## Acknowledgements

* [OpenWeatherMap API](https://openweathermap.org/api?utm_source=chatgpt.com)
* JavaScript Fetch API
* Open Source Community
