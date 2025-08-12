import axios from "axios";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = ({ lat, lon }) => {
    const request = axios.get(
        `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    return request.then((response) => response.data);
};

export { getWeather };