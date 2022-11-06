import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';
import Destination from '../pages/Destination/Destination';
import Home from '../pages/Home/Home';
import Room from '../pages/Room/Room';
import Error from 'pages/Error/Error';
import RoomSingle from 'pages/RoomSingle/RoomSingle';
import Service from 'pages/Service/Service';
import ServiceSingle from 'pages/ServiceSingle/ServiceSingle';
import Login from 'pages/Login/Login';


const Routers = () => {
    return ( 
        <div>
            <Routes>
                <Route path='/home' element={<Navigate to='/'/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/room' element={<Room/>}></Route>
                <Route path='/room/:roomId' element={<RoomSingle/>}></Route>
                <Route path='/destination' element={<Destination/>}></Route>
                <Route path='/service' element={<Service/>}></Route>
                <Route path='/service/:serviceId' element={<ServiceSingle/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/*' element={ <Error/>}></Route>

            </Routes>

        </div>
     );
}
 
export default Routers;