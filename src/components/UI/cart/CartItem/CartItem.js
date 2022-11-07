import React from 'react';
import { useDispatch } from 'react-redux';
import {  Row,Col } from 'reactstrap';

import CloseIcon from '@mui/icons-material/Close';

import { cartActions } from 'features/cart/cartSlice';

function CartItem({cartItem}) {

    const dispatch = useDispatch()

    const HandleRemoveCart = () => {
        dispatch(cartActions.removeCart({
            id: cartItem.id
        }))
    }

    return (
        <Row className='view-cart__item align-items-center' >
            <Col className='view-cart__item--img col-2'> 
                <img src={cartItem.avatar} alt={cartItem.name}/>
            </Col> 
            <Col  className='view-cart__item--description col-8'>
                <p>{cartItem.name}</p>
                <span>{cartItem.price} x {cartItem.quantity}</span>
            </Col>  
            <Col className='view-cart__item--close col-2' >
                <CloseIcon 
                    sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}
                    onClick={HandleRemoveCart}
                />
            </Col>     
        </Row>
    );
}

export default CartItem;