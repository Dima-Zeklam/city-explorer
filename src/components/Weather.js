import React from 'react';
// import { Card } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {

  render() {
    // console.log('Weather data',this.props.weatherData);
    return (
      <>
        <WeatherDay weatherData={this.props.weatherData} />
      </>

    );
  }

}

export default Weather;

