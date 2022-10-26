import React from 'react';

import './Slider2.scss'

import img from '../../../assets/images/quote.png'

const Slider2 = ({slide}) => {
    return ( 
        <div className='slide2'>
            <div className='slide2__wrapper  d-flex'>
                <div className='d-flex  '>
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