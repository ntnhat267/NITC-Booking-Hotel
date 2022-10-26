import React, {useRef, useEffect} from "react";
import { NavLink} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/images/logo2.png";
import "./Header.scss";
import { Container, Row, Col } from "reactstrap";
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
  {
    display: "Pages",
    path: "/pages",
  },
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
  },[]);

  return (
    <header className="header" ref={header}>
       
        <Row className="header__wrapper justify-content-between align-items-center h-100">
          <Col xl='1' sm='3' xs='2' className='header__wrapper__menu'>
            <div>
              <MenuIcon sx={{fontSize: { xs: 25,lg: 40 }, background : '#fc4c4c', borderRadius: '5px', margin : '5px 5px'}}/>

            </div>
          </Col>
          <Col xl='3' md='3' sm='3' xs='7'  className='header__wrapper__img'>
            <NavLink to='/'>
              <img src={logo} alt="logo" />
            </NavLink>
          </Col>
          <Col xl='8' md='7' sm='3' className='header__wrapper__nav justify-content-end'>
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
          <Col xl='1' md='2'sm='3' xs='3' className='header__wrapper__icon p-0  d-flex justify-content-end'>
            <div className="header__wrapper__icon__search header__wrapper__icon--btn ">
              <SearchIcon sx={{fontSize: { xs: 20, lg: 30 } }}/>
            </div>
            <div className="header__wrapper__icon__cart header__wrapper__icon--btn">
              <ShoppingCartIcon sx={{fontSize: {xs: 20, lg: 30 }}}/>
            </div>
          </Col>
        </Row>
    
      {/* <div className="header__wrapper row d-flex justify-content-between align-items-center h-100">
        <div className="header__wrapper__menu col-lg-0 col-md-3">
          <MenuIcon/>
        </div>
        <div className="header__wrapper__img col-lg-3 col-md-6">
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="header__wrapper__nav col-lg-8 col-md-0 d-flex justify-content-end">
          
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
        </div>
        <div className="header__wrapper__icon col-lg-1 col-md-3 p-0  d-flex justify-content-around">
          <div className="header__wrapper__icon__search header__wrapper__icon--btn">
            <SearchIcon sx={{ fontSize: 35 }}/>
          </div>
          <div className="header__wrapper__icon__cart header__wrapper__icon--btn">
            <ShoppingCartIcon sx={{ fontSize: 30 }}/>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;