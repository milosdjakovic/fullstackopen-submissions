import axios from "axios";

const apiKey = '9a313ad62887537b128600430007b298';
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = ({ lat, lon }) => {
    const request = axios.get(
        `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    return request.then((response) => response.data);
};

export { getWeather };