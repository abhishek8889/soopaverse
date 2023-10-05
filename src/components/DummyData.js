
import React from "react";
import {Link} from "react-router-dom";
const DummyData = () => {
    const dummyData = [
        { id: 1, img: 'images/IMG_0455.jpeg' ,name:'Soopa',twitter:'https://twitter.com/SoopaSOL',position:'Co-Founder'},
        { id: 2, img: 'images/IMG_0458.jpeg' ,name:'Uncle-G',twitter:'https://twitter.com/Ghalib151',position:'Co-Founder'},
        { id: 3, img: 'images/IMG_0461.jpeg' ,name:'Ivano Nardacchione',twitter:'https://twitter.com/INardacchione',position:'Artist'},
        { id: 4, img: 'images/IMG_0464.jpeg' ,name:'Prashant Gautam',twitter:'',position:'Full-Stack Developer'},

    ];
    const partnerships = [
        { id: 1, img: 'images/atlas_logo.png' ,name:'Atlas 3',link:'https://twitter.com/SoopaSOL'},
        { id: 2, img: 'images/asset_logo.jpeg' ,name:'Asset Dash',link:'https://twitter.com/Ghalib151'},
        // { id: 3, img: 'images/IMG_0461.jpeg' ,name:'Maggie Eden',link:'https://twitter.com/INardacchione'},
        // { id: 4, img: 'images/IMG_0464.jpeg' ,name:'Oceana',link:''},

    ];

    return (
        
        // <div className="img_grid_wrapper">
        //     <div className="container ">
        //         <div className="img_grid row">
        //             {
        //                 dummyData.map((item) => (
        //                     <div key={item.id}>
        //                         <img src={`${item.img}`}  atr={`${item.name}`} />
        //                             <div className="imp-data">
        //                                 <Link to={`${item.twitter}`} className='nav-link'><h2>{item.name}</h2></Link>
        //                                 <Link to={`${item.twitter}`} className='nav-link'> <h2>{item.position}</h2></Link>
        //                             </div>
        //                     </div>
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </div>
    <div>
        <div className=" img_grid_wrapper">
            <div className="container-fluid">
                <div className="img_row row">
                    {
                        dummyData.map((item) => (
                            <div className="col-md-3 col-lg-3 col-sm-6"  key={item.id}>
                                    <img src={`${item.img}`}  atr={`${item.name}`} />
                                        <div className="imp-data">
                                            <h2>{item.name}</h2>
                                        </div>
                                        <div className="imp-data">
                                            <h2>{item.position}</h2>
                                        </div>
                                        <div className="imp-data">
                                            <Link to={`${item.twitter}`} ><i className="fa-brands fa-x-twitter"></i></Link>
                                        </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
            <div className="our_team_sec container-fluid">
                <div className="team_wrapper">
                    <div className="team_text">
                        <h2>Partnerships</h2>
                    </div>
                </div>
                <div className="img_grid_wrapper">
                    <div className="container-fluid">
                        <div className="img_rows row">
                            {
                                partnerships.map((partner) => (
                                    <div className="col-md-3 col-lg-3 col-sm-6 my-1"  key={partner.id}>
                                            <img src={`${partner.img}`}  atr={`${partner.name}`} />
                                                <div className="imp-data">
                                                    <h2>{partner.name}</h2>
                                                </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    )

}

export default DummyData