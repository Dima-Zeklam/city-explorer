import React from 'react';
import { Card } from 'react-bootstrap';

class Movie extends React.Component {

  render() {
    return (
      <div>
        {

          this.props.movieData.map((ele, idx) => {
            if (ele !== null) {
              // let poster = '';
              // if (ele.poster_path !== null) {
              //   poster = `https://image.tmdb.org/t/p/w500${ele.poster_path}`;
              // }
              // else {
              //   poster = 'https://image.tmdb.org/t/p/w500';
              // }
              return (
                <Card key={idx}>
                  <Card.Body>
                    <Card.Text> title:{ele.title}</Card.Text>
                    {/* <Card.Text> <img src={poster} /> </Card.Text> */}
                    <Card.Text>released_on: {ele.released_on}</Card.Text>
                    <Card.Text>overview: {ele.overview}</Card.Text>
                    <Card.Text>average_votes: {ele.average_votes}</Card.Text>
                    <Card.Text>popularity: {ele.popularity}</Card.Text>

                  </Card.Body>
                </Card>
              );
            }
          })}

      </div>
    );
  }
}

export default Movie;

