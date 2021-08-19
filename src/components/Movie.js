import React from 'react';
import { Card } from 'react-bootstrap';

class Movie extends React.Component {

  render() {
    return (
      <div>
        {

          this.props.movieData.map((ele, idx) => {
            if (ele.image_url === 'https://image.tmdb.org/t/p/w500null')
              ele.image_url = 'https://img.wallpapersafari.com/desktop/1680/1050/4/78/Rd4cND.jpg';
            return (
              <Card key={idx}>
                <Card.Img variant="top" src={ele.image_url} />
                <Card.Body>
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

