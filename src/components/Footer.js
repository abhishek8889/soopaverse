import React from "react";

import './style.css';
import "./responsive.css";
import {Link} from "react-router-dom";

function Footer() {

    return (
        <>
            <div className="footer-sec">
                <div className="container-fluid">
                    <div className="footer-line">
                        <div className="footer-line-text">
                            <marquee width="100%" direction="left">The game is in under process, Coming Soon!  -  The game is in under process, Coming Soon!  -  The game is in under process, Coming Soon!  -  The game is in under process, Coming Soon!</marquee>
                        </div>
                    </div>

                    <div className="wrapper-data">
                        <div className="dot-img">
                            <img src='images/doot-img.png' alt='img' />

                        </div>
                        <div className="icon-box">
                                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                                <a href="#"><i className="fab fa-discord"></i></a>
                                <a href="#" className='book-img'> <img src='images/book_icon.png'/> </a>
                            </div>
                    </div>

                    <div className="bottom-footer">
                        <div className="footter-box">
                            <Link to="/term">Terms & Conditions</Link>
                        </div>
                        <div className="footter-box">
                            <Link to="/"> ©2023 SoopaverseLLC</Link>
                        </div>
                        <div className="footter-box">
                            <Link to="/about">About Us</Link>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Footer