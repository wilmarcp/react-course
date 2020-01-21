import React from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Mexico,mx',
  'Washington,us'
];

const handleSelectedLocation = city => {
  console.log("handleSelectedLocation");
}

function App() {
  return (
    <LocationList cities={cities} onSelectedLocation={handleSelectedLocation}></LocationList>
  );
}

export default App;
