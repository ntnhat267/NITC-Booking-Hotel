import React from 'react';
import './RoomSingleItem.scss'
function RoomSingleItem({room}) {
    return (
        <div className='room-single-item' >
            <h2>Description</h2>
            <h3>{room.description}</h3>
            <h4>{room.content}</h4>
        </div>
    );
}

export default RoomSingleItem;