import React from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

const SignUp = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Create an Account</h2>
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <input type="password" placeholder="Confirm Password" className="auth-input" />
      <button className="auth-button">Sign up</button>
      <p className="auth-text">
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
};

export default SignUp;
