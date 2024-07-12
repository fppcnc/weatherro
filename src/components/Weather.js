import React from 'react';

const Weather = ({ data }) => {
    const { description, icon } = data.weather[0];
    const { temp, temp_min, temp_max, feels_like } = data.main;
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const degreeSymbol = '\u00B0C';

    const renderData = (data) => {
        return Object.entries(data).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                return (
                    <div key={key}>
                        <strong>{key}:</strong>
                        <div style={{ paddingLeft: '20px' }}>
                            {renderData(value)}
                        </div>
                    </div>
                );
            }
            return (
                <div key={key}>
                    <strong>{key}:</strong> {value.toString()}
                </div>
            );
        });
    };

    return (
        <div className="weather-info">
            <h2>Weather Information for {data.name}, {data.sys['country']}</h2>
            <img src={iconUrl} alt={description} />
            <p>{description}</p>
            <p>Temperature: {Math.round(temp)} {degreeSymbol}</p>
            <p>Temperature Minimum: {Math.round(temp_min)} {degreeSymbol}</p>
            <p>Temperature Maximum: {Math.round(temp_max)} {degreeSymbol}</p>
            <p>Feels Like: {Math.round(feels_like)} {degreeSymbol}</p>
            {renderData(data)}
        </div>
    );
};

export default Weather;
