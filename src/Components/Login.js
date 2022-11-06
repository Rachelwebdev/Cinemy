import React, { useContext } from "react";
import "./Login.css";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { UserContext } from "./UserContext";

const Login = ({ count, setCount }) => {
  if (count === 5) {
    throw new Error("HAHAHA! YOU STEPPED ON A TIME BOMB! 😂");
  }

  const { message, setMessage, setUser } = useContext(UserContext);
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {
    setUser(message);
  };
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
          <label className="name-label" htmlFor="name">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="First name ..."
            name="name"
            required
            onChange={handleChange}
            value={message}
          />
          <label className="pswd-label" htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            required
          />
          <Link
            to="/about"
            onClick={handleClick}
            className="btn-submit"
            type="submit"
          >
            LOGIN
          </Link>
          <button onClick={() => setCount(count + 1)} className="btn-error">
            ERROR BOMB 🧨 <br />
            <span className="count">{count}</span>
          </button>
          <Link to="/register" className="register-link">
            Register Here
          </Link>
        </form>
        <Outlet />
      </div>
    </>
  );
};

export default Login;
