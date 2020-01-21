import React from 'react';
import WeatherLocation from '.';
import PropTypes from 'prop-types';

const handlerWeatherLocationClick = (city, onSelectedLocation) => {
    console.log(`handlerWeatherLocationClick ${city}`);
    onSelectedLocation(city);
}

const LocationList = ({cities, onSelectedLocation}) => {
    const strToComponent = cities => {
        return cities.map(city => <WeatherLocation key={city} city={city} onWeatherLocationClick={() => handlerWeatherLocationClick(city, onSelectedLocation)}/>)
    }
    return (<div>
       {strToComponent(cities)}
    </div>)
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;