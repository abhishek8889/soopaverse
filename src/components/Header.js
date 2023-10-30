import React from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/_logo.png"
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="logo">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="img" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">Play</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/about"} className="nav-link">About us</Link>
                </li>
              </ul>
              <div className="icon-box">
                <Link to="https://twitter.com/soopaverse">
                  <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link to="https://discord.gg/soopaverse">
                  <i className="fab fa-discord"></i>
                </Link>
                <Link to="https://soopaverse.gitbook.io/soopaverse/">
                  <img src="images/book_icon.png"  alt="book-icon"/>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
