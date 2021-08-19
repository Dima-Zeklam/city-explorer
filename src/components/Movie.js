import React from 'react';
import { Card } from 'react-bootstrap';

class Movie extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.movieData.map((ele, idx) => {
            return (
              <Card key={idx}>
                <Card.Body>
                  <Card.Text> <img src={ele.image_url} /> </Card.Text>
                  <Card.Text> title:{ele.title}</Card.Text>
                  <Card.Text>overview: {ele.overview}</Card.Text>
                  <Card.Text>average_votes: {ele.average_votes}</Card.Text>
                  <Card.Text>popularity: {ele.popularity}</Card.Text>
                  <Card.Text>released_on: {ele.released_on}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}

      </div>
    );
  }
}

export default Movie;

