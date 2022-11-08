import React from "react";
import StarIcon from "@mui/icons-material/Star";
import './AboutEO.scss'
// import '../../../../'
import AboutEOimg from "../../../../assets/images/about.jpg";
import { NavLink } from "react-router-dom";
const AboutEO = () => {
  return (
    <section className="aboutEO-padding">
      <div className="container">
        <div className="aboutEO-wrapper">
          <div className="aboutEO-wrapper">
            <div className="row align-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="aboutEO-img">
                  <img src={AboutEOimg} alt=""></img>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="aboutEO-content">
                  <div className="aboutEO-title">
                    <span>Exclusive Offer</span>
                    <h2>Enjoy Your Dream Vacation In switzerland</h2>
                  </div>
                  <div className="aboutEO-content-inner">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure.
                    </p>
                    <div className="aboutEO-info-wrap">
                      <div className="aboutEO-info-left">
                        <p>2 Days / 3 Night</p>
                        <ul>
                          <li>
                            <StarIcon></StarIcon>
                          </li>
                          <li>
                            <StarIcon></StarIcon>
                          </li>
                          <li>
                            <StarIcon></StarIcon>
                          </li>
                          <li>
                            <StarIcon></StarIcon>
                          </li>
                          <li>
                            <span>
                              <StarIcon></StarIcon>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="aboutEO-info-right">
                        <p>Only</p>
                        <h3>$2500</h3>
                      </div>
                    </div>
                    <NavLink to="/room" className="aboutEO-theme-btn">
                      Book Now
                    </NavLink>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEO;