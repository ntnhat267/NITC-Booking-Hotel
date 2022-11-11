import React from 'react';

import Helmet from 'components/Helmet/Helmet';
import PageTitle from 'components/UI/PageTitle/PageTitle';

function Cart() {
    return (
        <Helmet title="Cart">
            <PageTitle pagetitle={"Cart"} pagesub={"Cart"} />
        </Helmet>
    );
}

export default Cart;