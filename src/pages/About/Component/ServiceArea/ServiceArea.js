import ServicesList from 'features/service/ServicesList';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import './ServiceArea.scss'

function ServiceArea() {
    return (
        <div className='service-area'>
            <Container className='service-area__wrap'>
                <Row>
                    <Col xl='4' md='12'>
                        <div className='service-area__content'>
                            <h2>We are Providing You Our Best Facilities</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <NavLink to='/service'>Discover More</NavLink>
                        </div>
                    </Col>
                    <Col xl='8' md='12'>
                        <ServicesList main={"second"}></ServicesList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServiceArea;