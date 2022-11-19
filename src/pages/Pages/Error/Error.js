import React from 'react';
import Newslatter from '../../../components/Newslatter/Newslatter';
import PageTitle from '../../../components/PageTitle/PageTitle'
import ErrorPage from './ErrorPage'

const Error = () => {
    return (
        <>
            <PageTitle pagetitle={'404'} pagesub={'404'} />
            <ErrorPage />
            <Newslatter nClass={'section-bg'} />
        </>
    )
};
export default Error;