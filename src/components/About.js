import React from "react";
import Coming from "./Coming";
import './style.css';
import TeamData from "./TeamData";
function About() {

    return (
        <>
            <div className="about-sec">
                <div className="container">
                    <div className="row custom-row">
                        <div className="col-lg-7 col-md-12">
                            <div className="about-text">
                                <h1>about us</h1>
                                <p>At Soopaverse, we believe in the power of individual, everyday heroes to
                                    change our world for the better. Through blockchain technology, we’re fostering a community and encouraging people to band together to solve real-world challenges. Join our quest to protect the planet, empower others, and build a brighter future for all.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="about-img">
                                <img src='images/about-box1.png' alt='img' />
                            </div>
                        </div>
                        <div className="mission-box">
                            <h2>mission</h2>
                            <p>Our mission is to empower a community of everyday heroes to make a positive impact on the world. We accomplish this through blockchain technology,
                                which allows us to collaborate and solve real-world challenges together.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hand-img">
                <img src='images/hand-img.png' alt='img' />
            </div>
            <TeamData />
            <Coming/>
        </>
    )
}
export default About;