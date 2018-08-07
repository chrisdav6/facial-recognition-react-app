import React from 'react';
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="signIn">
      <form>
        <div className="formGroup">
          <label for="username">Username</label>
          <input className=" formElement" type="text" id="username" name="username"/>
        </div>
        <div className="formGroup">
          <label for="password">Password</label>
          <input className=" formElement" type="password" id="password" name="password"/>
        </div>
          <button className="signInBtn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;