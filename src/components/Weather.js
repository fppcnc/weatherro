import React from 'react';
import useWeatherData from '../hooks/useWeatherData';

const Weather = ({ data }) => {
    const { description, iconUrl, temp, temp_min, temp_max, feels_like, degreeSymbol } = useWeatherData(data);

    return (
        <div className="weather-info">
            <h2>Weather Information for {data.name}, {data.sys['country']}</h2>
            <img src={iconUrl} alt={description} />
            <p>{description}</p>
            <p>Temperature: {temp} {degreeSymbol}</p>
            <p>Temperature Minimum: {temp_min} {degreeSymbol}</p>
            <p>Temperature Maximum: {temp_max} {degreeSymbol}</p>
            <p>Feels Like: {feels_like} {degreeSymbol}</p>
        </div>
    );
};

export default Weather;
