import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import useWindowDimensions from '../hooks/useWindowDimensions'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState("");
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    if(active) {
      setNavBarActiveClass("is-active");
    } else {
      setNavBarActiveClass("");
    }
  }, [active]);
  const toggleHamburger = () => {
    setActive(!active);
  };

  return (
    <nav
      className={`navbar ${windowWidth <= 1023 && active ? "is-black" : "is-transparent"}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
            title="Logo"
            style={{
              "&:hover, &:focus, &:focus-within, &:is-active": {
                background: "#0b0605 !important",
              },

            }}
          >
            <img src={logo} alt="Astronaut Apparel" style={{ width: "28px" }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            role="menuitem"
            tabIndex={0}
            onKeyPress={() => toggleHamburger()}
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass} ${windowWidth <= 1023 && active ? "is-black" : "is-transparent"}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              Surveys
            </Link>
            <Link className="navbar-item" to="/products">
              Shirts
            </Link>
            <Link className="navbar-item" to="/blog">
              Pants
            </Link>
            {/* <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link> */}
            {/* <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link> */}
          </div>
          {/* <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
