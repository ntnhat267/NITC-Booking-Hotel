import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation,Autoplay, EffectFade } from "swiper";

import "swiper/less/autoplay"
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation"; 

import SLider1 from '../Slider1/SLider1';
import Slider2 from '../Slider2/Slider2';
import SLider3 from '../Slider3/SLider3';

const Slider = ({Slides, effect,boolean, speed, slidesPerView, breakpoints}) => {
   
    return ( 
        <div className={boolean==="1" ? 'swiper-slide1' : boolean==="2" ? 'swiper-slide2' : 'swiper-slide3'}>
            <Swiper
            autoplay={{delay:10000}}
            slidesPerView={slidesPerView}
            breakpoints={breakpoints}
            spaceBetween={0}
            speed={speed}
            effect={effect}
            loop={true}
            navigation={true}
            modules={[Navigation,Autoplay, EffectFade]}
            className="mySwiper"
            >
                {Slides.map((slide,index) =>{ 
                    let component;
                     switch (boolean) {
                        case "1":
                            component = <SLider1 slide={slide}/>
                            break;
                        case "2":
  
                            component = <Slider2 slide={slide}/>
                            break;    
                        case "3":
                            component = <SLider3 slide={slide}/>
                            break;
                        default:
                            break;
                    }
                    return (
                        <SwiperSlide className='slidesss' key={index} >
                             {component}
                        </SwiperSlide>
                
                )})}
                
            </Swiper> 

        </div>
    );
}
 
export default Slider;