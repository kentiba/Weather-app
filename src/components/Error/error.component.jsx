import React from "react";
import { ErrorComponent } from "./error.styles";

const error = () => {
  return (
    <ErrorComponent>
      <div className="alert alert-danger justify-content-center" role="alert">
        Please Enter a valid City and Country...!
      </div>
    </ErrorComponent>
  );
};

export default error;
