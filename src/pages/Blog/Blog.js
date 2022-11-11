import React from 'react';

import Helmet from 'components/Helmet/Helmet';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import BlogBody from './component/BlogBody/BlogBody';

const Blog = () => {
    return ( 
        <Helmet title='Blog'>
             <PageTitle pagetitle={"Blog"} pagesub={"Blog"} />
             <BlogBody/>
             <Newslatter />
        </Helmet>
     );
}
 
export default Blog;