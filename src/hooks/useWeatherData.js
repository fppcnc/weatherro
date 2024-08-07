const useWeatherData = (data) => {
    const { description, icon } = data.weather[0];
    const { temp, temp_min, temp_max, feels_like } = data.main;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const degreeSymbol = '\u00B0C';

    return {
        description,
        iconUrl,
        temp: Math.round(temp),
        temp_min: Math.round(temp_min),
        temp_max: Math.round(temp_max),
        feels_like: Math.round(feels_like),
        degreeSymbol,
    };
};

export default useWeatherData;
