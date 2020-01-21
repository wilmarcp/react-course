
const urlbase="http://api.openweathermap.org/data/2.5/weather?q=";
const appid="f99bbd9e4959b513e9bd0d7f7356b38d";
const units="metric";

const getUrlWeatherByCity = city => {
    return  `${urlbase}${city}&appid=${appid}&units=${units}`;
}

export default getUrlWeatherByCity;