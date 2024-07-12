import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import axios from "axios";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        const apiKey = "ea9db42196c3888afde15c54def98c4c";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

        try {
            setLoading(true);
            setError(null);
            console.log("Fetching weather for" + {city});
            const response = await axios.get(url);
            console.log("Weather data received:", response.data);
            setWeatherData(response.data);
        } catch (e) {
            console.error("Error fetching weather data:", e);
            setError("Could not fetch weather data. ErrorMessageId: " + e.messageId)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <Search fetchWeather={fetchWeather} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weatherData && <Weather data={weatherData} />}
        </div>
    );
};

export default App;