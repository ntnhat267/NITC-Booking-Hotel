import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import { selectRoomById } from 'features/rooms/roomsSlice';

function RoomSingle() {

    const {roomId} = useParams()
    const room = useSelector(state => selectRoomById(state, roomId))

    return (
        <Helmet title='Room Single'>
           <PageTitle pagetitle={room.name} pagesub={"Room"} />

           <Newslatter />
        </Helmet>
    );
}

export default RoomSingle;