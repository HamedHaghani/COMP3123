import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./App.css";

const App = () => {
    const [city, setCity] = useState("Toronto");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        const API_KEY = "4634cc1daa4746facae86d8b2573649b"; // Your OpenWeatherMap API Key
        const fetchWeather = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
                );
                setWeather(response.data);

                // Mock forecast data for now
                setForecast([
                    { day: "Monday", temp: 25, description: "Clear Sky", icon: "01d" },
                    { day: "Tuesday", temp: 28, description: "Sunny", icon: "02d" },
                    { day: "Wednesday", temp: 27, description: "Partly Cloudy", icon: "03d" },
                    { day: "Thursday", temp: 24, description: "Rainy", icon: "09d" },
                    { day: "Friday", temp: 23, description: "Thunderstorm", icon: "11d" },
                ]);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeather();
    }, [city]);

    return (
        <div className="app-container">
            <div className="header">
                <h1>Weather App</h1>
                <p>Stay updated with current weather and forecasts</p>
                <SearchBar setCity={setCity} />
            </div>

            {weather && <WeatherCard weather={weather} />}

            <div className="forecast">
                {forecast.map((item, index) => (
                    <ForecastCard key={index} forecast={item} />
                ))}
            </div>
        </div>
    );
};

export default App;
