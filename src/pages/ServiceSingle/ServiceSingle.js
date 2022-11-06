import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectServiceById } from 'features/service/servicesSlice';

import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';

function ServiceSingle(props) {

    const {serviceId} = useParams();
    const service = useSelector(state => selectServiceById(state, serviceId))

    return (
        <Helmet title='Service Single'>
            <PageTitle pagetitle={service.name} pagesub={"Serive"}/>
            <Newslatter />
        </Helmet>
    );
}

export default ServiceSingle;