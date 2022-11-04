import Helmet from 'components/Helmet/Helmet';
// import Information from 'components/UI/Information/Information';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import React from 'react';
import RoomParent from './components/RoomParent/RoomParent';


import './Room.scss'

const Room = () => {
    return ( 
        <Helmet title='Room'>
            {/* <Room></Room> */}
            Room
            <PageTitle pagetitle={"Room"} pagesub={"Room"} />
          
            <RoomParent/>
            <Newslatter />
        </Helmet>
     );
}
 
export default Room;