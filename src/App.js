import React from "react";
import Form from "./components/Form/form.component";
import Weather from "./components/Weather/weather.component";
import { WeatherIcons } from "./components/utils/utils.component";
import { AppContainer, Image } from "./App.styles";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// git project https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";

const Api_Key = "429736441cf3572838aa10530929f7cd";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: null,
    temp_min: null,
    description: "",
    error: false,
    notFoundError: false,
    weatherId: null
  };

  calCelsius = temp => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  };

  GetWeatherIcon = (icons, rangeId) => {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        //atomosphere === sunny
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  };

  getWeather = async e => {
    const city = e.address_components[0].long_name;
    const country =
      e.address_components.length > 3
        ? e.address_components[3].long_name
        : e.address_components[e.address_components.length - 1].long_name;
    if (country && city) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      );
      const { name, sys, weather, main } = await api_call.json();
      if (name !== undefined) {
        this.setState({
          city: `${name}, ${sys.country}`,
          country: sys.country,
          main: weather[0].main,
          celsius: this.calCelsius(main.temp),
          temp_max: this.calCelsius(main.temp_max),
          temp_min: this.calCelsius(main.temp_min),
          description: weather[0].description,
          error: false,
          notFoundError: false,
          weatherId: weather[0].id
        });
        this.GetWeatherIcon(WeatherIcons, weather[0].id);
      } else {
        this.setState({
          error: false,
          notFoundError: true
        });
      }
    } else {
      this.setState({ error: true, notFoundError: false });
    }
  };

  render() {
    const {
      error,
      city,
      icon,
      celsius,
      temp_max,
      temp_min,
      description,
      notFoundError,
      weatherId
    } = this.state;
    return (
      <AppContainer>
        <Image id={weatherId} />
        <Form loadweather={this.getWeather} error={error} />
        <Weather
          cityname={city}
          weatherIcon={icon}
          temp_celsius={celsius}
          temp_max={temp_max}
          temp_min={temp_min}
          description={description}
          error={notFoundError}
        />
      </AppContainer>
    );
  }
}

export default App;
