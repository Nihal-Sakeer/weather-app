import React from "react";
import "./App.css";
import cloud from "./icons/cloud.svg";

const WeatherComponent = () => {
  return (
    <section class="weather-part">
      <img src={cloud} alt="Weather Icon" />
      <div class="temp">
        <span class="num">13</span>
        <span class="deg">°</span>C
      </div>
      <div class="weather">broken clouds</div>
      <div class="location">
        <i class="bx bx-map"></i>
        <span>kerala, india</span>
      </div>
      <div class="bottom-details">
        <div class="column feels">
          <i class="bx bxs-thermometer"></i>
          <div class="details">
            <div class="temp">
              <span class="num-2">17</span>
              <span class="deg">°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div class="column humidity">
          <i class="bx bxs-droplet-half"></i>
          <div class="details">
            <span>84%</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherComponent;
