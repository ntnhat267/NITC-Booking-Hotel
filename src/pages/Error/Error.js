import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import React from 'react';
import ErrorPage from './Component/ErrorPage/ErrorPage';

function Error(props) {
    return (
        <Helmet title='Error'>
            <PageTitle pageTitle={'404'} pagesub={'404'} />
            <ErrorPage />
            <Newslatter nClass={'section-bg'} />
        </Helmet>
    );
}

export default Error;