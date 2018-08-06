import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLink/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Footer from './components/footer/Footer';
import './App.css';

const app = new Clarifai.App({
  apiKey: '7232e9906a9c4b0a829cbd5c0765bbd7'
});

const particlesOptions =  {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      } 
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
      function (response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      function (err) {
        // there was an error
      }
    );
  };

  render() {
    return (
      <div className="app">
        <Particles className="particles" params={particlesOptions}/>
        <div className="container">
          <header>
            <Logo />
            <Navigation />
          </header>
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition imageUrl={this.state.imageUrl}/>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
