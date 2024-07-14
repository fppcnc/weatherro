import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import useTooltip from '../hooks/useTooltip';
import './Search.css';

const Search = ({ fetchWeather, reset }) => {
    const [city, setCity] = useState('');
    const { tooltipStyle, handleMouseEnter, handleMouseMove, handleMouseLeave } = useTooltip();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            fetchWeather(city);
        }
    };

    const handleReset = () => {
        setCity('');
        reset();
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter city"
                    />
                    <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="info-icon"
                        onMouseEnter={handleMouseEnter}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                    <div className="tooltip" style={tooltipStyle}>
                        To make it more precise write the city's name, comma, 2-letter country code (ISO3166).
                        You will get all proper cities in the chosen country.
                        The order is important - the first is city name then comma then country. <br />
                        Example - London, GB or New York, US.
                    </div>
                </div>
                <button type="submit">Search</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};

export default Search;
