import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import './ServiceSecond.scss'

function ServiceSecond({services}) {
    return (
        <div className='service-second'>
            <Container>
                <Row>
                    {services.map(service => (
                        <Col key={service.id} xxl='3'  xl='4'  lg='4' md='4' sm='6' xs='6'  className='service-second__item d-flex flex-column justify-content-center align-items-center'>
                            <div className='service-second__icon'>
                                <img src={service.icon} alt={service.name}/>
                            </div>
                            <NavLink to={`/service/${service.id}`} className='text-center'>{service.name}</NavLink>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default ServiceSecond;