import React from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './SmoothScroll.scss'

function SmoothScroll(props) {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className='smoothscroll'>
            <div className='smoothscroll__wrapper' onClick={ClickHandler}>
                <ArrowUpwardIcon></ArrowUpwardIcon>
            </div>
            
        </div>
    );
}

export default SmoothScroll;