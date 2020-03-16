import React from "react";
import "./error.style.css";

const error = () => {
  return (
    <div className="error">
      <div className="alert alert-danger justify-content-center" role="alert">
        Please Enter a valid City and Country...!
      </div>
    </div>
  );
};

export default error;
