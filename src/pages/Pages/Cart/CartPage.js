import React from 'react'
import { Link } from 'react-router-dom'
import './CartPage.scss'
import { Grid, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const { carts } = props;

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
                                            <td className='product'>
                                                <ul>
                                                    <li className='first-cart'>Luxery Twin Room</li>
                                                </ul>
                                            </td>
                                            <td className='ptice'>
                                                2 adult
                                            </td>
                                            <td className='ptice'>1</td>
                                            <td className='stock'>November 15, 2022</td>
                                            <td className='stock'>November 17, 2022</td>
                                            <td className='stock'>
                                                <Grid className='quantity cart-plus-minus'>
                                                    <Button
                                                        class="dec qtybutton"
                                                        tabindex="0"
                                                        type="button"
                                                    >-</Button>
                                                    <input type="text" value="1" />
                                                    <Button class="inc qtybutton" tabindex="0" type="button">+</Button>
                                                </Grid>
                                            </td>
                                            <td className='stock'>$250</td>
                                            <td className='action'>
                                                <ul>
                                                    <li className='w-btn'>
                                                        <DeleteIcon style={{
                                                            fontSize: "26px",
                                                            margin: "auto",
                                                            height: "100%",
                                                        }}
                                                        />
                                                    </li>
                                                </ul>
                                            </td>
                                        </tbody>
                                    </table>
                                </form>

                                <div className="submit-btn-area">
                                    <ul>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                className="theme-btn"
                                                to="/search-result"
                                            >
                                                Add Another{" "}
                                            </Link>
                                        </li>
                                        <li>
                                            <Button className='theme-btn upgrade-btn' type="submit">Update Cart</Button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="cart-product-list">
                                    <ul>
                                        <li>
                                            Total Room<span>(1)</span>
                                        </li>
                                        <li>
                                            Sub Price<span>$250</span>
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
                                            Total Price<span>$250</span>
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