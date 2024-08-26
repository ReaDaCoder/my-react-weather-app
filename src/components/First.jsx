
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import TimeAndDate from "./TimeAndDate";
import Icons from "./Icons";
import Dark from './Dark_Theme';
import WeatherTemperature from "./WeatherTemperature";
import DailyForecast from "./DailyForecast";


function Main(data={weatherData}){
    const [temperature, setTemperature] = useState(null);
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(weatherData);

    function getSubmit(event){
      event.preventDefault();
      search();
    }

    function getCity(event){
      event.preventDefault();
      setCity(event.target.value);
    }

    function getResponse(response) {
      console.log(response.data);
      setWeatherData({
          ready: true,
          coordinates: response.data.coord,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          //iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
          icon: response.data.weather[0].icon,
          wind: response.data.wind.speed,
          city: response.data.name,
      });

      setTemperature(response.data.main.temp);
  }

    //let city = "London";
    function search() {
      const apiKey = "5d7b9ccc3e46361f64b317d8161bb16e";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(getResponse);
    }

        //if(weatherData.ready){
          return(
            <div className="main-page mx-auto">
              <h1>Weather App</h1>
                <div className="container">
                <Dark />
      <div className="row">
        <div className="col left">
          <form onSubmit={getSubmit}>
          <label for="site-search">Search city:</label>
    <input type="search" id="site-search" name="q" onChange={getCity}/>
    
    <button>Search</button>
          </form>
          <h2 id="city">{weatherData.city}</h2>
          <Icons code={weatherData.icon} alt={weatherData.description}/>
          <WeatherTemperature celsius={weatherData.temperature}/>
          <TimeAndDate/>
          <div id="description">{weatherData.description}</div>
        </div>
        <div className="col right">
          <div class="container text-center">
       <DailyForecast coords={weatherData.coordinates}/>
    </div>
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
        /*} 
        else{
        search();
          //return "Unavailable";
        }*/
}

export default Main