import React from "react";
import "./Login.css";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = ({ count, setCount }) => {
  if (count === 5) {
    throw new Error("HAHAHA! YOU STEPPED ON A TIME BOMB! 😂");
  }
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to view the latest movies" />
        <link rel="canonical" href="/login" />
      </Helmet>
      <div className="Login-container">
        <form action="" className="form-container">
          <h1 className="login-heading">Login to Cinemy</h1>
          <label className="email-label" htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />
          <label className="pswd-label" htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="psw"
            id="psw"
            placeholder="Enter Password"
            required
          />
          <Link to="/about" className="btn-submit" type="submit">
            LOGIN
          </Link>
          <button onClick={() => setCount(count + 1)} className="btn-error">
            ERROR BOMB 🧨 <br />
            <span className="count">{count}</span>
          </button>
        </form>
        <Outlet />
      </div>
    </>
  );
};

export default Login;
