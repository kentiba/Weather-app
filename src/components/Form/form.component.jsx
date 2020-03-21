import React from "react";
import Error from "../Error/error.component";
import Autocomplete from "react-google-autocomplete";
import "./form.style.css";

const Form = props => {
  return (
    <div className="form-container">
      <div className="form-input justify-content-center">
        <Autocomplete
          style={{
            backgroundColor: "transparent",
            textAlign: "center",
            color: "white",
            border: "none",
            width: "100%",
            fontSize: "1.5rem",
            borderBottom: " 2px solid orange",
            borderRadius: 0
          }}
          onPlaceSelected={place => {
            props.loadweather(place);
            console.log(place);
          }}
        />
      </div>

      <div>{props.error ? <Error /> : ""}</div>
    </div>
  );
};

export default Form;
