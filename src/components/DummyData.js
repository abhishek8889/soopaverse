
import React from "react";

const DummyData = () => {
    const dummyData = [
        { id: 1, img: <img src='images/box1.png' alt='img' /> },
        { id: 2, img: <img src='images/box2.png' alt='img' /> },
        { id: 3, img: <img src='images/box3.png' alt='img' /> },
        { id: 4, img: <img src='images/box4.png' alt='img' /> },

    ];

    return (
        <div className="img_grid_wrapper">
            <div className="container">
                <div className="img_grid">
                    {
                        dummyData.map((item) => (
                            <div key={item.id}>{item.img}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default DummyData