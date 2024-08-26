import React from "react";
import Icons from "./Icons";

export default function DailyForecast(props){
  function showResponse(response){

  }
  let apiKey = "d7b9ccc3e46361f64b317d8161bb16e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showResponse);
    return(
        <div>
          <div class="row">
          <div class="col">
            <div className="forecast-day"> Mon</div>
          < Icons code="01d" size={36}/>
          <div className="forecast-temperature">
            <span className="temperature-max">19</span>
            <span className="temperature-min">10</span>
          </div>
        </div>
      </div>
        </div>
    );
}