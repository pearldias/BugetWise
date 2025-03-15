import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Save Money to Save Future</h1>
      <p className="home-subtitle">
        Manage your budget efficiently and plan your financial future wisely.
      </p>
      <div className="button-container">
        <Link to="/signin">
          <button className="button signin-button">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="button signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
