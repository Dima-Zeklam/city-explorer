import React from 'react';
import { Card } from 'react-bootstrap';

class WeatherDay extends React.Component {

  render() {
    // console.log('Weather data',this.props.weatherData);
    return (
      <div>
        {
          this.props.weatherData.map((ele, idx) => {
            return (
              <Card key={idx}>
                <Card.Body>
                  <Card.Text>date: {ele.date}</Card.Text>
                  <Card.Text>description: {ele.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })
        }
      </div>

    );
  }

}

export default WeatherDay;

