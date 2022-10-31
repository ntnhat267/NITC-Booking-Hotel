import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import React from 'react';

const Blog = () => {
    return ( 
        <Helmet title='Blog'>
             <PageTitle pagetitle={"Blog"} pagesub={"Blog"} />
             <Newslatter />
        </Helmet>
     );
}
 
export default Blog;