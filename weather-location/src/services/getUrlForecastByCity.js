const urlbaseForecast="http://api.openweathermap.org/data/2.5/forecast?q=";
const appid="f99bbd9e4959b513e9bd0d7f7356b38d";

const getUrlForecastByCity = city => {
    return  `${urlbaseForecast}${city}&appid=${appid}`;
}

export default getUrlForecastByCity;