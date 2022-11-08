import React from 'react';
import { NavLink } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';
import './HelpSingle.scss'

function HelpSingle(props) {
    return (
        <div className='help-single'>
            <h2>How We Can Help You!</h2>
            <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <NavLink to='/contact' >
                Contact Us 
                <EastIcon sx={{fontSize: 30}}/>
            </NavLink>
        </div>
    );
}

export default HelpSingle;