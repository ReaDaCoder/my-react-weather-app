
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function Main(){
    const [temperature, setTemperature] = useState(null);
    const [weatherData, setWeatherData] = useState({ ready: false });

    return(
        <div className="main-page mx-auto">
          <h1>Weather App</h1>
            <div className="container">
  <div className="row">
    <div className="col">
      1 of 2
      <h2 id="city">London</h2>
      <img src=""/>
      <div id="weather-temperature"></div>
      <div id="date-time">Monday, 09:00</div>
      <div id="description">Sunny</div>
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
  <div className="row">
    <div className="col">
      1 of 3
      <div id="humidity">Humidity</div>
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