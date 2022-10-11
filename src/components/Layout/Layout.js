import React from 'react';

import './Layout.css'

import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return ( 
    <div className='app__wrapper'>
       <Header/>
       <Routers/>
       <Footer/>
    </div> 
    );
}
 
export default Layout;