import React, { useEffect } from "react";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProgressButton from "../../common/progress/progress";
import Cursor from "../../common/cursor/cursor";

const Home1Footer = () => {
  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {" "}
      {/* Footer */}
      <footer className="footer footer-one">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            {/* <div className="footer-widget footer-about">
              <div className="footer-logo text-center">
                <a href="index.html">
                  <ImageWithBasePath src="assets/img/logo-010.svg" alt="logo" />
                </a>
              </div>

            </div> */}
            <hr />
            <div className="row">
              <div className="col-lg-3 col-md-4">


                <div className="footer-contact-info">
                  <h2 className="footer-title text-dark">
                    Contact Us
                  </h2>
                  <div className="footer-address">
                    <p>
                      <i className="feather icon-map-pin" /> Richmond Road, Mother Teresa Rd, Entry from, behind Sacred Heart School Sacred Heart Church, Richmond Town, Bengaluru, Karnataka 560025
                    </p>
                  </div>
                  <div className="footer-address">
                    <p>
                      <i className="feather icon-phone-call" /> +91
                      990 024 6002
                    </p>
                  </div>
                  <div className="footer-address mb-0">
                    <p>
                      <i className="feather icon-mail" />
                     { " "} drshabeerahmed@gmail.com
                    </p>
                  </div>
                </div>

                <div className="footer-widget">
                  {/* <h2 className="footer-title">Join Our Newsletter</h2>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                      <button type="submit" className="btn">
                        Submit
                      </button>
                    </form>
                  </div> */}


                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">
                        For Patients</h2>
                      <ul>
                        <li>
                          <a href="index.html">
                            Providers
                          </a>
                        </li>
                        <li>
                          <a href="search.html">
                            Locations
                          </a>
                        </li>
                        <li>
                          <a href="video-call.html">
                            Services
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            GI Health Library
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            Partner Practices
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>


                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">
                        Patient Resources
                      </h2>

                      <ul>

                        <li>
                          <a href="search.html">
                            Schedule Appointment
                          </a>
                        </li>
                        <li>
                          <a href="video-call.html">
                            Your Visit
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            Medical Record Information
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            Patient Portal
                          </a>
                        </li>


                        <li>
                          <a href="video-call.html">
                            Pay Bill
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            Contact Us
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            Procedure Preparation
                          </a>
                        </li>

                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">
                        Additional Resources
                      </h2>
                      <ul>






                        <li>
                          <a href="index.html">
                            Direct Access Colonoscopy
                          </a>
                        </li>
                        <li>
                          <a href="search.html">
                            Colon Cancer Screening
                          </a>
                        </li>
                        <li>
                          <a href="video-call.html">
                            Hemorrhoid Banding
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            Referring Providers
                          </a>
                        </li>


                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">
                        Company
                      </h2>
                      <ul>
                        <li>
                          <a href="index.html">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="search.html">
                            News & Updates
                          </a>
                        </li>
                        <li>
                          <a href="video-call.html">
                            Corporate Development
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            Physician Careers
                          </a>
                        </li>

                        <li>
                          <a href="video-call.html">
                            All Careers
                          </a>
                        </li>


                      </ul>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">
                      Copyright © 2024 Dr. Shabeer Ahmed. All Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  {/* Copyright Menu */}
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="terms-condition.html">Terms and Conditions</a>
                      </li>
                    </ul>
                  </div>
                  {/* /Copyright Menu */}
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
      </footer>
      {/* /Footer */}
      <ProgressButton />
      <Cursor />
    </>
  );
};

export default Home1Footer;
