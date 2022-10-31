import React from 'react';
import proImg1 from '../../../../assets/images/img-1.jpg'
import './RoomParent.scss'
import { Link } from 'react-router-dom'
import AllOutIcon from '@mui/icons-material/AllOut';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Bathtub from '@mui/icons-material/Bathtub'
function RoomParent(props) {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const products = [
        {
            proImg: proImg1,
            id: 1,
            title: "Deluxe Contrast Room",
            sqm: 52,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        },
        {
            proImg: proImg1,
            id: 2,
            title: "Deluxe Contrast Room",
            sqm: 52,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        },
        {
            proImg: proImg1,
            id: 3,
            title: "Deluxe Contrast Room",
            sqm: 52,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        },
        {
            proImg: proImg1,
            id: 4,
            title: "Deluxe Contrast Room",
            sqm: 52,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        },
        {
            proImg: proImg1,
            id: 5,
            title: "Deluxe Contrast Room",
            sqm: 52,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        },
        {
            proImg: proImg1,
            id: 6,
            title: "Deluxe Contrast Room",
            sqm: 52,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        },
        {
            proImg: proImg1,
            id: 7,
            title: "Deluxe Contrast Room",
            sqm: 52,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        },

    
    ]
    return (
        <div className="room-area section-bg section-padding">
        <div className="container">
            <div className="room-wrap">
                <div className="row">
                    {products.length > 0 &&
                        products.slice(0, 6).map((product, pitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={pitem}>
                                <div className="room-item">
                                    <div className="room-img">
                                        <img src={product.proImg} alt="" />
                                    </div>
                                    <div className="room-content">
                                        <h2><Link
                                            onClick={ClickHandler}
                                            to={`/room-single/${product.id}`}
                                            style={{ color: "#303443" }}
                                            onMouseOver={(e) => { e.target.style.color = '#fc4c4c' }}
                                            onMouseLeave={(e) => { e.target.style.color = '#303443' }}
                                        >{product.title}</Link></h2>
                                        <ul>
                                            <li><AllOutIcon style={{ marginRight: "10px", fontSize: "20px" }} />{product.sqm} sqm</li>
                                            <li><BedIcon style={{ marginRight: "10px", fontSize: "20px" }} />{product.bedroom} Bed</li>
                                            <li><BathtubIcon style={{ marginRight: "10px", fontSize: "20px" }} />{product.bathroom} Bathroom</li>
                                        </ul>
                                        <h3>${product.price} <span>/ Night</span></h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </div>
);

}

export default RoomParent;