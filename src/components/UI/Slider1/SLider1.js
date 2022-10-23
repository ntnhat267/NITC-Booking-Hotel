import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

import './Slider1.scss'

const SLider1 = ({slide}) => {
    return ( 
        <div className='slide'>
            <img src={slide.slide} className='img' alt={slide.slide}/>
            <div className='slide__bg' >
                <div className='slide__bg--content h-100'>
                  
                        <Row  className='h-100 align-items-center'>
                            <Col lg='10' xl="8" md='12' className='offset-1'>
                                <h2>Find Your Perfect Place To Stay</h2>
                                <NavLink to='/room'>Book Now</NavLink>
                            </Col>

                        </Row>
                </div>
            </div>


        </div>
     );
}
 
export default SLider1;