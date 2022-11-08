import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectServiceById } from 'features/service/servicesSlice';

import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import { Col, Container, Row } from 'reactstrap';
import NewsLetterSingle from 'components/UI/ComponentSingle/NewsLetterSingle/NewsLetterSingle';
import HelpSingle from 'components/UI/ComponentSingle/HelpSingle/HelpSingle';
import ServiceSingleItem from 'components/UI/ComponentSingle/ServiceSingleItem/ServiceSingleItem';

function ServiceSingle(props) {

    const {serviceId} = useParams();
    const service = useSelector(state => selectServiceById(state, serviceId))

    return (
        <Helmet title='Service Single'>
            <PageTitle pagetitle={service.name} pagesub={"Serive"}/>
            <Container style={{margin: "100px auto"}}>
                <Row>
                    <Col xl='8'>
                        <ServiceSingleItem service={service}></ServiceSingleItem>
                    </Col>
                    <Col xl='4'>
                        <NewsLetterSingle/>
                        <HelpSingle/>
                    </Col>
                </Row>
            </Container>
            <Newslatter />
        </Helmet>
    );
}

export default ServiceSingle;