import React from 'react';

const Weather = ({ data }) => {
    const { description, icon } = data.weather[0];
    const { temp, temp_min, temp_max, feels_like } = data.main;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const degreeSymbol = '\u00B0C';



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
