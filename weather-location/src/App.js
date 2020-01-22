import React, {Component} from 'react';
import './App.css';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/WeatherLocation/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Mexico,mx',
  'Washington,us'
];

class App extends Component {

  constructor () {
    super();
    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
    this.setState({
      city
    });
  }

  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
              cities={cities} 
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="details">
                {
                  city &&
                  <ForecastExtended city={this.state.city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
