import React from 'react';
import Tilt from 'react-tilt';
import frLogo from '../../img/fr-logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="Tilt" options={{ max: 50 }} style={{ height: 150, width: 150 }} > 
        <div className="Tilt-inner">
          <img src={frLogo} alt="FR Logo"/>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;