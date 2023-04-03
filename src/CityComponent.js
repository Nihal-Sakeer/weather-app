import "./App.css";

const CityComponent = () => {
  return (
    <section class="input-part">
      <p class="info-txt"></p>
      <div class="content">
        <input
          type="text"
          spellcheck="false"
          placeholder="Enter city name"
          required
        />
        <div class="separator"></div>
        <button>Get Device Location</button>
      </div>
    </section>
  );
};

export default CityComponent;
