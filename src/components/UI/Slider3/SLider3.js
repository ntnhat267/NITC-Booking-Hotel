import React from 'react';
import { NavLink } from 'react-router-dom';

import './Slider3.scss'

const SLider3 = ({slide}) => {
    return (
        <div className='slide'>
            <img src={slide.img} className='img' alt="img"/>
            <div className='slide__content'>
                <h2>
                   <NavLink to='/'>{slide.title}</NavLink> 
                </h2>
            </div>
        </div>
    );
};

export default SLider3;
