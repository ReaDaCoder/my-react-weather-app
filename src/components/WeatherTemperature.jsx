
import React, { useState } from 'react';

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");
    function changeToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheiht");
    }

    function changeToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if(unit === "celsius"){
        return(
            <div className="weather-temperature">
            <div id="weather-temperature">{props.celsius}</div>
            <span className="units"> °C | <a href="/" onClick={changeToFahrenheit}>°F</a></span>
            </div>
        );
    } else{
        let fahrenheit = (props.celsius *9/5) + 32;
        return(
            <div className="weather-temperature">
            <div id="weather-temperature">{fahrenheit}</div>
            <span className="units"> <a href="/" onClick={changeToCelsius}>°C</a> | °F</span>
            </div>
        )
    }
}