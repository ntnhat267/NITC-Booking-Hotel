import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './RoomInformation.scss'

function RoomInformation({room}) {

    // console.log(room);

    return (
        <div>
            <Container className='room-information'>
                <Row className='room-information__list row-cols-1'>
                    <Col lg='2' sm='12' col='12' className='room-information__item col  ' >
                        <span>BEDS</span>
                        <h2>{room.beds} Double Bed</h2>
                    </Col>
                    <Col  lg='3' sm='12' col='12' className='room-information__item col '>
                        <span>ROOM SIZE</span>
                        <h2>870 sq ft / {room.roomSize} 52 sqm</h2>
                    </Col >
                    <Col  lg='3' sm='12' col='12' className='room-information__item col '>
                        <span>OCCUPANCY</span>
                        <h2>{room.occupancy.adults} adults ({room.occupancy.children} children )</h2>
                    </Col>
                    <Col   lg='2'sm='12' col='12' className='room-information__item col '>
                        <span>BATHROOM</span>
                        <h2>{room.bathroom} Shower bath</h2>
                    </Col>
                    <Col  lg='2' sm='12' col='12' className='room-information__item col '>
                        <h5>
                            Price 
                            <span>${room.price}</span>
                            /NIGHT
                        </h5>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default RoomInformation;