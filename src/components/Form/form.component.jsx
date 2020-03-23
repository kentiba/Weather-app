import React, { useState } from "react";

import { AutocompleteComponent, FormInput } from "./form.styles";

const Form = props => {
  const [input, setInput] = useState("");

  return (
    <React.Fragment>
      <FormInput>
        <AutocompleteComponent
          onPlaceSelected={place => {
            setInput(place.formatted_address);
            props.loadweather(place);
          }}
          value={input || ""}
          onChange={e => setInput(e.target.value)}
          onFocus={e => setInput("")}
        />
      </FormInput>
    </React.Fragment>
  );
};

export default Form;
