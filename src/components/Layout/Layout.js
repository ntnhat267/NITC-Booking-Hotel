import React from 'react';
import { useSelector } from 'react-redux';

import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carts from 'components/UI/cart/Carts';
import Menu from 'components/UI/menu/Menu';
import SmoothScroll from 'components/UI/SmoothScroll/SmoothScroll';

import './Layout.scss'

const Layout = () => {
    const isDarkMode = useSelector((state) => state.theme.isDarkMode)
    const showCartUI = useSelector((state) => state.cart.isShowCart)
    const showMenuUI = useSelector((state) => state.menu.isShowMenu)
    const styleDarkMode = {
        background: "black",
      };

    return ( 
    <div className='app__wrapper' style={isDarkMode ? styleDarkMode : undefined }>
       <Header/>
       <Routers/>
       <SmoothScroll/>
       { showMenuUI ? <Menu transform='translateX(0%)' opacity={1}/> : <Menu transform='translateX(-100%)' opacity={0}/>}
       { showCartUI ? <Carts transform='translateX(0%)' opacity={1}/> : <Carts transform='translateX(100%)' opacity={0}/>}
       <Footer/>
    </div> 
    );
}
 
export default Layout;