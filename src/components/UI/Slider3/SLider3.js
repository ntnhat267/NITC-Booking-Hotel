import React from 'react';
import { NavLink } from 'react-router-dom';

import './Slider3.scss'

const SLider3 = ({slide}) => {
    return (
        <div className='slide'>
            <div className='slide__img'>
                <img src={slide.image} className='img' alt="img"/>
            </div>
            <div className='slide__content d-flex flex-column align-items-center justify-content-evenly'>
                <div className='slide__content--img'>
                    <img src={slide.icon} alt='icon' />
                </div>
                <h2>
                   <NavLink to={`/service/${slide.id}`}>{slide.name}</NavLink> 
                </h2>
            </div>
        </div>
    );
};

export default SLider3;
