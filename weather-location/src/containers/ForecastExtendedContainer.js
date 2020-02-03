import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {

    render() {
        return(
            this.props.city ? <ForecastExtended city={this.props.city}></ForecastExtended> : <div></div>
         );
    }
}

const mapStateToProps = state => ({
    city: state.city
})

export default connect(mapStateToProps, null)(ForecastExtendedContainer);

