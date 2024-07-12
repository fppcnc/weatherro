import React, { useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Map from "./components/Map"
import axios from "axios";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        const openWeatherApiKey = "ea9db42196c3888afde15c54def98c4c";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + openWeatherApiKey + "&units=metric";

        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(url);
            setWeatherData(response.data);
        } catch (e) {
            setError("Could not fetch weather data. ErrorMessageId: ");
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Weatherro</h1>
            <Search fetchWeather={fetchWeather} />
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