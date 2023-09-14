
import React from "react";
import {Link} from "react-router-dom";
const DummyData = () => {
    const dummyData = [
        { id: 1, img: 'images/box1.png' ,name:'Soopa',twitter:'https://twitter.com/SoopaSOL',position:'Co-Founder'},
        { id: 2, img: 'images/box2.png' ,name:'Uncle-G',twitter:'https://twitter.com/Ghalib151',position:'Co-Founder'},
        { id: 3, img: 'images/box3.png' ,name:'Ivano Nardacchione',twitter:'https://twitter.com/INardacchione',position:'Artist'},
        { id: 4, img: 'images/box4.png' ,name:'Prashant Gautam',twitter:'',position:'Full-Stack Developer'},

    ];

    return (
        <div className="img_grid_wrapper">
            <div className="container">
                <div className="img_grid">
                    {
                        dummyData.map((item) => (
                            <div key={item.id}>
                                <img src={`${item.img}`}  atr={`${item.name}`} />
                                    <div className="imp-data">
                                        <Link to={`${item.twitter}`} className='nav-link'><h2>{item.name}</h2></Link>
                                        <Link to={`${item.twitter}`} className='nav-link'> <h2>{item.position}</h2></Link>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default DummyData