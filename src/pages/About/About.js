import React from 'react';

import { Slides2 } from 'assets/data/Slides2';
import Helmet from 'components/Helmet/Helmet';
import Information from 'components/UI/Information/Information';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import Slider from 'components/UI/Slider/Slider';
import RoomArea from 'pages/Home/component/RoomArea/RoomArea';
import funfactBg from '../../assets/images/funfact.jpg'
import AboutEO from './Component/AboutEO/AboutEO';
import ServiceArea from './Component/ServiceArea/ServiceArea';
const About = () => {
    return ( 
        <Helmet title='About'>
            <PageTitle pagetitle={"About"} pagesub={"About"} />
            <AboutEO/>
            <Information urlBg={funfactBg} color='white'/>
            <RoomArea/>
            <ServiceArea/>
            <Slider Slides={Slides2} boolean={"2"} effect={'fade'} speed={1000}  />
            <Newslatter/>
        </Helmet>
     );
}
 
export default About;