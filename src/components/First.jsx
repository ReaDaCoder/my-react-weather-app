
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import TimeAndDate from "./TimeAndDate";


function Main(){
    const [temperature, setTemperature] = useState(null);
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(weatherData);

    function getSubmit(event){
      event.preventDefault();
    }

    function getResponse(response) {
      console.log(response.data);
      setWeatherData({
          ready: true,
          coordinates: response.data.coord,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          city: response.data.name,
      });

      setTemperature(response.data.main.temp);
  }

    //let city = "London";
        let apiKey = "5d7b9ccc3e46361f64b317d8161bb16e";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getResponse);



    return(
        <div className="main-page mx-auto">
          <h1>Weather App</h1>
            <div className="container">
  <div className="row">
    <div className="col">
    <label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q" />

<button>Search</button>

      1 of 2
      <h2 id="city">{weatherData.city}</h2>
      <img src=""/>
      <div id="weather-temperature">{weatherData.temperature}</div>
      <TimeAndDate/>
      <div id="description">{weatherData.description}</div>
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
  <div className="row">
    <div className="col">
      1 of 3
      <div id="humidity">{weatherData.humidity}</div>
    </div>
    <div className="col">
      <div id="visibility">Visibility</div>
      2 of 3
    </div>
    <div className="col">
      3 of 3
      <div id="air-quality">Air Quality</div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Main