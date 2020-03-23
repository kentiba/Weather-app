import Autocomplete from "react-google-autocomplete";
import styled from "styled-components";

export const FormInput = styled.div`
  width: 35%;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    width: 60% !important;
  }
`;

export const AutocompleteComponent = styled(Autocomplete)`
  background-color: transparent;
  text-align: center;
  color: white;
  border: none;
  width: 100%;
  margin-top: 5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid orange;
  border-radius: 0;
  ::placeholder {
    color: rgba(248, 241, 241, 0.7);
  }
`;
