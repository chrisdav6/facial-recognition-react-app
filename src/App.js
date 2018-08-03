import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLink/ImageLinkForm';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <header>
            <Logo />
            <Navigation />
          </header>
          <Rank />
          <ImageLinkForm />
          {/*
          <FaceRecognition />*/}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
