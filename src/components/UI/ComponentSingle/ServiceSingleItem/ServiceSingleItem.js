import React from 'react';
import './ServiceSingleItem.scss'
function ServiceSingleItem({service}) {
    return (
        <div className='service-single-item'>
            <div className='service-single-item__img'>
                <img src={service.image} alt={service.name} className='w-100'/>
            </div>
            <h2>{service.name}</h2>
            <p >{service.content}</p>
        </div>
    );
}

export default ServiceSingleItem;