
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-box">
        <h1>Welcome to <span>BudgetWise</span></h1>
        <p>Manage your budget efficiently</p>
        <div className="button-group">
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
