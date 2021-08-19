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

// this.title = dataItem.title;
// this.overview = dataItem.overview;
// this.average_votes = dataItem.vote_average;
// this.total_votes = dataItem.vote_count;
// this.image_url = `https://image.tmdb.org/t/p/w500${dataItem.poster_path}`;
// this.popularity = dataItem.popularity;
// this.released_on = dataItem.release_date;
