import React from 'react';
import Icons from "./Icons";

export default function ForecastDay(props){
    function maxTemp(){
        let temperature = Math.round(props.data.max);
        return `${temperature}`;
    }

    function minTemp(){
        let temperature = Math.round(props.data.max);
        return `${temperature}`;
    }

    return(
        <div className="forecast-day">
             <div className="forecast-day"> {forecast[0].dt}</div>
          <Icons code={forecast[0].weather[0].icon} size={36}/>
        <div className="forecast-temperature">
          <span className="temperature-max">{forecast[0].temp.max}</span>
          <span className="temperature-min">{forecast[0].temp.min}</span>
          </div>
        </div>
    );
}