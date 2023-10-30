import React, { useState } from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../images/_logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
              onClick={handleMobileMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse${
                mobileMenuOpen ? " show" : ""
              }`} onClick={closeMobileMenu}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}>
                    Play
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/about"}
                    className="nav-link"
                    onClick={() => setMobileMenuOpen(false)}>
                    About us
                  </Link>
                </li>
              </ul>
              <div className="icon-box">
                <a href="https://twitter.com/soopaverse">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://discord.gg/soopaverse">
                  <i className="fab fa-discord"></i>
                </a>
                <a href="https://soopaverse.gitbook.io/soopaverse/">
                  <img src="images/book_icon.png" alt="book-icon" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;