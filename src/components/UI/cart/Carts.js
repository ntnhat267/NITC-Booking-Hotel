import React from 'react';
import './Carts.scss'


import img from '../../../assets/images/img-1.jpg'
import CloseIcon from '@mui/icons-material/Close';
import { Container, Row,Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from 'features/cart/cartSlice';
function Carts({transform, opacity}) {

    const dispatch = useDispatch()
    
    const HandleShowCartUi = () => {
        dispatch(cartActions.toggleCart());
      };

    return (
        <div className='view-cart' style={{transform:transform, opacity:opacity}}>
            <div className='view-cart__close' >
                <div onClick={HandleShowCartUi}>
                    <CloseIcon sx={{ fontSize: 35, background:'black',color:'white', borderRadius:'5px' }}/>
                </div>
            </div>
            <div className='view-cart__items'>
                <Container>
                    <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row>

                    <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row>
                    <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row>
                    <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row>
                    <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row>
                    <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row>
                    <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row> <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row> <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row> <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row> <Row className='view-cart__item align-items-center'>
                        <Col className='view-cart__item--img col-2'> 
                            <img src={img} alt='img'/>
                        </Col>
                        <Col  className='view-cart__item--description col-8'>
                            <p>Deluxe Contrast Room</p>
                            <span>$200 x 1</span>
                        </Col>
                        <Col className='view-cart__item--close col-2' >
                            <CloseIcon sx={{ fontSize: 20, background:'#dc3545',color:'white', borderRadius:'5px' }}/>
                        </Col>
                    </Row>
                </Container>
                
            </div>

            <div className='view-cart__checkout'>
                <Container>
                    <div className='view-cart__checkout--total' >
                        <span className='d-flex justify-content-between align-items-center'>
                            Subtotal:
                            <span>$2555</span>
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