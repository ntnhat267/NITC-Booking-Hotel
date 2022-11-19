import React from 'react'
import { Link } from 'react-router-dom'
import './CartPage.scss'
import { Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

const CartPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // const { carts } = props;

    const cartList = useSelector((state) => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    return (
        <div className="cart-area section-padding">
            <div className="container">
                <div className="form">
                    <div className="cart-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <form action="cart">
                                    <table className="table-responsive cart-wrap">
                                        <thead>
                                            <tr>
                                                <th className="product-2">Room type</th>
                                                <th className="pr">Capacity</th>
                                                <th className="ptice">Quantity</th>
                                                <th className="stock">Check - in</th>
                                                <th className="stock">Check - out</th>
                                                <th className="stock">Night</th>
                                                <th className="stock">Gross Total</th>
                                                <th className="remove remove-b">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            { cartList.map(item => (
                                                <CartItem key={item.id} cartItem={item}></CartItem>
                                            ))}
                                            
                                        </tbody>

                                    </table>
                                </form>

                                <div className="submit-btn-area">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                className="theme-btn"
                                                to="/room"
                                            >
                                                Add Another{" "}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='theme-btn upgrade-btn' type="submit" to="/room"  onClick={ClickHandler}>Update Cart</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="cart-product-list">
                                    <ul>
                                        <li>
                                            Total Room<span>({cartList.length})</span>
                                        </li>
                                        <li>
                                            Sub Price<span>${totalPrice}</span>
                                        </li>
                                        <li>
                                            Vat<span>$0</span>
                                        </li>
                                        <li>
                                            Eco Tax<span>$0</span>
                                        </li>
                                        <li>
                                            Delivery Charge<span>$0</span>
                                        </li>
                                        <li className="cart-b">
                                            Total Price<span>${totalPrice}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="submit-btn-area">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                className="theme-btn"
                                                to="/checkout"
                                            >
                                                Proceed to Checkout{" "}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartPage;