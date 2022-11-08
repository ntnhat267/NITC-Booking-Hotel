import React from 'react';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import { cartActions } from 'features/cart/cartSlice';

import CartItem from './CartItem/CartItem';

import './Carts.scss'
function Carts({transform, opacity}) {
    
    const dispatch = useDispatch()

    const HandleShowCartUi = () => {
        dispatch(cartActions.toggleCart());
      };
    
    

    const cartList = useSelector((state) => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.totalPrice)

    return (
        <div className='view-cart' style={{transform:transform, opacity:opacity}}>
            <div className='view-cart__close' >
                <div onClick={HandleShowCartUi}>
                    <CloseIcon sx={{ fontSize: 35, background:'black',color:'white', borderRadius:'5px' }}/>
                </div>
            </div>
            <div className='view-cart__items'>
                <Container>

                    {cartList.length < 1 ? 
                        <span className='view-cart__items--no-item d-flex align-items-center justify-content-evenly'>
                            No item add to the cart <SentimentVeryDissatisfiedIcon sx={{fontSize: 25}} />
                        </span> 
                        : cartList.map(cartItem => (
                        <CartItem cartItem={cartItem} key={cartItem.id}/>
                    ))}
                </Container>
                
            </div>
            <div className='view-cart__checkout'>
                <Container>
                    <div className='view-cart__checkout--total' >
                        <span className='d-flex justify-content-between align-items-center'>
                            Subtotal:
                            <span>${totalPrice}</span>
                        </span>
                    </div>

                    <div className='view-cart__checkout--btn'>
                        <div className='view-cart__checkout--btn--checkout d-flex justify-content-center'>
                            <NavLink to=''>Checkout</NavLink>
                        </div>
                        <div className='view-cart__checkout--btn--viewcart d-flex justify-content-center'>
                            <NavLink to=''>View Cart</NavLink>
                        </div>
                        
                    </div>

                </Container>
            </div>
        </div>
    );
}

export default Carts;