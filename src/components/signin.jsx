import React from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

const SignIn = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Let's Sign In</h2>
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <button className="auth-button">Sign In</button>
      <p className="auth-text">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default SignIn;
