import React from 'react';
import { useSelector } from 'react-redux';

import './Slider2.scss'

import img from '../../../assets/images/quote.png'

const Slider2 = ({slide}) => {

    const isDarkMode = useSelector((state) => state.theme.isDarkMode)

    const styleDarkMode = {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 2px 8px 1px" ,
    }

    return ( 
        <div className='slide2'>
            <div className='slide2__wrapper  d-flex' style={isDarkMode ? styleDarkMode : undefined }>
                <div className='slide2__wrapper--mobile d-flex w-100 '>
                    <div className='slide2__wrapper__img'>
                        <img src={slide.slide} className='img' alt="img"/>
                    </div>
                    <div className='slide2__wrapper__description d-flex flex-column  '>
                        <div className='slide2__wrapper__description__img'>
                            <img src={img} alt="img"/>
                        </div>
                        <p>{slide.review}</p>
                        <h3>{slide.name}</h3>
                        <span>{slide.client}</span>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Slider2;