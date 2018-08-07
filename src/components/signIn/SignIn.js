import React from 'react';
import './SignIn.css';

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <div className="formGroup">
          <input className="formElement useFontAwesomeFamily" type="text" id="username" name="username" placeholder="Username"/>
        </div>
        <div className="formGroup">
          <input className="formElement useFontAwesomeFamily" type="password" id="password" name="password" placeholder="Password"/>
        </div>
        <button className="signInBtn" onClick={() => onRouteChange("home")}>Sign In</button>
        <button className="newUser" onClick={() => onRouteChange("register")}>Register New User</button>
      </form>
    </div>
  );
};

export default SignIn;