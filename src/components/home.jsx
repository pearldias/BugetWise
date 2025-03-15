import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import homeVideo from "../assets/homevideo.mp4"; // Import video

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="navbar-title">BudgetWise</h1>
      </nav>

      {/* Background Video Container */}
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Page Content */}
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
