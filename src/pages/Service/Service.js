import React from 'react';

import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import ServicesList from 'features/service/ServicesList';

function Service(props) {
    return (
        <Helmet title='Serive' >
            <PageTitle pagetitle={"Service"} pagesub={"Serive"}/>
            <div style={{margin:"100px 0"}}>
            <ServicesList main={"main"} />

            </div>
            <Newslatter />
        </Helmet>
    );
}

export default Service;