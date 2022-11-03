import React from "react";
import "./Movies.css";
import { Link, Outlet } from "react-router-dom";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";

const Movies = () => {
  return (
    <div>
      <div className="button-container">MOVIES PLAYLIST SHOULD BE HERE</div>
      <Outlet />
    </div>
  );
};

export default Movies;
