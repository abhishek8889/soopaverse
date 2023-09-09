
import React from "react";
import DummyData from "./DummyData";

function TeamData() {
    return (
        <>
            <div className="our_team_sec">
                <div className="container-fluid">
                    <div className="vision_box">
                        <div className="vision_content">
                            <h2>Vision</h2>
                            <p>Our vision is to create a planet that is protected, empowered, and brighter for all. We strive to build a global community
                                that works together to make the world a better place, one small act of heroism at a time.</p>
                        </div>
                    </div>
                    <div className="team_wrapper">
                        <div className="team_text">
                            <h2>our team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nam tortor purus, dictum at vulputate at, varius ac elit. Maecenas lobortis </p>
                        </div>
                    </div>
                </div>
            </div>
            <DummyData />
        </>
    )
}
export default TeamData;