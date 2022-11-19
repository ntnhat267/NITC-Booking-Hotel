import React from 'react';
import Newslatter from '../../../components/Newslatter/Newslatter';
import PageTitle from '../../../components/PageTitle/PageTitle'
import CartPage from './CartPage'

const Cart = () => {
    return (
        <>
            <PageTitle pagetitle={'Cart'} pagesub={'Cart'} />
            <CartPage />
            <Newslatter nClass={'section-bg'} />
        </>
    )
};
export default Cart;