import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import FeatherIcon from "feather-icons-react";
import Home1Header from "../../home/home-1/header";
import Home1Footer from "../../home/home-1/footer";

const Contacts = (props) => {
  return (
    <>
    <Home1Header/>

      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Contact Us</h2>
                
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Contact Us */}
        <section className="contact-section">
          
          <div className="container">
            <div className="row">
            <h3 className="m-3">
          Tell us about yourself.
          </h3>
              <div className="col-lg-12 col-md-12 d-flex">
                <div className="card contact-form-card w-100">
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="DOB"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Age"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                            />
                          </div>
                        </div>
                         {/* Phone Number with Country Code */}
  <div className="col-md-6">
    <div className="form-group">
      <div className="input-group">
        {/* Country Code Dropdown */}
        <select className="form-select" style={{ maxWidth: '140px' }}>
          <option value="+1">+1 (USA)</option>
          <option value="+91">+91 (India)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+61">+61 (Australia)</option>
          <option value="+81">+81 (Japan)</option>
          {/* Add more country codes as needed */}
        </select>
        {/* Phone Number Input */}
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
        />
      </div>
    </div>
  </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label>Services</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Services"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              className="form-control"
                              placeholder="Enter your comments"
                              defaultValue={""}
                            />
                          </div>
                        </div> */}
                        <div className="col-md-12 text-end">
                          <div className="form-group form-group-btn mb-0">
                            <button
                              type="submit"
                              className="btn btn-primary prime-btn"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Contact Us */}
        {/* Contact Map */}
        {/* <section className="contact-map d-flex">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.7301009561315!2d-76.13077892422932!3d36.82498697224007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae976cfe9f8af%3A0xa61eac05156fbdb9!2sBeachStreet%20USA!5e0!3m2!1sen!2sin!4v1669777904208!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section> */}
        {/* /Contact Map */}
      </>
     <Home1Footer/>
    </>
  );
};

export default Contacts;
