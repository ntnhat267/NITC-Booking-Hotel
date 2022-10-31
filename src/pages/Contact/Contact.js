import Helmet from 'components/Helmet/Helmet';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import React from 'react';

const Contact = () => {
    return ( 
        <Helmet title='Contact'>
             <PageTitle pagetitle={"Contact"} pagesub={"Contact"} />
        </Helmet>
     );
}
 
export default Contact;