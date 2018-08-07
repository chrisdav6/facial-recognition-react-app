import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <div className="register">
      <form>
        <div className="formGroup">
          <label htmlFor="fullName">Full Name</label>
          <input className=" formElement" type="text" id="fullName" name="fullName" />
        </div>
        <div className="formGroup">
          <label htmlFor="username">Username</label>
          <input className=" formElement" type="text" id="username" name="username"/>
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input className=" formElement" type="password" id="password" name="password"/>
        </div>
        <button className="registerBtn" onClick={() => onRouteChange("home")}>Register</button>
        <button className="allreadyUser" onClick={() => onRouteChange("signin")}>Already a user, Sign In</button>
      </form>
    </div>
  );
};

export default Register;