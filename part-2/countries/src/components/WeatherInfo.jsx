import { useState, useEffect } from "react";
import { getWeather } from "../services/weather";

const WeatherInfo = ({ lat, lon }) => {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		getWeather({ lat, lon }).then((data) => {
			setWeather(data);
		});
	}, [lat, lon]);

	return (
		<div>
			{weather ? (
				<>
					<h2>Weather</h2>
					<img
						src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
						alt={weather.weather[0].description}
					/>
					<p>Temperature: {weather.main.temp} °C</p>
					<p>Condition: {weather.weather[0].description}</p>
					<p>Wind: {weather.wind.speed} m/s</p>
				</>
			) : (
				<p>Loading weather data...</p>
			)}
		</div>
	);
};

export default WeatherInfo;
