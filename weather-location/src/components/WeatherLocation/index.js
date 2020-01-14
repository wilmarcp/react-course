import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Location from './Location'
import WeatherData from './WeatherData';
import trasnsformWeather from './../../services/transformWeather';
import './styles.css';


class WeatherLocation extends Component {

    constructor() {
        // API Key: 4098222b3759ea5db70e583766dc6e01
        super();
        this.state = {
            city: "buenos aires",
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
        console.log("Click");
        const api_weather = 'http://api.openweathermap.org/data/2.5/weather?q=Buenos Aires,ar&appid=f99bbd9e4959b513e9bd0d7f7356b38d&units=metric';
        fetch(api_weather).then(resolver => {
            return resolver.json();
        }).then(data => {
            const newWeather = trasnsformWeather(data);
            this.setState({
                data: newWeather
            });
            console.log(data);
        });
    }

    render() {
        console.log("In render");
        const {city, data} = this.state;
        return (
            <div className="weather-location">
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