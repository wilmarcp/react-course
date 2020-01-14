import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humedity, wind}) => (
    <div className="weather-extra-info">
        <span>{`${humedity} %`}</span> &nbsp;
        <span>{`${wind}`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humedity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;