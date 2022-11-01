import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'
import erimg from '../../../assets/images/error.png'

const ErrorPage = (props) => {
    return (
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <img src={erimg} alt="" />
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                <Link
                                    to="/home"
                                    style={{
                                        background: '#fc4c4c',
                                        border: 0,
                                        borderRadius: '6px',
                                        color: '#fff',
                                        display: 'inline-block',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        padding: '15px 45px',
                                        position: 'relative',
                                        zIndex: 1,
                                        textTransform: 'capitalize'
                                    }}
                                >Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;