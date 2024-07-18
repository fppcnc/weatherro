import React from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Map from "./components/Map";
import BackgroundImage from "./components/BackgroundImage";
import useWeather from "./hooks/useWeather";

const App = () => {
    const { weatherData, loading, error, fetchWeather, reset } = useWeather();

    return (
        <div className="App">
            <h1>Weatherro</h1>
            <Search fetchWeather={fetchWeather} reset={reset} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weatherData && (
                <>
                    <Weather data={weatherData} />
                    <Map lat={weatherData.coord.lat} lon={weatherData.coord.lon} />
                    {weatherData && <BackgroundImage description={weatherData.weather[0].description} />}
                </>
            )}
        </div>
    );
};

export default App;
