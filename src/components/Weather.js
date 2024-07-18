import React from 'react';
import useWeatherData from '../hooks/useWeatherData';
import "./Weather.css";

const Weather = ({data}) => {
    const {description, iconUrl, temp, temp_min, temp_max, feels_like, degreeSymbol} = useWeatherData(data);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className="weather-container">
            <div className="weather-info">
                <h2>Weather Information for {data.name}, {data.sys['country']}</h2>
                <div className="weather-info-content">
                    <div className="weather-info-text">
                        <p>Temperature: {Math.round(temp)} {degreeSymbol}</p>
                        <p>Temperature Minimum: {Math.round(temp_min)} {degreeSymbol}</p>
                        <p>Temperature Maximum: {Math.round(temp_max)} {degreeSymbol}</p>
                        <p>Feels Like: {Math.round(feels_like)} {degreeSymbol}</p>
                    </div>
                    <div className="img-container">
                        <img src={iconUrl} alt={description} />
                        <p>{capitalizeFirstLetter(description)}</p>
                    </div>
                </div>
                <div className="referral">
                    Weather data by <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a>
                </div>
            </div>
        </div>
    );
};

export default Weather;
