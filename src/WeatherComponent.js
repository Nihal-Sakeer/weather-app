import React from "react";

const WeatherComponent = (props) => {
  const { city, country, temp, feelsLike, humidity, description, iconId } =
    props.data;

  const getWeatherIcon = (id) => {
    if (id === 800) {
      return "icons/clear.svg";
    } else if (id >= 200 && id <= 232) {
      return "icons/storm.svg";
    } else if (id >= 600 && id <= 622) {
      return "icons/snow.svg";
    } else if (id >= 701 && id <= 781) {
      return "icons/haze.svg";
    } else if (id >= 801 && id <= 804) {
      return "icons/cloud.svg";
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      return "icons/rain.svg";
    }
  };

  return (
    <div className="weather-part">
      <img src={getWeatherIcon(iconId)} alt="weather icon" />
      <div className="weather-info">
        <div className="temp">
          <span className="numb">{Math.floor(temp)}</span>
          <sup>&deg;C</sup>
        </div>
        <div className="description">{description}</div>
        <div className="location">{city + ", " + country}</div>
        <div className="feels-like">
          Feels Like: {Math.floor(feelsLike)}&deg;C
        </div>
        <div className="humidity">Humidity: {humidity}%</div>
      </div>
    </div>
  );
};

export default WeatherComponent;
