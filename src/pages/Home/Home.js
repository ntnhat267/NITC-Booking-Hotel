import { Slides1 } from 'assets/data/Slides1';
import Helmet from 'components/Helmet/Helmet';
import Slider from 'components/UI/Slider/Slider';
import './Home.scss'
import React from 'react';

const Home = () => {
    return ( 
        <Helmet title="Home" >
            <Slider Slides={Slides1} boolean={"1"} speed={2000}/>
        </Helmet>
     );
}
 
export default Home;