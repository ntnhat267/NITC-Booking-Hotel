import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import React from 'react';
import ContactInfo from './component/ContactInfo/ContactInfo';

const Contact = () => {
    return ( 
        <Helmet title='Contact'>
             <PageTitle pagetitle={"Contact"} pagesub={"Contact"} />
             <ContactInfo/>
             <Newslatter/>
        </Helmet>
     );
}
 
export default Contact;