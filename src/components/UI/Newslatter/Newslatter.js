import React from 'react';
import Shape1 from '../../../assets/images/n-shape1.png'
import Shape2 from '../../../assets/images/n-shape2.png'
import './Newslatter.scss'
// import '../../../assets'
const SubmitHandler = (e) => {
    e.preventDefault()
}

const Newslatter = (props) => {

    return (
        <section className={`newslatter-section section-padding ${props.nClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="section-title-s2">
                            <h2>Subscribe & Get Special Discount!</h2>
                            <p>Don’t Wanna Miss Somethings? Subscribe Right Now And Get The Special
                                Discount And Monthly Newsletter.</p>
                        </div>
                    </div>
                </div>
                <div className="newsletter">
                    <div className="newsletter-form">
                        <form onSubmit={SubmitHandler}>
                            <input type="email" className="form-control"
                                placeholder="Enter Your Email Address..." required />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="n-shape">
                <img src={Shape1} alt="" />
            </div>
            <div className="n-shape2">
                <img src={Shape2} alt="" />
            </div>
        </section>
    )
}


export default Newslatter;