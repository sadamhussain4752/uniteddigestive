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
import Home1Footer from "../../home/home-1/footer";

const Aboutus = (props) => {
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
                <h2 className="breadcrumb-title">About Us</h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home-2">Home</Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      About Us
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
                <ImageWithBasePath
                  src="assets/img/ShabeerAhmed.png"
                  className="img-fluid"
                  alt="patient-image"
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="section-inner-header about-inner-header">
                  <h6> Our About </h6>
                  <h2>
                    Dr. Shabeer Ahmed
                  </h2>
                </div>
                <div className="about-content">
                  <div className="about-content-details">
                    <p>
                      Gastrointestinal, Bariatric, Laparoscopic, General & Onco Surgeon
                    </p>
                    <p>
                      An eminent senior consultant Gastrointestinal & Laparoscopic and Bariatric Surgeon with over 30 years of extensive surgical experience. He is also an acknowledged teacher and mentor by Association of Laparoscopic Surgery (ALS), UK. His special expertise lies in advanced laparoscopic surgery especially for gastro-intestinal cancer. He has his passion for Video Assisted Thoracic Surgery (VATS), Bariatric Surgery and Metabolic Surgery.
                    </p>
                  </div>
                  <div className="about-contact">
                    <div className="about-contact-icon">
                      <span>
                        <img src={phoneicon} alt="" />
                      </span>
                    </div>
                    <div className="about-contact-text">
                      <p>Book An Apponitment</p>
                      {/* <h4>+1 315 369 5943</h4> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Us */}
        {/* Why Choose Us */}
        <section className="why-choose-section">
          <div className="container">
            <div className="row" id="abt-faqs">
              <div className="col-md-8 ">

                <h3>  Queen Elizabeth Hospital, Birmingham</h3>

                <p class="abt-cont">
                  He further established a laparoscopic centre at Queen Elizabeth Hospital, Birmingham, where he had successfully performed around 240 cases of colorectal cancers laparoscopically. These numbers were recognized by the Association of Laparoscopic Surgery (ALS) and he was made a “Preceptor”, who went around various parts of UK to train surgeons
                </p>


                <h3>
                  Areas of Expertise
                </h3>

                <p class="abt-cont">
                  Advanced laparoscopic surgery especially for gastrointestinal cancer. He has his passion for Video-Assisted Thoracic Surgery (VATS), Bariatric Surgery and Metabolic Surgery. Robotic Surgery and Stem Cell Therapy
                </p>


                <h3>
                  Education & Training
                </h3>

                <p class="abt-cont">
                  After having completed his Doctor of Medicine with honors from Madras University (1986), he pursued his MS from Mysore University (1989). He was further trained for 8 years as a surgeon in the Republic of Ireland (1989 -1996). He obtained his FRCS from England in 1995. He joined Professor Alfred Cuscheri in Nine well Hospital, Scotland with his passion for Minimal Access Surgery and later was awarded with Master in Minimal Access Surgery (MMAS) from Dundee University, Scotland. He also spent his one full year doing research in laparoscopic handling and submitted a thesis in 2002.
                </p>

                <p class="abt-cont">
                  He was appointed as a consultant colorectal surgeon in the republic of Ireland from 1998 – 2001. He was later appointed as a consultant colorectal surgeon in Queen Margaret Hospital, Dunfermline, Scotland for 4 years.
                </p>

                <p class="abt-cont">
                Currently doing a Ph.D in Stem Cell, Regenerative, and Tissue Engineering.
                </p>



                <h3>
                  Work Experience
                </h3>
                <p class="abt-cont">
                  Dr. Shabeer Ahmed has experience of over 38 years in the field of gastrointestinal & laparoscopic surgery.
                </p>



              </div>
              <div className="col-lg-4 col-md-6 d-flex">

                <div className="card contact-form-card w-100 form-bg1">
                  <h3 className="abt-form-heed text-center">
                    Book An Appointment
                  </h3>
                  <div className="card-body">
                    <form action="#">

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="comments"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group form-group-btn mb-0">
                          <button
                            type="submit"
                            className="btn btn-primary prime-btn"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div >
        </section >
        {/* /Why Choose Us */}
        {/* Way Section */}
        <section className="way-section d-none">
          <div className="container">
            <div className="way-bg">
              <div className="way-shapes-img">
                <div className="way-shapes-left">
                  <img src={shape06} alt="" />
                </div>
                <div className="way-shapes-right">
                  <img src={shape07} alt="" />
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-lg-7 col-md-12">
                  <div className="section-inner-header way-inner-header mb-0">
                    <h2>Be on Your Way to Feeling Better with the Dr. Shabeer Ahmed</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <Link to="/contactus" className="btn btn-primary">
                      Contact With Us
                    </Link>
                  </div>{" "}
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="way-img">
                    <img src={wayimg} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Way Choose Us */}
        {/* Doctors Section */}
        <section className="doctors-section professional-section d-none">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-inner-header text-center">
                  <h2>Best Doctors</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Doctor Item */}
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor03} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 200</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">
                          Dr. Ruby Perrin
                        </Link>
                        <p>Cardiology</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.5
                          </span>{" "}
                          (35)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin" /> Newyork, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Item */}
              {/* Doctor Item */}
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor04} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 360</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">
                          Dr. Darren Elder
                        </Link>
                        <p>Neurology</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.0
                          </span>{" "}
                          (20)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin" /> Florida, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Item */}
              {/* Doctor Item */}
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor05} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 450</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">
                          Dr. Sofia Brient
                        </Link>
                        <p>Urology</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.5
                          </span>{" "}
                          (30)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin" /> Georgia, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Item */}
              {/* Doctor Item */}
              <div className="col-lg-3 col-md-6 d-flex">
                <div className="doctor-profile-widget w-100">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <img src={doctor02} className="img-fluid" alt="" />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$ 570</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">
                          Dr. Paul Richard
                        </Link>
                        <p>Orthopedic</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.3
                          </span>{" "}
                          (45)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather-map-pin" /> Michigan, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Doctor Item */}
            </div>
          </div>
        </section>
        {/* /Doctors Section */}
        {/* Testimonial Section */}
        {/* <Testimonial /> */}
        {/* /Testimonial Section */}
        {/* FAQ Section */}
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

     <Home1Footer/>
    </>
  );
};

export default Aboutus;
