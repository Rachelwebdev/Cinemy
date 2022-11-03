import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="right-side">
          <h1 className="heading">
            Take <span>your</span> watching experience to the
            <span className="span-next">Next Level</span>
          </h1>
          <Link to="/login" className="login-btn">
            Get Started
            <span className="icon-arrow">
              <BsFillArrowRightSquareFill />
            </span>
          </Link>
        </div>
        <img className="left-image" src="./hero-image.jpg" alt="movie" />
      </div>
    </>
  );
}

export default Home;
