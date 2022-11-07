import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import AllOutIcon from '@mui/icons-material/AllOut';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

import './RoomItem.scss'
import { cartActions } from 'features/cart/cartSlice';
import { toast } from 'react-toastify';


function RoomItem({room}) {
    const dispatch = useDispatch();
   
    const HanldeAddToCart = () => {
        dispatch(
            cartActions.addToCart({
                name: room.name,
                avatar: room.avatar,
                beds: room.beds,
                roomSize: room.roomSize,
                occupancy:room.occupancy,
                bathroom: room.bathroom,
                price: room.price,
                id: room.id,  
            })
        )

        toast.success("Room Added to Cart !");

    }


    return (
        <div className="room-item">
            <div className="room-img">
                <img src={room.avatar} alt="" />
            </div>
            <div className="room-content">
                <h2>
                    <NavLink
                        // onClick={ClickHandler}
                        to={`/room/${room.id}`}
                        // to={room.id}
                        style={{ color: "#303443" }}
                        onMouseOver={(e) => { e.target.style.color = '#fc4c4c' }}
                        onMouseLeave={(e) => { e.target.style.color = '#303443' }}
                    >
                        {room.name}
                    </NavLink>
                </h2>
                <ul>
                    <li><AllOutIcon style={{ marginRight: "10px", fontSize: "20px" }} />{room.roomSize} sqm</li>
                    <li><BedIcon style={{ marginRight: "10px", fontSize: "20px" }} />{room.beds} Bed</li>
                    <li><BathtubIcon style={{ marginRight: "10px", fontSize: "20px" }} />{room.bathroom} Bathroom</li>
                </ul>
                <h3>${room.price} <span>/ Night</span></h3>
                <button  onClick={HanldeAddToCart}>Add Cart</button>
            </div>
            
        </div>
       
    );
}

export default RoomItem;