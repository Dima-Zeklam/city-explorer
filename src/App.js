import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CityData: {},
      cityLoc: '',
      mapData: '',
      errorHandl: false,
      weather: {},
      // weatherData:[],
      show: false
    };
  }
  getLocation = async (e) => {
    console.log('work');
    e.preventDefault();

    try {


      await this.setState({
        cityLoc: e.target.input.value
      });
      let locationUrl = `${process.env.REACT_APP_SERVER_LINK}/weather?city=${this.state.cityLoc}`;
      let Data = await axios.get(locationUrl);
      console.log(Data.data);
      // let newArr = this.state.CityData.map((ele)=>{
      //   return < p description ={ele.description}/>;
      // });
      await this.setState({
        CityData: Data.data,
        // weatherData:newArr,
        show: true,
      });

      console.log(this.state.CityData);
    } catch (error) {
      await this.setState({
        show: false,
        errorHandl: true
      });
    }

    let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.CityData.lat},${this.state.CityData.lon}&zoom=16&size=480x480&markers=icon:large-red-cutout|${this.state.CityData.lat},${this.state.CityData.lon}&markers=icon:large-red-cutout|${this.state.CityData.lat},${this.state.CityData.lon}&path=fillcolor:%23add8e6|weight:1|color:blue|${this.state.CityData.lat},${this.state.CityData.lon}|${this.state.CityData.lat},${this.state.CityData.lon}${this.state.CityData.lat},${this.state.CityData.lon}|${this.state.CityData.lat},${this.state.CityData.lon}|${this.state.CityData.lat},${this.state.CityData.lon}`;

    this.setState({
      mapData: mapUrl,

    });

  }
  close = () => {
    this.setState({
      errorHandl: false
    });
  }
  render() {
    return (

      <>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ textAlign: 'center', marginTop: '30px' }}>City exolorer</h2>
          {/* <form onSubmit={this.getLocation}>
          <label htmlFor='input' >type the location</label>
          <input type='text' name='input' />
          <button>submit</button>
        </form> */}
          <Form onSubmit={this.getLocation}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
              <Form.Label style={{ size: '25px', fontWeight: 'bold', padding: '30px' }}>Type the location</Form.Label>
              <Form.Control type="text" placeholder="amman" name='input' style={{ position: 'relative', left: '35%', width: '30%' }} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Explore!
            </Button>
          </Form>
          {
            this.state.show &&
            <p style={{ size: '25px', fontWeight: 'bold', padding: '30px' }}>{this.state.cityLoc} Lat:{this.state.CityData.lat} / Lon:{this.state.CityData.lon}
            </p>

          }
          {this.state.show &&
            <img src={this.state.mapData} />
          }
          {
            this.state.errorHandl &&


            <div class="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Error! try amman , paris or seattle </strong>
              <button onClick={this.close} type="button" style={{ marginLeft: '20px', fontWeight: 'bold' }} data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

          }


        </div>
      </>
    );

  }
}

export default App;
