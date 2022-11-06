import hamburgerMenuStyle from "./Nav.module.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import AuthContext from "./AuthContext";
import About from "./About";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };

  const { user } = useContext(UserContext);
  const ctx = useContext(AuthContext);
  return (
    <>
      {ctx.isLoggedIn && <About />}
      <header className={hamburgerMenuStyle.header}>
        <nav className={hamburgerMenuStyle.navbar}>
          <img
            className={hamburgerMenuStyle.navLogo}
            src="./cinemy-logo.jpg"
            alt="cinema logo"
          />

          <ul
            className={
              active
                ? `${hamburgerMenuStyle.navMenu} ${hamburgerMenuStyle.active}`
                : hamburgerMenuStyle.navMenu
            }
          >
            <li>
              <Link
                to="/"
                className={hamburgerMenuStyle.navItem}
                href="/home"
                onClick={handleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={hamburgerMenuStyle.navItem}
                href="/about"
                onClick={handleMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className={hamburgerMenuStyle.navItem}
                href="/login"
                onClick={handleMenu}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={hamburgerMenuStyle.navItem}
                href="/about"
                onClick={handleMenu}
              >
                {`Hello ${user} 👋`}
              </Link>
            </li>
          </ul>
          <div
            className={
              active
                ? `${hamburgerMenuStyle.hamburger} ${hamburgerMenuStyle.active}`
                : hamburgerMenuStyle.hamburger
            }
            onClick={handleMenu}
          >
            <span className={hamburgerMenuStyle.bar}></span>
            <span className={hamburgerMenuStyle.bar}></span>
            <span className={hamburgerMenuStyle.bar}></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
