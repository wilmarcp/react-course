import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/WeatherLocation/LocationList';

import PropTypes from 'prop-types';

class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.setState({
            city
        });
        
        this.props.setCity(city);
    }

    render() {
        return(
            <LocationList 
                cities={this.props.cities} 
                onSelectedLocation={this.handleSelectedLocation}>
          </LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
  });  

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);