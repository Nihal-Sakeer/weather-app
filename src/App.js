import React, { useState } from "react";
import CityComponent from "./CityComponent";
import WeatherComponent from "./WeatherComponent";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  return (
    <div>
      <CityComponent setCurrentWeather={setCurrentWeather} />
      <WeatherComponent currentWeather={currentWeather} />
    </div>
  );
};

export default App;
