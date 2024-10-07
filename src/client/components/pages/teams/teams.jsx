/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import Accordion from 'react-bootstrap/Accordion';

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
import Aboutlist from "../../JSON/about.json"

const Teams = (props) => {
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
      <Home1Header />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar-two">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <h2 className="breadcrumb-title">Our experts team</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                    Our experts team
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
          {Aboutlist.map((item, index)=>(
            <div className="container mt-5">
            <div className={`row align-items-center ${index % 2 === 0 ? "flex-row-reverse " : ""
                }`}>
              <div className={`col-lg-6 col-md-12 ${index % 2 === 0 ? "text-end" : ""}`}>
                <ImageWithBasePath
                  src="assets/img/about/ID size.jpg"
                  className="img-fluid"
                  alt="patient-image"
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="section-inner-header about-inner-header">
                  <h2>
                    {item.title} {" "}
                    <span className="fs-5">
                    {item.author}
                    </span>
                  </h2>
                </div>
                <div className="about-content">
                  <div className="about-content-details">
                    <p>
                    {item.read_more_url}
                    </p>
                    <p>
                    {item.description}
                    </p>
                  </div>
                  {/* <div className="about-contact">
                    <div className="about-contact-icon">
                      <span>
                        <img src={phoneicon} alt="" />
                      </span>
                    </div>
                    <div className="about-contact-text">
                      <p>Book An Apponitment</p>
                      <h4>+1 315 369 5943</h4>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
           </div>
          ))}
        
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

export default Teams;
