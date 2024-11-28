import React from "react";

const WeatherCard = ({ weather }) => {
    const tempCelsius = Math.round(weather.main.temp - 273.15);
    const feelsLikeCelsius = Math.round(weather.main.feels_like - 273.15);

    return (
        <div className="main-weather">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <h3>{tempCelsius}°C</h3>
            <p>{weather.weather[0].description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
            />
            <p>Feels like: {feelsLikeCelsius}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherCard;
