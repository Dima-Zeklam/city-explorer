import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Card } from 'react-bootstrap';
import Weather from './Weather';
import Movie from './Movie';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CityData: {},
      cityLoc: '',
      mapData: '',
      errorHandl: false,
      lat: '',
      lon: '',
      weatherData: [],
      movieData: [],
      show: false
    };

  }

  // function to make eplore
  getLocation = async () => {
    // console.log('work');


    await this.setState({
      cityLoc: event.target.input.value
    });
    try {


      let locationUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.cityLoc}&format=json`;

      let LocationData = await axios.get(locationUrl);
      // console.log(LocationData);

      await this.setState({
        CityData: LocationData.data[0],
        lat: LocationData.data[0].lat,
        lon: LocationData.data[0].lon,
        show: true
      });


    } catch (error) {
      await this.setState({
        show: false,
        errorHandl: true
      });
    }
    console.log('WeatherData', this.state.weatherData);
    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.CityData.lat},${this.state.CityData.lon}&zoom=16&size=480x480&markers=icon:large-red-cutout|${this.state.CityData.lat},${this.state.CityData.lon}&markers=icon:large-red-cutout|${this.state.CityData.lat},${this.state.CityData.lon}&path=fillcolor:%23add8e6|weight:1|color:blue|${this.state.CityData.lat},${this.state.CityData.lon}|${this.state.CityData.lat},${this.state.CityData.lon}${this.state.CityData.lat},${this.state.CityData.lon}|${this.state.CityData.lat},${this.state.CityData.lon}|${this.state.CityData.lat},${this.state.CityData.lon}`;

    await this.setState({
      mapData: mapUrl,

    });

  }

  getWeather = async () => {


    //localhost:3002/weather?searchQuery=amman&lat=31.9515694&lon=35.9239625
    let weatherUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${this.state.cityLoc}&lat=${this.state.lat}&lon=${this.state.lon}`;
    try {
      let WeatherURLData = await axios.get(weatherUrl);
      console.log('WeatherURLData', WeatherURLData);


      await this.setState({
        weatherData: WeatherURLData.data,
        show: true,
        errorHandl: false
      });
      console.log('weather data from app', this.state.weatherData);
    } catch (error) {
      await this.setState({
        show: false,
        errorHandl: true
      });

    }

  }

  getMovie = async () => {
    console.log('work');

    // await this.setState({
    //   cityLoc: e.target.input.value
    // });

    //http://localhost:3002/movie?city=amman
    let movieUrl = `${process.env.REACT_APP_SERVER_LINK}/movie?city=${this.state.cityLoc}`;
    try {
      let MovieURLData = await axios.get(movieUrl);

      await this.setState({
        movieData: MovieURLData.data,
        show: true,
        errorHandl: false
      });

      console.log('movieData in App:', this.state.movieData);

    } catch (error) {
      await this.setState({
        show: false,
        errorHandl: true
      });

    }
  }
  getData = async (event) => {
    event.preventDefault();
    await this.getLocation();
    await this.getWeather();
    await this.getMovie();
  }
  close = () => {
    this.setState({
      errorHandl: false
    });
  }


  render() {

    return (
      <div>
        <>

          <h2 style={{ textAlign: 'center', marginTop: '30px' }}>City explorer</h2>
          <Form onSubmit={this.getData} style={{ textAlign: 'center', marginTop: '30px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label style={{ size: '25px', fontWeight: 'bold', padding: '30px' }}>Type the location</Form.Label>
              <Form.Control type="text" placeholder="tokyo" name='input' style={{ position: 'relative', left: '35%', width: '30%' }} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>

          {

            this.state.show &&
            <div> <p style={{ size: '25px', fontWeight: 'bold', padding: '30px', textAlign: 'center' }}>{this.state.cityLoc} Lat:{this.state.CityData.lat} / Lon:{this.state.CityData.lon}
            </p></div>

          }
          {this.state.show &&
            <div> <img src={this.state.mapData} style={{ textAlign: 'center' }} /></div>

          }
          {
            this.state.show &&
            <Weather show={this.state.show} weatherData={this.state.weatherData} />
          }
          {
            this.state.show &&
            <Movie show={this.state.show} movieData={this.state.movieData} />



          }
          {
            this.state.errorHandl &&


            <div class="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Error!something doesn't work out </strong>
              <button onClick={this.close} type="button" style={{ marginLeft: '20px', fontWeight: 'bold' }} data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

          }





        </>
      </div>
    );

  }
}

export default App;
