import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = ({data:{temperature, wind, humedity, state}  }) => {
    return <div className="weather-data">
        <WeatherTemperature temperature={temperature} state={state}></WeatherTemperature>
        <WeatherExtraInfo humedity={humedity} wind={wind}></WeatherExtraInfo>
    </div>
};

export default WeatherData;