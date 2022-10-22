import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from "../../assets/images/logo2.png";
import "./Header.scss";
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

  return (
    <header className="header">
      <div className="header__wrapper row d-flex justify-content-between align-items-center h-100">
        <div className="header__wrapper__menu col-lg-0 col-md-3 d-none"> </div>{" "}
        <div className="header__wrapper__img col-lg-3 col-md-6">
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>{" "}
        <div className="header__wrapper__nav col-lg-8 col-md-0 d-flex justify-content-end">
          {" "}
          {nav__links.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="text-white"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              {" "}
              {item.display}{" "}
            </NavLink>
          ))}{" "}
        </div>{" "}
        <div className="header__wrapper__icon col-lg-1 col-md-3 p-0  d-flex justify-content-around">
          <div className="header__wrapper__icon__search header__wrapper__icon--btn">
            <SearchIcon sx={{ fontSize: 35 }}/>
          </div>{" "}
          <div className="header__wrapper__icon__cart header__wrapper__icon--btn">
            <ShoppingCartIcon sx={{ fontSize: 30 }}/>
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
