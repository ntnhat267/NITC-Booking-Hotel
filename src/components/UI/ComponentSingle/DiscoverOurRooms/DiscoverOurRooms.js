import RoomsList from 'features/rooms/RoomsList';
import React from 'react';

import './DiscoverOurRooms.scss'

function DiscoverOurRooms(props) {
    return (
        <div className='discover-our-rooms'>
           <h3 className='widget-title'>Discover Our Rooms</h3> 
           <RoomsList main={"tertiary"}/>
        </div>
    );
}

export default DiscoverOurRooms;