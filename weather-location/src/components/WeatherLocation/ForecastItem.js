import React, {Component} from 'react';
import WeatherData from './WeatherData';


class ForecastItem extends Component {

    render() {
        return (
            <div>
                <div>{this.props.weekDay} Hora: {this.props.hour}</div>
                <WeatherData data={this.props.data}></WeatherData>
            </div>
        );
    }
}

export default ForecastItem;