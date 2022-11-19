import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./ExclusiveOffer.scss"
import { NavLink } from "react-router-dom";

const ExclusiveOffer = () => {
  return (
    <div className="homebody" style={{}}>
      <div className="container homebody-wrapper">
        <div className="col-xl-5 col-lg-6 col-md-8 col-12 offset-xl-6 offset-lg-4 offset-md-2">
          <div className="exclusiveoffer-content">
            <div className="exclusiveoffer-title">
              <span>Exclusive Offer</span>
              <h2>Enjoy Your Dream Vacation In switzerland</h2>
            </div>
            <div className="exclusiveoffer-content-inner">
              <div className="exclusiveoffer-info-wrap">
                <div className="exclusiveoffer-info-left">
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
                <div className="exclusiveoffer-info-right">
                  <p>Only</p>
                  <h3>$2500</h3>
                </div>
                <div className="theme-btn-wrap">
                  <button className="theme-btn">
                    <NavLink to='/room'>
                      Book Now
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffer;