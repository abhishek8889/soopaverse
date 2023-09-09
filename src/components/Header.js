import React from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
function Header() {
    return (
        <>

            <div className='header'>
                <div className='container-fluid'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="logo">
                            <a className="navbar-brand" href="#">
                                <img src="images/logo.png" alt="img" />
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Play</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About us</a>
                                </li>
                            </ul>
                            <div className="icon-box">
                                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fab fa-discord"></i></a>
                                <a href="#" className='book-img'> <img src='images/book_icon.png' /> </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header