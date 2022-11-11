import React from 'react';

import Helmet from 'components/Helmet/Helmet';
import PageTitle from 'components/UI/PageTitle/PageTitle';

function Checkout() {
    return (
        <Helmet title="Checkout">
            <PageTitle pagetitle={"Checkout"} pagesub={"Checkout"} />
        </Helmet>
    );
}

export default Checkout;