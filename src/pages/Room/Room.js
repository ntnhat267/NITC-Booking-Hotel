import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle'
import Rooms2 from './Rooms2'
import Newslatter from '../../components/Newslatter/Newslatter'

const Room = () => {
    return (
        <>
            <PageTitle pagetitle={"Room"} pagesub={"Room"} />
            <Rooms2 />
            <Newslatter />
        </>
    );
}

export default Room;