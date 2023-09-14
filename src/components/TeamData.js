
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
                            <p>To create a global community of heroes who work together to solve social and environmental challenges, creating a better world for future generations</p>
                        </div>
                    </div>
                    <div className="team_wrapper">
                        <div className="team_text">
                            <h2>our team</h2>
                            {/* <p> </p> */}
                        </div>
                    </div>
                </div>
            </div>
            <DummyData />
        </>
    )
}
export default TeamData;