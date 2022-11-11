import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import { selectRoomById } from 'features/rooms/roomsSlice';
import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import RoomInformation from './component/RoomInformation/RoomInformation';
import NewsLetterSingle from 'components/UI/ComponentSingle/NewsLetterSingle/NewsLetterSingle';
import HelpSingle from 'components/UI/ComponentSingle/HelpSingle/HelpSingle';
import RoomSingleItem from 'components/UI/ComponentSingle/RoomSingleItem/RoomSingleItem';
import RoomSingleDetail from 'components/UI/ComponentSingle/RoomSingleDetail/RoomSingleDetail';
import PricingPlans from 'components/UI/ComponentSingle/PricingPlans/PricingPlans';
import DiscoverOurRooms from 'components/UI/ComponentSingle/DiscoverOurRooms/DiscoverOurRooms';

function RoomSingle() {

    const {roomId} = useParams()
    const room = useSelector(state => selectRoomById(state, roomId))

    return (
        <Helmet title='Room Single'>
           <PageTitle pagetitle={room.name} pagesub={"Room"} />
            <RoomInformation room={room}/>
            <Container style={{margin: "100px auto"}}>
                <Row>
                    <Col xl='8'>
                        <RoomSingleItem room={room}/>
                        <RoomSingleDetail/>
                        <PricingPlans/>
                    </Col>
                    <Col xl='4'>
                        <NewsLetterSingle/>
                        <HelpSingle/>
                        <DiscoverOurRooms/>
                    </Col>
                </Row>
            </Container>
           <Newslatter />
        </Helmet>
    );
}

export default RoomSingle;