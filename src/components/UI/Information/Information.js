import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup'
import './Information.scss'
// import '../../../assets'
const Information = ({urlBg, color}) => {

    const [count, setCount] = useState(false)
    return ( 
    <div className='information d-flex justify-content-center w-100' style={{background: `url(${urlBg}) no-repeat 50%`, backgroundAttachment: "fixed",backgroundSize: 'cover', position:'relative'}}>
        <div className='information__wrapper container m-0' style={{color:`${color}`,inset: 0}}>
            <div className='information__wrapper--list  row d-flex align-items-center'>
                <div className='grid col-6 col-lg-3 col-md-6 col-sm-6 information__wrapper--item'>
                    <ScrollTrigger 
                        onEnter={()=> setCount(true)}
                        // onExit={()=> setCount(false)}
                    > 
                    <h3>
                        {count && <CountUp start={200} end={302} duration={1.5} decimal={100} delay={0}></CountUp>}
                        +
                    </h3>
                    </ScrollTrigger>
                    <p>Room & Suites</p>
                </div >
                <div className='grid col-6 col-lg-3 col-md-6 col-sm-6 information__wrapper--item'>
                    <h3> {count && <CountUp start={0} end={25} duration={1.5} decimal={100} delay={0}></CountUp>}</h3>
                    <p>Restaurant</p>
                </div>
                <div className='grid col-6 col-lg-3 col-md-6 col-sm-6 information__wrapper--item'>
                    <h3>
                        {count && <CountUp start={400} end={510} duration={1.5} decimal={100} delay={0}></CountUp>}    
                        +
                    </h3>
                    <p>Exceptional Food</p>
                </div>
                <div className='grid col-6 col-lg-3 col-md-6 col-sm-6 information__wrapper--item'>
                    <h3> {count && <CountUp start={0} end={35} duration={1.5} decimal={100} delay={0}></CountUp>}</h3>
                    <p>Destination</p>
                </div>
            </div>
        </div>
        {urlBg && <div style={{
            position:'absolute',
            inset:0,
            background: '#0d3b5d',
            opacity:"0.7",
            zIndex:1
        }}>hi</div>}
    </div> );
}
 
export default Information;