import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLink/ImageLinkForm';
import Footer from './components/footer/Footer';
import './App.css';

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
      input: ""
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log("Clicked!");
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
          <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
          {/*
          <FaceRecognition />*/}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
