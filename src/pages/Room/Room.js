import React from 'react';

import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import RoomsList from 'features/rooms/RoomsList';

import './Room.scss'


const Room = () => {
    return ( 
        <Helmet title='Room'>
            <PageTitle pagetitle={"Room"} pagesub={"Room"} />
            <RoomsList main={"second"}/>
            <Newslatter />
        </Helmet>
     );
}
 
export default Room;