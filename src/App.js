import "./App.css";
import WeatherComponent from "./WeatherComponent";
import CityComponent from "./CityComponent";

function App() {
  return (
    <div class="wrapper">
      <header>
        <i class="bx bx-arrow-back"></i>Weather App
      </header>
      <CityComponent />
    </div>
  );
}

export default App;
