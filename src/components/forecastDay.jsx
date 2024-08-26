import React from 'react';
import Icons from "./Icons";

export default function ForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }

    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        return day();
    }

    return(
        <div className="forecast-day">
             <div className="forecast-day"> {forecast[0].dt}</div>
          <Icons code={forecast[0].weather[0].icon} size={36}/>
        <div className="forecast-temperature">
          <span className="temperature-max">{maxTemp}</span>
          <span className="temperature-min">{minTemp}</span>
          </div>
        </div>
    );
}