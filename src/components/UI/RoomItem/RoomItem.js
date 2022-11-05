import React from 'react';
import { Link } from 'react-router-dom'

import AllOutIcon from '@mui/icons-material/AllOut';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

import './RoomItem.scss'

function RoomItem({room}) {
    return (
        <div className="room-item">
            <div className="room-img">
                <img src={room.avatar} alt="" />
            </div>
            <div className="room-content">
                <h2><Link
                    // onClick={ClickHandler}
                    to={`/room-single/${room.id}`}
                    style={{ color: "#303443" }}
                    onMouseOver={(e) => { e.target.style.color = '#fc4c4c' }}
                    onMouseLeave={(e) => { e.target.style.color = '#303443' }}
                >{room.name}</Link></h2>
                <ul>
                    <li><AllOutIcon style={{ marginRight: "10px", fontSize: "20px" }} />{room.roomSize} sqm</li>
                    <li><BedIcon style={{ marginRight: "10px", fontSize: "20px" }} />{room.beds} Bed</li>
                    <li><BathtubIcon style={{ marginRight: "10px", fontSize: "20px" }} />{room.bathroom} Bathroom</li>
                </ul>
                <h3>${room.price} <span>/ Night</span></h3>
            </div>
        </div>
       
    );
}

export default RoomItem;