import React from 'react';
import { NavLink } from 'react-router-dom';

import './NewsLetterSingle.scss'

function NewsLetterSingle(props) {
    return (
        <div className='newsletter-single'>
            <h2>Newsletter</h2>
            <p>Join 20,000 Sabscribers!</p>
            <form>
                <input placeholder='Email Address'/>
                <button type='submit'>Singup</button>
            </form>
            <span>By signing up you agree to our 
                <NavLink to='/login'>Privecy Policy</NavLink>
            </span>
        </div>
    );
}



export default NewsLetterSingle;