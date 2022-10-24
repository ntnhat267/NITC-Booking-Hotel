import React, { useRef, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from "../../assets/images/logo2.png";
import "./Header.scss";
import {  Row, Col } from "reactstrap";
import { FormControlLabel, Switch } from "@mui/material";
const nav__links = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Destination",
    path: "/destination",
  },
  // {
  //   display: "Pages",
  //   path: "/pages",
  // },
  {
    display: "Room",
    path: "/room",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  let activeStyle = {
    borderBottom: "1px solid",
  };

  const header = useRef()
  // console.log(header);
  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 30) {
        // console.log(window.pageYOffset);
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

  //css 
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(5px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(25px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#ffffff1a',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  return (
    <header className="header" ref={header}>

      <Row className="header__wrapper justify-content-between align-items-center h-100">
        <Col lg='1' sm='3' xs='2' className='header__wrapper__menu'>
          <div>
            <MenuIcon sx={{ fontSize: { xs: 25, lg: 40 }, background: '#fc4c4c', borderRadius: '5px', margin: '5px 5px' }} />
          </div>
        </Col>
        <Col lg='2' md='3' sm='3' xs='6' className='header__wrapper__img'>
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
        </Col>
        <Col lg='5' md='6' sm='2' className='header__wrapper__nav justify-content-end'>
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
        <Col lg='3' md='3' sm='3' xs='3' className='header__wrapper__icon p-0  d-flex justify-content-end'>
          <div className="header__wrapper__icon__search header__wrapper__icon--btn " style={{background: 'transparent'}}>
            {/* <LightModeIcon  sx={{fontSize: { xs: 20, lg: 25 } }}/> */}
            <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        // label="MUI switch"
      />
          </div>
          <div className="header__wrapper__icon__search header__wrapper__icon--btn ">
            <SearchIcon sx={{ fontSize: { xs: 20, lg: 25 } }} />
          </div>
          <div className="header__wrapper__icon__search header__wrapper__icon--btn">
            <ShoppingCartIcon sx={{ fontSize: { xs: 20, lg: 25 } }} />
          </div>
          <div className="header__wrapper__icon__login">
            <div className="header__wrapper__icon__search header__wrapper__icon--btn" >
              <PersonOutlineIcon sx={{ fontSize: { xs: 20, lg: 25 } }} />
            </div>
            <h2>Log In</h2>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
