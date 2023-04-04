import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const apiKey = "7554d12a44a56751a9db5fab1a7736f2";

const CityComponent = ({ setCurrentWeather }) => {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getWeatherByCity();
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByCoords(latitude, longitude);
    });
  };

  const getWeatherByCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWeatherByCoords = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="input-part">
      <p className="info-txt"></p>
      <div className="content">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          onKeyPress={handleKeyPress}
        />
        <div className="separator"></div>
        <button onClick={getCurrentLocation}>Get Device Location</button>
      </div>
    </section>
  );
};

export default CityComponent;
