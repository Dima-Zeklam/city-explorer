import React from 'react';
import Movie from './Movie';
// import { Card } from 'react-bootstrap';

class Movies extends React.Component {

  render() {
    return (
      <>

        <Movie movieData={this.props.movieData} />


      </>
    );
  }
}

export default Movies;

