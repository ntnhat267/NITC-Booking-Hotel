import React from 'react';
import { NavLink } from 'react-router-dom';

import './Slider1.scss'

const SLider1 = ({slide}) => {
    return ( 
        <div className='slide'>
            <img src={slide.slide} className='img' alt={slide.slide}/>
            <div className='slide__bg' >
                <div className='slide__bg--content'>
                    <h2>Find Your Perfect Place To Stay</h2>
                    <NavLink to='/room'>Book Now</NavLink>
                </div>
            </div>


        </div>
     );
}
 
export default SLider1;