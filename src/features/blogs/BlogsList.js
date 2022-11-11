import Loading from 'components/UI/Loading/Loading';
import BlogPagination from 'pages/Blog/component/BlogPagination/BlogPagination';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import { fetchBlogs, getBlogsError, getBlogsStatus, selectAllBlogs } from './blogsSlice';

function BlogsList({main}) {

    const dispatch = useDispatch();

    const blogs = useSelector(selectAllBlogs)
    const blogsStatus = useSelector(getBlogsStatus);
    const error = useSelector(getBlogsError)

    useEffect(() => {
        if(blogsStatus === 'idle') {
            dispatch(fetchBlogs())
        }
    }, [blogsStatus, dispatch])

    let content;

    if (blogsStatus === 'loading') {
        content = <Loading/>
    } else if (blogsStatus === 'succeeded') {
        
        switch (main) {
            case "main":
                content = <Row>
                    <BlogPagination blogs={blogs}/>
                </Row>
                break;
        
            default:
                break;
        }
    } else if (blogsStatus === 'failed') {
        content = <p>{error}</p>;
    }


    return (
        <div>
            {content}
        </div>
    );
}

export default BlogsList;