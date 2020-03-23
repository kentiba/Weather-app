import styled from "styled-components";
import sunnyImage from "./assets/sunny.jpg";
import clearImage from "./assets/clear.jpg";
import rainyImage from "./assets/rainy.jpg";
import cloudyImage from "./assets/cloudy.jpg";
import drizzleImage from "./assets/drizzle.jpg";
import snowyImage from "./assets/snowy.jpg";
import defaultImage from "./assets/default.jpg";
import thunderstormImage from "./assets/thunderstorm.jpg";

const renderBackgroundImage = props => {
  switch (true) {
    case props.id >= 200 && props.id < 232:
      return thunderstormImage;

    case props.id >= 300 && props.id <= 321:
      return drizzleImage;

    case props.id >= 500 && props.id <= 521:
      return rainyImage;

    case props.id >= 600 && props.id <= 622:
      return snowyImage;

    case props.id >= 701 && props.id <= 781:
      //atomosphere === sunny
      return sunnyImage;

    case props.id === 800:
      return clearImage;

    case props.id >= 801 && props.id <= 804:
      return cloudyImage;

    default:
      return defaultImage;
  }
};

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  text-align: center;
`;

export const Image = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(${renderBackgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  transition: background 0.2s linear;
  -webkit-transition: background 0.2s linear;
  z-index: -1;
  filter: brightness(60%);
`;
