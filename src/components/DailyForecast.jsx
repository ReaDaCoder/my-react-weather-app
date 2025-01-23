import React, { useState, useEffect } from "react";
import axios from "axios";
import Icons from "./Icons";
import ForecastDay from "./ForecastDay";

export default function DailyForecast(props) {
  const [forecast, setForecast] = useState(null);

  
  useEffect(() => {
    if (props.coordinates) {
      const apiKey = "64469ac67e6dc941feb5b50915a18dc7";
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then((response) => {
        setForecast(response.data.daily);
      });
    }
  }, [props.coordinates]);

  if (!forecast) {
    return <div>Loading...</div>;
  }

  return (
    <div className="DailyForecast">
      <div className="row">
        {forecast.slice(0, 6).map((day, index) => (
          <div className="col" key={index}>
            <ForecastDay data={day} />
            <div className="forecast-day">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </div>
            <Icons code={day.weather[0].icon} size={36} />
            <div className="forecast-temperature">
              <span className="temperature-max">
                {Math.round(day.temp.max)}°
              </span>{" "}
              <span className="temperature-min">
                {Math.round(day.temp.min)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}










































// import React, { useState } from "react";
// import Icons from "./Icons";
// import ForecastDay from "./ForecastDay";

// export default function DailyForecast(props) {
//   const [loaded, setLoaded] = useState(false);
//   const [forecast, setForecast] = useState(null);

//   function showResponse(response) {
//     setForecast(response.data.daily);
//     setLoaded(true);
//   }

//   if (!loaded || !forecast || forecast.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="row">
//         <div className="col">
//           <ForecastDay data={forecast[0]} />
//           <div className="forecast-day">{forecast[0].dt}</div>
//           <Icons code={forecast[0].weather[0].icon} size={36} />
//           <div className="forecast-temperature">
//             <span className="temperature-max">{forecast[0].temp.max}°</span>
//             <span className="temperature-min">{forecast[0].temp.min}°</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


/*import React, { useState } from "react";
import Icons from "./Icons";
import ForecastDay from "./forecastDay"

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
          <ForecastDay data={forecast[0]}/>
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
   
}*/