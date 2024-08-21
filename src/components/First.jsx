import React from "react";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Main(){
    const [temperature, setTemperature] = useState(null);
    const [weatherData, setWeatherData] = useState({ ready: false });

    return(
        <div className="main-page">
            <div className="container text-center">
  <div className="row">
    <div className="col">
      1 of 2
    </div>
    <div className="col">
      2 of 2
    </div>
  </div>
  <div className="row">
    <div class="col">
      1 of 3
    </div>
    <div className="col">
      2 of 3
    </div>
    <div className="col">
      3 of 3
    </div>
  </div>
</div>
        </div>
    )
}

export default Main