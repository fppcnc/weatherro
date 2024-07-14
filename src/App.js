import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Map from "./components/Map";
import axios from "axios";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        const openWeatherApiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric`;

        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(url);
            setWeatherData(response.data);
        } catch (e) {
            setError("Could not fetch weather data.");
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setWeatherData(null);
        setLoading(false);
        setError(null);
    };

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
                </>
            )}
        </div>
    );
};

export default App;
