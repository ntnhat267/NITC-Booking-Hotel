import Helmet from 'components/Helmet/Helmet';
import Information from 'components/UI/Information/Information';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import React from 'react';
import funfactBg from '../../assets/images/funfact.jpg'
const About = () => {
    return ( 
        <Helmet title='About'>
            <PageTitle pagetitle={"About"} pagesub={"About"} />
            <Information urlBg={funfactBg} color='white'/>
        </Helmet>
     );
}
 
export default About;