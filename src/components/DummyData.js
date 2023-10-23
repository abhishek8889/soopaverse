
import React from "react";
import {Link} from "react-router-dom";
const DummyData = () => {
    const dummyData = [
        { id: 1, img: 'images/catnewbie.jpeg' ,name:'Soopa',twitter:'https://twitter.com/SoopaSOL',position:'Co-Founder'},
        { id: 2, img: 'images/fishnewbie.jpeg' ,name:'Uncle-G',twitter:'https://twitter.com/Ghalib151',position:'Co-Founder'},
        { id: 3, img: 'images/windnewbie.jpeg' ,name:'Ivano Nardacchione',twitter:'https://twitter.com/INardacchione',position:'Artist'},
        { id: 4, img: 'images/plantnewbie.jpeg' ,name:'Hello Moon',twitter:'https://twitter.com/HelloMoon',position:'Full-Stack Developer'},

    ];
    const partnerships = [
        { id: 1, img: 'images/logo1.png' ,name:'Atlas 3',link:''},
        { id: 2, img: 'images/logo2.png' ,name:'Asset Dash',link:''},
        { id: 3, img: 'images/moonLogo.png' ,name:'Hello Moon',link:' https://twitter.com/HelloMoon'},
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
                <div className="super_wrapper">
                    <div className="team_text">
                        <h2>Partnerships</h2>
                    </div>
                </div>
                <div className="img_grid_wrapper">
                    <div className="container-fluid">
                        <div className="img_rows row justify-content-md-center">
                            {
                                partnerships.map((partner) => (
                                    <div className="col-lg-3 col-md-6"  key={partner.id}>
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