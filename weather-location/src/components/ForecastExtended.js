import React, {Component} from 'react';
import './WeatherLocation/styles.css';
import ForecastItem from './WeatherLocation/ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import './../services/getUrlForecastByCity';
import transformForecast from './../services/transformForecast';
import getUrlForecastByCity from './../services/getUrlForecastByCity';

class ForecastExtended extends Component {

    constructor () {
        super();
        this.state = {
            forecastData : null
        }
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city) {
            this.setState({forecastData: null})
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
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

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecastDay => 
            <ForecastItem 
                key={`${forecastDay.weekDay}${forecastDay.hour}`}
                weekDay={forecastDay.weekDay}
                hour={forecastDay.hour} 
                data={forecastDay.data}>
             </ForecastItem>);
    }

    renderProgress(){
        return <div><CircularProgress/></div>
    }

    render() {
        const {forecastData} = this.state;
        const {city} = this.props;
        return (<div> 
            <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
            {forecastData ?
                this.renderForecastItemDays(forecastData):
                this.renderProgress()
            } 
        </div>);
    }
}

export default ForecastExtended;