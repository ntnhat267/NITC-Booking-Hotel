import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { menuActions } from 'features/menu/menuSlice';
import { nav__links } from 'assets/data/navLinks';
import Logo from '../../../assets/images/logo.png'

import CloseIcon from '@mui/icons-material/Close';



import './Menu.scss'

let activeStyle = {
    fontWeight: 700
  };

function Menu({transform, opacity}) {

    const dispatch = useDispatch();

    const HandleShowCartUi = () => {
        dispatch(menuActions.toggleMenu());
      };

    return (
        <div className='menu'  style={{transform:transform, opacity:opacity}}>
            <div className='menu__wrapper'>
                <div className='menu__header d-flex justify-content-between align-items-center;'>
                    <div className='menu__img'>
                        <img src={Logo} alt='logo' />
                    </div>
                    <div className='menu__close ' onClick={HandleShowCartUi}>
                        <CloseIcon sx={{fontSize: 30}} />
                    </div>

                </div>
                <div className='menu__register d-flex flex-column align-items-stretch text-center '>
                    <NavLink className='menu_login'>
                        Login
                    </NavLink>
                    <NavLink className='menu_sign-up'>
                        Sign Up
                    </NavLink>
                </div>
                <ul className='menu__nav--list d-flex flex-column align-items-stretch text-start '>
                    {nav__links.map((item,index) => (
                         <NavLink 
                            to={item.path} 
                            key={index} 
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            end
                        >
                            <p className='menu__nav--item'> {item.display}</p>
                        </NavLink>

                    ))}
                   

                </ul>
            </div>
        </div>
    );
}

export default Menu;