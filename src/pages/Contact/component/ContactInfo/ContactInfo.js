import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
// import "./ContactInfo.scss";
import "./Contact.scss"
const ContactInfo = () => {
  return (
    <div className="wpo-contact-section section-padding">
      <div className="container">
        <div className="col col-lg-10 offset-lg-1">
          <div className="contact-info">
            <div className="row">

              <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="info-item">
                  <div className="contact-icon">
                    <div className="icon-wrapper">
                      <RoomIcon className="icon"></RoomIcon>
                    </div>
                  </div>
                  <div className="contact-text">
                    <h2>Address</h2>
                    <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="info-item">
                  <div className="contact-icon">
                    <div className="icon-wrapper">
                      <EmailIcon className="icon"></EmailIcon>
                    </div>
                  </div>
                  <div className="contact-text">
                    <h2>Email Us</h2>
                    <p>parador@gmail.com</p>
                    <p>parador@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                <div className="info-item">
                  <div className="contact-icon">
                    <div className="icon-wrapper">
                      <PhoneIcon className="icon"></PhoneIcon>
                    </div>
                  </div>
                  <div className="contact-text">
                    <h2>Call Now</h2>
                    <p>+1 800 123 654 987</p>
                    <p>+1 800 123 654 987</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div className="contact-title">
          <h2>Have Any Questions?</h2>
          <p>
            It is a long established fact that a reader will be distracted
            content of a page when looking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;