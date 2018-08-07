import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
  return (
    <nav>
      <button onClick={() => onRouteChange("signin")} className="signOutBtn">Sign Out</button>
    </nav>
  );
};

export default Navigation;