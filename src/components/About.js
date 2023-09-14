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
                                <p>Soopaverse is a platform that enables users to become real-life heroes by doing good deeds, earning rewards, and customizing their hero characters</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="about-img">
                                <img src='images/about-box1.png' alt='img' />
                            </div>
                        </div>
                        <div className="mission-box">
                            <h2>mission</h2>
                            <p>To inspire and empower individuals to become real-life heroes in their communities by doing good deeds, spreading kindness, and making the world a better place</p>
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