import React from 'react';
import { NavLink } from 'react-router-dom';

import './Slider3.scss'

const SLider3 = ({slide}) => {
    return (
        <div className='slide'>
            <img src={slide.image} className='img' alt="img"/>
            <div className='slide__content'>
                <h2>
                   <NavLink to='/'>{slide.name}</NavLink> 
                </h2>
                <div className='slide__content--img'>
                    <img src={slide.icon} alt='icon' />
                </div>
            </div>
        </div>
    );
};

export default SLider3;
