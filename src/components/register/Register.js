import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <div className="register">
      <form>
        <h1>Register</h1>
        <div className="formGroup">
          <input className=" formElement" type="text" id="fullName" name="fullName" placeholder="Full Name"/>
        </div>
        <div className="formGroup">
          <input className=" formElement" type="text" id="username" name="username" placeholder="Username"/>
        </div>
        <div className="formGroup">
          <input className=" formElement" type="password" id="password" name="password" placeholder="Password"/>
        </div>
        <button className="registerBtn" onClick={() => onRouteChange("home")}>Register</button>
        <button className="allreadyUser" onClick={() => onRouteChange("signin")}>Already a user, Sign In</button>
      </form>
    </div>
  );
};

export default Register;