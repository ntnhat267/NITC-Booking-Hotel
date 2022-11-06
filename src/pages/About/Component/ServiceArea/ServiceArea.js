import ServicesList from 'features/service/ServicesList';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import './ServiceArea.scss'

function ServiceArea() {
    return (
        <div className='service-area'>
            <Container>
                <Row>
                    <Col lg='4'>
                        <div className='service-area__content'>
                            <h2>We are Providing You Our Best Facilities</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <NavLink to='/service'>Discover More</NavLink>
                        </div>
                    </Col>
                    <Col lg='8'>
                        <ServicesList main={"second"}></ServicesList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServiceArea;