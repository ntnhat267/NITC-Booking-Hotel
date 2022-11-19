import React from 'react';

import Helmet from 'components/Helmet/Helmet';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import CartPage from './component/CartPage/CartPage';

function Cart() {
    return (
        <Helmet title="Cart">
            <PageTitle pagetitle={"Cart"} pagesub={"Cart"} />
            <CartPage />
            <Newslatter nClass={'section-bg'} />
        </Helmet>
    );
}

export default Cart;