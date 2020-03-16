import React from "react";
import { MaxminTemp } from "../utils/utils.component";
import Error from "../Error/error.component";
import "./weather.style.css";

const Weather = ({
  cityname,
  weatherIcon,
  temp_celsius,
  temp_max,
  temp_min,
  description,
  error
}) => {
  if (!error) {
    return (
      <div className="container text-light">
        <div className="Card">
          <h1 className="text-white py-3">{cityname}</h1>
          <h5 className="py-4">
            <i className={`wi ${weatherIcon} display-1`} />
          </h5>

          {/* Get Celsius */}
          {temp_celsius ? <h1 className="py-2">{temp_celsius}&deg;</h1> : null}

          {/* show max and min temp */}
          <MaxminTemp min={temp_min} max={temp_max} />

          {/* Weather description */}
          <h4 className="py-3">
            {description.charAt(0).toUpperCase() + description.slice(1)}
          </h4>
        </div>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default Weather;
