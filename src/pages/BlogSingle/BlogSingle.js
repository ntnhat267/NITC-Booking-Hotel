import Helmet from 'components/Helmet/Helmet';
import BlogItem from 'components/UI/BlogItem/BlogItem';
import DiscoverOurRooms from 'components/UI/ComponentSingle/DiscoverOurRooms/DiscoverOurRooms';
import HelpSingle from 'components/UI/ComponentSingle/HelpSingle/HelpSingle';
import NewsLetterSingle from 'components/UI/ComponentSingle/NewsLetterSingle/NewsLetterSingle';
import Tags from 'components/UI/ComponentSingle/Tags/Tags';
import Newslatter from 'components/UI/Newslatter/Newslatter';
import PageTitle from 'components/UI/PageTitle/PageTitle';
import { selectBlogsById } from 'features/blogs/blogsSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

function BlogSingle() {

    const {blogId} = useParams();

    const blog = useSelector(state => selectBlogsById(state, blogId))

    return (
        <Helmet title='Blog'>
             <PageTitle pagetitle={blog.name} pagesub={"Room"} />
             <Container style={{margin: "100px auto"}}>
                <Row>
                    <Col xl='8'>
                        <BlogItem blog={blog}/>
                    </Col>
                    <Col xl='4'>
                        <NewsLetterSingle/>
                        <HelpSingle/>
                        <DiscoverOurRooms/>
                        <Tags/>
                    </Col>
                </Row>
            </Container>
             <Newslatter />
        </Helmet>
    );
}

export default BlogSingle;