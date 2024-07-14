import React from 'react';
import useWeatherData from '../hooks/useWeatherData';

const Weather = ({ data }) => {
    const { description, iconUrl, temp, temp_min, temp_max, feels_like, degreeSymbol } = useWeatherData(data);

    return (
        <div className="weather-info">
            <h2>Weather Information for {data.name}, {data.sys['country']}</h2>
            <img src={iconUrl} alt={description} />
            <p>{description}</p>
            <p>Temperature: {Math.round(temp)} {degreeSymbol}</p>
            <p>Temperature Minimum: {Math.round(temp_min)} {degreeSymbol}</p>
            <p>Temperature Maximum: {Math.round(temp_max)} {degreeSymbol}</p>
            <p>Feels Like: {Math.round(feels_like)} {degreeSymbol}</p>
        </div>
    );
};

export default Weather;
