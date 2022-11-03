import React from "react";
import "./About.css";
import { Link, Outlet } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-main-container">
      <h1 className="intro-heading">
        GET TO KNOW ALL TRENDING MOVIES ON CINEMY 🍿
      </h1>
      <p className="sub-heading">WHAT WE ACTUALLY OFFER?</p>
      <div className="offer-container">
        <div className="first-offer">
          <p className="header-text">800+</p>
          <p className="description">Movies and TV Shows</p>
        </div>
        <div className="second-offer">
          <p className="header-text">16K+</p>
          <p className="description">Listed Episodes</p>
        </div>
        <div className="third-offer">
          <p className="header-text">HD</p>
          <p className="description">High Quality Images</p>
        </div>
        <div className="fourth-offer">
          <p className="header-text">Easy</p>
          <p className="description">Well Organized Movie Categorization</p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/about/movies" className="btn-movies" type="submit">
          MOVIES
          <span className="icon-arrow">
            <BsFillArrowRightSquareFill />
          </span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
