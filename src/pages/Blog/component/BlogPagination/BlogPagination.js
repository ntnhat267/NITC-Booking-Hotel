import React, { useState } from 'react';
import { Col } from 'reactstrap';
import { Pagination } from '@mui/material';

import BlogItem from 'components/UI/BlogItem/BlogItem';
import usePagination from 'components/UI/Pagination/Pagination';

function BlogPagination({blogs}) {

    let [page, setPage] = useState(1);
    const PER_PAGE = 3;

    const count = Math.ceil(blogs.length / PER_PAGE);
    const _DATA = usePagination(blogs, PER_PAGE);

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
      };

    return (
            <>
                {_DATA.currentData().map(blog =>(
                    <Col key={blog.id} className='col-12' >
                        <BlogItem blog={blog}/>
                    </Col>
                ))}
                <div className='d-flex justify-content-center'>
                    <Pagination 
                        count={count} 
                        page={page}
                        variant="outlined" 
                        shape="rounded" 
                        onChange={handleChange}
                        size='large'
                    />
                </div>
            </>
    );
}

export default BlogPagination;