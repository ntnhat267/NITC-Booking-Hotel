import React from 'react';
import { NavLink } from 'react-router-dom';

import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import CommentSharpIcon from '@mui/icons-material/CommentSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';

import './BlogItem.scss'


function BlogItem({blog}) {
    return (
        <div className='blog-item'>
            <div>
                <img className='w-100' src={blog.avatar} alt={blog.name}/>
            </div>
            <div className='blog-item__meta'>
                <ul>
                    <li>
                        <PersonSharpIcon sx={{fontSize: 30}}></PersonSharpIcon>
                        By {blog.author}
                    </li>
                    <li>
                        <CommentSharpIcon sx={{fontSize: 30}}></CommentSharpIcon>
                        Comment {blog.comments}
                    </li>
                    <li>
                        <CalendarMonthSharpIcon sx={{fontSize: 30}}></CalendarMonthSharpIcon>
                        By {blog.createdAt}
                    </li>
                </ul>
            </div>
            <div className='blog-item__details'>
                <NavLink to={blog.id}>{blog.name}</NavLink>
                <p>{blog.content}</p>
                <NavLink to={blog.id}>Read More ...</NavLink>
            </div>
        </div>
    )
}



export default BlogItem;