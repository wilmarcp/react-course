import transformForecast from './../services/transformForecast';
import getUrlForecastByCity from './../services/getUrlForecastByCity';

export const SET_CITY = "SET_CITY";
export const setCity = payload => ({type: SET_CITY, payload});

export const fetchForecast = payload => {
    return dispatch => {
        fetch(getUrlForecastByCity(this.props.city)).then(
            data => data.json()
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
                console.log(forecastData);
            }
        );
    }
}