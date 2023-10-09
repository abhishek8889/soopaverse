import React from "react";
import './style.css';
import TeamData from "./TeamData";

function About() {

    return (
        <>
            <div className="about-sec">

                <div className="about_inner">

                    <h3>BE A HERO AND MAKE  A DIFFERENCE</h3>
                    {/* <div className="container-fluid"> */}
                    {/* <div className="row custom-row"> */}
                    {/* <div className="hand-img">
                            <img src='images/earth_back.png' alt='img' />
                          
                        </div> */}

                    {/* <div className="col-lg-7 col-md-12">
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
                        </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
            <div className="hand-img">
                {/* <img src='images/mission_vissionstatue2.png' alt='img' /> */}
                <div className="white_box">
                    <div className="white_data create_new">
                        <div className="custom_data">
                            <h4>Mission</h4>
                            <p>Our mission is to create a global network of superheroes dedicated to spreading kindness and making a positive impact on the world. We aim to empower individuals to become real-life heroes by performing acts of kindness, earning rewards, and embracing their unique hero personas.</p>

                        </div>
                    </div>
                    <div className="white_data">
                        <div className="custom_data">
                            <h4>Vision

                            </h4>
                            <p>Our vision is to build a community-driven platform where individuals can come together to make a difference in the lives of others. Through our platform, we strive to inspire a culture of compassion, collaboration, and personal growth, where every person has the opportunity to unleash their inner superhero and create a brighter future for all.
                                
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <TeamData />
            {/* <Coming/> */}
        </>
    )
}
export default About;