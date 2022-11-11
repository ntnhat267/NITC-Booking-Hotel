import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import DiscoverOurRooms from 'components/UI/ComponentSingle/DiscoverOurRooms/DiscoverOurRooms';
import HelpSingle from 'components/UI/ComponentSingle/HelpSingle/HelpSingle';
import NewsLetterSingle from 'components/UI/ComponentSingle/NewsLetterSingle/NewsLetterSingle';
import BlogsList from 'features/blogs/BlogsList';

function BlogBody() {
    return (
        <Container style={{margin: "100px auto"}}>
            <Row >
                <Col xl={8}>
                    <BlogsList main="main"/>
                </Col>
                <Col xl={4}>
                    <NewsLetterSingle/>
                    <HelpSingle/>
                    <DiscoverOurRooms/>
                </Col>
            </Row>
        </Container>
    );
}

export default BlogBody;