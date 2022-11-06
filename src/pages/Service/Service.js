import React from 'react';

import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import ServicesList from 'features/service/ServicesList';

function Service(props) {
    return (
        <Helmet title='Serive'>
            <PageTitle pagetitle={"Service"} pagesub={"Serive"}/>
            <ServicesList main={"main"} style={{padding: "50px 0"}}/>
            <Newslatter />
        </Helmet>
    );
}

export default Service;