import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchServices, getServicesError, getServicesStatus, selectAllServices } from './servicesSlice';

import Loading from 'components/UI/Loading/Loading';
import Slider from 'components/UI/Slider/Slider';

function ServicesList() {

    const dispatch = useDispatch()

    const services =  useSelector(selectAllServices)
    const servicesStatus = useSelector(getServicesStatus)
    const error = useSelector(getServicesError)

    useEffect(() => {
        if(servicesStatus === 'idle') {
            dispatch(fetchServices())
        }
    },[servicesStatus,dispatch])


    let content;

    if(servicesStatus === 'loading') {
        content = <Loading/>
    } else if (servicesStatus === 'succeeded') {
    let newServices = services.slice(0,7)
    console.log(newServices);
    content = <Slider Slides={newServices} boolean={"3"}  speed={1000} slidesPerView={"4"}></Slider>


    }
    else if (servicesStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div style={{padding: "200px 0"}}>
            {content}
        </div>
    );
}

export default ServicesList;