import {SUN} from '../constants/weather';

const getWeatherState = weatherState => {
    return SUN;
}

const transformWeather = weather_data => {
    const {temp, humidity} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data);

    const data = {
        humedity: humidity,
        temperature: temp,
        wind: `${speed} m/s`,
        weatherState,
    }

    return data;
}

export default transformWeather;