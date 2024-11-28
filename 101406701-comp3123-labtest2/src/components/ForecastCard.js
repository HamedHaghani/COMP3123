import React from "react";

const ForecastCard = ({ forecast }) => {
    return (
        <div className="forecast-card">
            <h3>{forecast.day}</h3>
            <img
                src={`http://openweathermap.org/img/wn/${forecast.icon}.png`}
                alt="Forecast Icon"
            />
            <p>{forecast.temp}°C</p>
            <p>{forecast.description}</p>
        </div>
    );
};

export default ForecastCard;
