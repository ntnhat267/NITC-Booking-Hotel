import React from 'react';

import { Slides1 } from 'assets/data/Slides1';
import { Slides2 } from 'assets/data/Slides2';
import Helmet from 'components/Helmet/Helmet';
import Slider from 'components/UI/Slider/Slider';
import Slider2 from 'components/UI/Slider2/Slider2';
import ExclusiveOffer from './component/ExclusiveOffer/ExclusiveOffer';
import Information from 'components/UI/Information/Information';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import RoomArea from './component/RoomArea/RoomArea';
import ServicesList from 'features/service/ServicesList';

import './Home.scss'


const Home = () => {
    return ( 
        <Helmet title="Home" >
            <Slider Slides={Slides1} boolean={"1"} speed={2000} />
            {/* <ExclusiveOffer/> */}
            <RoomArea/>
            <ServicesList/>
            <Information/>
            <Slider Slides={Slides2} boolean={"2"} effect={'fade'} speed={1000}  />
            <Newslatter/>

        </Helmet>
     );
}
 
export default Home;