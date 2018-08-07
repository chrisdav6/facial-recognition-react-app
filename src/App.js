import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import SignIn from './components/signIn/SignIn';
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
      imageUrl: "",
      box: {},
      route: "signin"
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.querySelector("#inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row *height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  };

  render() {
    if(this.state.route !== "signin") {
      return (
        <div className="app">
          <Particles className="particles" params={particlesOptions} />
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
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="app">
          <Particles className="particles" params={particlesOptions} />
          <div className="container">
            <header>
              <Logo />
            </header>
            <SignIn />
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default App;
