import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import './RoomSingleDetail.scss'
import amenitiesImg from '../../../../assets/images/amenities.jpg'
import roomServicesImg from '../../../../assets/images/roomservices.jpg'
const amenities = [
    'Refrigerator and water',
    'Air Conditioner Facilities',
    'Fruits are always available',
    '2 Sets of nightwea',
    'Tables and Chairs',
    '2 Elevator Available',
    'Room Side Belcony',
]

const roomServices = [
    "Daily Cleaning",
    "Special Swimming Pool",
    "Free Parking",
    "Free-to-use smartphone",
    "Free Wifi",
    "2 Elevator Available",
    "Room Side Belcony"
]

function RoomSingleDetail(props) {
    return (
        <Container className='room-single-detail'>
            <Row>
                <Col md='5' sm="12" style={{   position: "relative"}} className='room-single-detail__col'>
                    <div className='room-single-detail__wrap' >
                        <h2 className='room-title'>Amenities</h2>
                        <ul className='amenities__list' >
                            {amenities.map((item, index) => (
                                <li className='amenities__item' key={index}>
                                    <p>
                                        {item}
    
                                            <TaskAltIcon sx={{fontSize: 30}} className='amenities__item--icon' style={{color:"green"}}/>
                        
                                    </p>
                                </li>

                            ))}
                        </ul>
                    </div>
                </Col>
                <Col md='7' sm="12" style={{marginBottom: "60px"}}>
                    <img src={amenitiesImg} alt="amenitiesImage" className='w-100' style={{minHeight: "430px" ,objectFit: "cover"}}/>
                </Col>
                <Col md='7' sm="12"  style={{marginBottom: "60px"}}>
                <img src={roomServicesImg} alt="roomServicesImg" className='w-100' style={{minHeight: "430px" ,objectFit: "cover"}}/>
                </Col>
                <Col md='5' sm="12" style={{   position: "relative"}} className='room-single-detail__col'>
                <div className='room-single-detail__wrap room-single-detail__wrap--second' >
                        <h2 className='room-title'>Room Services</h2>
                        <ul className='amenities__list' >
                            {roomServices.map((item, index) => (
                                <li className='amenities__item' key={index}>
                                    <p>
                                        {item}
    
                                            <TaskAltIcon sx={{fontSize: 30}} className='amenities__item--icon' style={{color:"green"}}/>
                        
                                    </p>
                                </li>

                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default RoomSingleDetail;