import React from "react";
import "./App.css";
import cloud from "./icons/cloud.svg";

const WeatherComponent = ({ currentWeather }) => {
  if (!currentWeather) {
    return <div>Loading...</div>;
  }

  const { name, weather, main } = currentWeather;
  const { temp, feels_like, humidity } = main;
  const { icon, description } = weather[0];

  return (
    <section className="weather-part">
      <img src={cloud} alt="Weather Icon" />
      <div className="temp">
        <span className="num">{Math.round(main.temp - 273.15)}</span>
        <span className="deg">°</span>C
      </div>
      <div className="weather">broken clouds</div>
      <div className="location">
        <i className="bx bx-map"></i>
        <span>kerala, india</span>
      </div>
      <div className="bottom-details">
        <div className="column feels">
          <i className="bx bxs-thermometer"></i>
          <div className="details">
            <div className="temp-2">
              <span className="numb-2">{Math.round(feels_like - 273.15)}</span>
              <span className="deg">°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div className="column humidity">
          <i className="bx bxs-droplet-half"></i>
          <div className="details">
            <span>{humidity}%%</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherComponent;
