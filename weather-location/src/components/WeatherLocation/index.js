import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Location from './Location'
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import './styles.css';


class WeatherLocation extends Component {

    constructor(props) {
        // API Key: 4098222b3759ea5db70e583766dc6e01
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        }
        console.log("In construction");
    }


    componentDidMount(){ 
        console.log("In mount");
        //Normalmente para hacer peticiones al servidor
        this.handle();

    }

    componentDidUpdate(prevProps, prevState){
        console.log("In update");
    }
    

    handle = () => {
        console.log(this.state.city);
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolver => {
            return resolver.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
            console.log(data);
        });
    }

    render() {
        console.log("In render");
        const {city, data} = this.state;
        const {onWeatherLocationClick} = this.props;
        return (
            <div className="weather-location" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress/>
                }
            </div>
         );
    }
    
}

export default WeatherLocation;