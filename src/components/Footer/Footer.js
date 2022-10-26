import React from 'react';
import Logo from '../../assets/images/logo2.png'
import { Link } from 'react-router-dom'
import Services from '../../api/Services'
import "./Footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className='footer'>
            <div className='upper-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-3 col-lg-3 col-md-6 col-sm-12 col-12'>
                            <div className='widget about-widget'>
                                <div className='logo widget-title'>
                                    <img src={Logo} alt='logo-footer' />
                                </div>
                                <p>Management consulting includes a broad range of activities, and the many firms and their members often define these practices.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <FacebookIcon sx={{ fontSize: { xs: 25, lg: 30 }, color: '#ffffff', borderRadius: '50%' }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <TwitterIcon sx={{ fontSize: { xs: 25, lg: 30 }, color: '#ffffff', borderRadius: '50%' }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <InstagramIcon sx={{ fontSize: { xs: 25, lg: 30 }, color: '#ffffff', borderRadius: '50%' }} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <GoogleIcon sx={{ fontSize: { xs: 25, lg: 30 }, color: '#ffffff', borderRadius: '50%' }} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget s1">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, sitem) => (
                                        <li key={sitem}>
                                            <Link
                                                onClick={ClickHandler}
                                                to={`/service-single/${service.id}`}
                                                style={{ fontSize: { xs: 17, lg: 35 }, color: '#ffffff', lineHeight: '2.3em' }}
                                            >
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Important Link</h3>
                                </div>
                                <ul>
                                    <li><Link
                                        onClick={ClickHandler}
                                        to="/About"
                                        style={{ fontSize: { xs: 17, lg: 35 }, color: '#ffffff', lineHeight: '2.3em' }}
                                    >About Us</Link></li>
                                    <li><Link
                                        onClick={ClickHandler}
                                        to="/Destination"
                                        style={{ fontSize: { xs: 17, lg: 35 }, color: '#ffffff', lineHeight: '2.3em' }}
                                    >Populer Destinition</Link></li>
                                    <li><Link
                                        onClick={ClickHandler}
                                        to="/Room"
                                        style={{ fontSize: { xs: 17, lg: 35 }, color: '#ffffff', lineHeight: '2.3em' }}
                                    >Awesome Rooms</Link></li>
                                    <li><Link
                                        onClick={ClickHandler}
                                        to="/Service"
                                        style={{ fontSize: { xs: 17, lg: 35 }, color: '#ffffff', lineHeight: '2.3em' }}
                                    >Our Services</Link></li>
                                    <li><Link
                                        onClick={ClickHandler}
                                        to="/Pricing"
                                        style={{ fontSize: { xs: 17, lg: 35 }, color: '#ffffff', lineHeight: '2.3em' }}
                                    >Pricing Plan</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><LocationOnIcon style={{ left: 0, top: '8px', position: 'absolute', width: '1.5em', height: '1.5em' }} />7 Green Lake Street Crawfordsville, IN
                                            47933</li>
                                        <li><PhoneIcon style={{ left: 0, top: '8px', position: 'absolute', width: '1.5em', height: '1.5em' }} />+1 800 123 456 789</li>
                                        <li><SendIcon style={{ left: 0, top: '8px', position: 'absolute', width: '1.5em', height: '1.5em' }} />parador@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lower-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-xs-12'>
                            <p className="copyright"> Copyright &copy; 2022 Parador by <Link onClick={ClickHandler} to="/" style={{ color: '#fff', textDecoration: 'none' }}>wpOceans</Link>.
                                All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;