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
                            <marquee width="100%" direction="left">The game is in under development, Coming Soon!  -  The game is in under development, Coming Soon!  -  The game is in under development, Coming Soon!  -  The game is in under development, Coming Soon!</marquee>
                        </div>
                    </div>

                    <div className="wrapper-data">
                        <div className="dot-img">
                            <img src='images/doot-img.png' alt='img' />

                        </div>
                        <div className="icon-box">
                                <Link to="https://twitter.com/soopaverse" ><i className="fa-brands fa-x-twitter"></i></Link>
                                <Link to="https://discord.gg/soopaverse" ><i className="fab fa-discord"></i></Link>
                                <Link to="https://soopaverse.gitbook.io/soopaverse/" ><img src='images/book_icon.png' /></Link>
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