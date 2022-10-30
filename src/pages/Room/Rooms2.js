import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import "./Rooms2.scss"
import proImg1 from "../../assets/images/products/1.jpg"
import proImg2 from "../../assets/images/products/2.jpg"
import proImg3 from "../../assets/images/products/3.jpg"
import proImg4 from "../../assets/images/products/4.jpg"
import proImg5 from "../../assets/images/products/5.jpg"
import proImg6 from "../../assets/images/products/6.jpg"
import AllOutIcon from '@mui/icons-material/AllOut';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Bathtub from '@mui/icons-material/Bathtub'

const Rooms2 = () => {
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
            proImg: proImg2,
            id: 2,
            title: "Luxery Twin Room",
            sqm: 70,
            bedroom: 2,
            bathroom: 1,
            price: "250",
        },
        {
            proImg: proImg3,
            id: 3,
            title: "Single Contrast Room",
            sqm: 82,
            bedroom: 2,
            bathroom: 1,
            price: "230",
        },
        {
            proImg: proImg4,
            id: 4,
            title: "Queen Room Balcony",
            sqm: 45,
            bedroom: 2,
            bathroom: 1,
            price: "280",
        },
        {
            proImg: proImg5,
            id: 5,
            title: "Apartment Balcony",
            sqm: 55,
            bedroom: 2,
            bathroom: 1,
            price: "260",
        },
        {
            proImg: proImg6,
            id: 6,
            title: "Deluxe Contrast Room",
            sqm: 85,
            bedroom: 2,
            bathroom: 1,
            price: "200",
        }
    ];

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
};

export default connect(null)(Rooms2);