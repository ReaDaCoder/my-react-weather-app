import React, { useState } from "react";
import Icons from "./Icons";

export default function DailyForecast(props){
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function showResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }
  //if(loaded){
    return(
      <div>
        <div class="row">
        <div class="col">
          <div className="forecast-day"> {forecast[0].dt}</div>
          <Icons code={forecast[0].weather[0].icon} size={36}/>
        <div className="forecast-temperature">
          <span className="temperature-max">{forecast[0].temp.max}</span>
          <span className="temperature-min">{forecast[0].temp.min}</span>
        </div>
      </div>
    </div>
      </div>
  );
  
//}else{
    let apiKey = "d7b9ccc3e46361f64b317d8161bb16e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showResponse);
 // }
   
}