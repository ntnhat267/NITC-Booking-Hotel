import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchServices, getServicesError, getServicesStatus, selectAllServices } from './servicesSlice';

import Loading from 'components/UI/Loading/Loading';
import Slider from 'components/UI/Slider/Slider';

function ServicesList({main}) {

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

        switch (main) {
            case "main":
                content = <Slider 
                            Slides={services.slice(0,7)} 
                            boolean={"3"}  
                            speed={1000} 
                            breakpoints={{
                                1250 : { slidesPerView: 4},
                                1000: {slidesPerView: 3},
                                800: {slidesPerView: 2},
                                500: {slidesPerView: 1},
                            }}
                            style={{padding: "200px 0"}}
                ></Slider>
                break;
            case "second":
                content = <h1>hi</h1>
                break;
            default:
                break;
        }
    }
    else if (servicesStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default ServicesList;