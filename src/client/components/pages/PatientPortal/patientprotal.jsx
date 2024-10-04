/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import {
  vect1,
  vect2,
  vect3,
  feature7,
  feature8,
  feature9,
  feature10,
  feature11,
  feature12,
  specialities1,
  specialities2,
  specialities3,
  specialities4,
  specialities5,
  patient1,
  patient2,
  patient3,
  patient4,
  aboutimg1,
  aboutimg2,
  aboutimg3,
  phoneicon,
  choose01,
  choose02,
  choose03,
  choose04,
  smilingicon,
  shape06,
  shape07,
  wayimg,
  doctor03,
  doctor04,
  doctor05,
  doctor02,
  shape04,
  shape05,
  client01,
  client02,
  client03,
  client04,
  client05,
  faqimg,
} from "../aboutus/img";
import CountUp from "react-countup";
import Home1Header from "../../home/home-1/header";

const Patientprotal = (props) => {
  let pathname = props.location.pathname;

  if (props.location.pathname === "/pages/aboutus") {
    require("../../../assets/css/feather.css");
  }

  useEffect(() => {
    document.body.classList.add("about-page");

    return () => document.body.classList.remove("about-page");
  }, []);

  const settings = {
    arrows: false,
    dots: true,
    autoplay: false,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
     <Home1Header/>
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Patient Portal</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home-2">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                    Patient Portal
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* About Us */}
        <section className="about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-img-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about-inner-img">
                        <div className="about-img">
                          <img src={aboutimg1} className="img-fluid" alt="" />
                        </div>
                        <div className="about-img">
                          <img src={aboutimg2} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-inner-img">
                        <div className="about-box">
                          <h4>Over 25+ Years Experience</h4>
                        </div>
                        <div className="about-img">
                          <img src={aboutimg3} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="section-inner-header about-inner-header">
                  <h2>
                  We are excited to offer a new patient portal experience to all our patients – healow™.
                  </h2>
                </div>
                <div className="about-content">
                  <div className="about-content-details">
                    <p>
                    healow™ is a sophisticated patient portal tool that allows you to view your health records, interact with your provider, request prescription refills, set up appointments, and much more. You can access it from your computer or download the dynamic mobile app.
                    </p>
                    <p>
                    You will be invited to join our new healow™ patient portal via email. If you are having trouble accessing your account or haven’t received an invitation to our new portal, please either call your local office or fill out an online contact form.
                    </p>
                  </div>
                  <div className="about-contact">
                    <div className="about-contact-icon">
                      <span>
                        <img src={phoneicon} alt="" />
                      </span>
                    </div>
                    <div className="about-contact-text">
                      <p>Access Healow Patient Portal</p>
                      {/* <h4>+1 315 369 5943</h4> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
     
       
        <section className="faq-section faq-section-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h6>Get Your Answer</h6>
                  <h2>Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="faq-img">
                  <img src={faqimg} className="img-fluid" alt="img" />
                  <div className="faq-patients-count">
                    <div className="faq-smile-img">
                      <img src={smilingicon} alt="icon" />
                    </div>
                    <div className="faq-patients-content">
                      <h4>
                        <span className="count-digit">
                          <CountUp start={1} end={95} />
                        </span>
                        k+
                      </h4>
                      <p>Happy Patients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="faq-info">
                  <div className="accordion" id="accordionExample">
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Can i make an Appointment Online with White Plains
                          Hospital Kendi?
                        </Link>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /FAQ Section */}
      </>

      <Footer {...props} />
    </>
  );
};

export default Patientprotal;
