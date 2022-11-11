import React from 'react';
import { Col, Row } from 'reactstrap';

import './Tags.scss'

const tags = [
    "Travelling",
    "Hotel",
    "Restaurant",
    "Destination",
    "World Tour",
    "Hotel Room",
    "Spa",
    "Guide"

]

function Tags() {
    return (
        <div className='tags'>
             <h3 className='widget-title-room'>Tags</h3> 
             <Row>
                {tags.map((item, index)=> (
                    <Col key={index}>
                        <p>{item}</p>
                    </Col>
                ))}
             </Row>
        </div>
    );
}

export default Tags;