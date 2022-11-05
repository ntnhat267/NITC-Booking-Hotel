import RoomsList from 'features/rooms/RoomsList';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';

function RoomArea(props) {
    return (
        <Container className=' section-padding'>
           <Row className='align-items-center justify-content-center'>
                <Col xl='6' md='8' className='text-center'>
                    <h2 
                        style={{
                            fontSize: "40px",
                            lineHeight: "40px",
                            fontWeight: '600',
                            marginBottom: '20px',
                            textTransform: 'capitalize',
                            color: "#303443"
                        }}
                    >
                            Our Most Populer Room
                    </h2>
                    <p
                        style={{
                            fontSize: "18px",
                            maxWidth: "540px",
                            margin: '0 auto',
                            color: '#687693',
                            lineHeight: "30px"
                        }}
                    >
                        It is a long established fact that a reader will be distracted by the readable content of a page.
                    </p>
                </Col>
           </Row>
            <RoomsList hot={3}/>
        </Container>
    );
}

export default RoomArea;