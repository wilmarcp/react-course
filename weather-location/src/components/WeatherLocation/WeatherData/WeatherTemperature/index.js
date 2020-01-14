import React from 'react';
import WeatherIcons from 'react-weathericons';

import './../../styles.css';
import {CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY} from '../../../../constants/weather';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
};

const getState = state => {
    const icon = icons[state];
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name="day-sunny" size="2x"/>;
}

const WeatherTemperature = ({temperature, state}) => (
    <div className="weather-temperature">
        {
            getState(state)
        }
        <WeatherIcons name="night-clear" size="2x"></WeatherIcons>
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperature-type">{`°C`}</span>
    </div>
);

export default WeatherTemperature;