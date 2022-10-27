import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {  Row, Col } from "reactstrap";

import { nav__links } from "assets/data/navLinks";

import { cartActions } from "features/cart/cartSlice";
import { themeActions } from "features/theme/themeSlice";
import { menuActions } from "features/menu/menuSlice";


import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import logo from "../../assets/images/logo2.png";

import "./Header.scss";



const Header = () => {

  const dispatch = useDispatch()
    
  const HandleShowCartUi = () => {
      dispatch(cartActions.toggleCart());
    };
  const HandleDarkMode = () => {
    dispatch(themeActions.toggleTheme())
  }
  const HanldeShowMenuUi = () => {
    dispatch(menuActions.toggleMenu())
  }

  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  let activeStyle = {
    borderBottom: "1px solid",
  };

  const header = useRef()

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 30) {
        header.current.style.background = '#303442'
      }

      else {
        header.current.style.background = ' transparent'
      }
    }
    // window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  
  return (
    <header className="header" ref={header}>

      <Row className="header__wrapper justify-content-between align-items-center h-100">
        <Col xl='1' lg='1'   sm='3' xs='2' className='header__wrapper__menu'>
          <div>
            <MenuIcon 
              sx={{ fontSize: { xs: 25, lg: 40 }, background: '#fc4c4c', borderRadius: '5px', margin: '5px 5px' }} 
              onClick={HanldeShowMenuUi}
            />
          </div>
        </Col>
        <Col xl='3' lg='4' md='3' sm='3' xs='6' className='header__wrapper__img'>
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
        </Col>
        <Col xl='5' lg='4' md='6' sm='2' className='header__wrapper__nav justify-content-end'>
          {nav__links.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >

              {item.display}
            </NavLink>
          ))}
        </Col>
        <Col xl='3' lg='2' md='3' sm='3' xs='3' className='header__wrapper__icon p-0  d-flex justify-content-end'>
          <div 
            className="header__wrapper__icon__tumbler header__wrapper__icon--btn " 
            // style={{background: 'transparent'}}
            onClick={HandleDarkMode}
          >
            <div className={isDarkMode ? 'tumbler' : 'tumbler tumbler--dark-mode'}></div>
            <div className="tumbler__icon">
              <LightModeIcon sx={{ fontSize: { xs: 20, lg: 25 } }}/>
            </div>
            <div className="tumbler__icon">
              <DarkModeIcon sx={{ fontSize: { xs: 20, lg: 25 } }}/>
            </div>
          </div>
          <div className="header__wrapper__icon__search header__wrapper__icon--btn ">
            <SearchIcon sx={{ fontSize: { xs: 20, lg: 25 } }} />
          </div>
          <div className="header__wrapper__icon__cart header__wrapper__icon--btn"  onClick={HandleShowCartUi}>
            <ShoppingCartIcon sx={{ fontSize: { xs: 20, lg: 25 } }} />
          </div>
          <div className="header__wrapper__icon__login">
            {/* <div className="header__wrapper__icon__search header__wrapper__icon--btn" >
              <PersonOutlineIcon sx={{ fontSize: { xs: 20, lg: 25 } }} />
            </div> */}
            <h2>Log In</h2>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
