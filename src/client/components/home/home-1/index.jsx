import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import Home1Footer from "./footer";
import Home1Header from "./header";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Calendar } from "primereact/calendar";
import expertise from "../../JSON/expertise.JSON";
import {
  aboutimg1,
  aboutimg2,
  aboutimg3,
  phoneicon,
} from "../../pages/aboutus/img";
import CountUp from "react-countup";
import Blogslist from "../../JSON/Blogs.json";
import medicals from "../../JSON//GUI.json";

const Home1 = () => {
  const [date1, setDate1] = useState(null);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const populartestslider = {
    loop: true,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  };

  const consultingSlider = {
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-play"></i>',
      '<i class="fa-solid fa-play"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      1300: {
        items: 1,
      },
    },
  };
  const ourNew = {
    loop: true,
    margin: 24,
    dots: true,
    freeDrag: true,
    nav: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
      },
    },
  };
  const specialitiesSlider = {
    loop: false,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navContainer: ".slide-nav-1",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 6,
      },
    },
  };
  const bestDoctorsSlider = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navContainer: ".slide-nav-2",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  };
  const partnersSlider = {
    loop: true,
    margin: 24,
    nav: true,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },

      550: {
        items: 1,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };
  const testimonialSlider = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 2000,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main-wrapper home-one">
      <Home1Header />
      {/* Home Banner */}
      <section className="banner-section">
        <div className="medical-emergency-booking">
          <div className="doctor-consulting-slider">
            <OwlCarousel {...consultingSlider}>
              <div className="medical-emergency-card">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="slider-img">
                      <ImageWithBasePath
                        src="assets/img/bg/slider-bg-img.png"
                        className="banner-images w-75"
                        alt="Img"
                        sty
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="slider-content aos"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <h3>Bad Gut Health?</h3>
                      <span>Nourish Your Gut, Flourish Your Health</span>
                      <p>
                        Get a test report in an Hour &amp; care your heart at
                        our Specialist Advice
                      </p>
                      <Link to="/patient/booking2">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="medical-emergency-card">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="slider-img">
                      <ImageWithBasePath
                        src="assets/img/bg/slider-bg-img.png"
                        className="banner-images w-75"
                        alt="Img"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="slider-content">
                      <h3>Chest Pain?</h3>
                      <span>Check if you are risk at a Heart Attack</span>
                      <p>
                        Get a test report in an Hour &amp; care your heart at
                        our Specialist Advice
                      </p>
                      <Link to="/patient/booking2">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="medical-emergency-card">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="slider-img">
                      <ImageWithBasePath
                        src="assets/img/bg/slider-bg-img.png"
                        className="banner-images w-75"
                        alt="Img"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="slider-content aos"
                      data-aos="fade-up"
                      data-aos-delay={600}
                    >
                      <h3>Chest Pain?</h3>
                      <span>Check if you are risk at a Heart Attack</span>
                      <p>
                        Get a test report in an Hour &amp; care your heart at
                        our Specialist Advice
                      </p>
                      <Link to="/patient/booking2">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
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
                {/* <h6> Our About </h6> */}
                <h2>Dr. Shabeer Ahmed</h2>
              </div>
              <div className="about-content">
                <div className="about-content-details">
                  <h4>
                    Gastrointestinal, Bariatric, Laparoscopic, General & Onco
                    Surgeon
                  </h4>
                  <p>
                    An eminent senior consultant Gastrointestinal & Laparoscopic
                    and Bariatric Surgeon with over 30 years of extensive
                    surgical experience. He is also an acknowledged teacher and
                    mentor by Association of Laparoscopic Surgery (ALS), UK. His
                    special expertise lies in advanced laparoscopic surgery
                    especially for gastro-intestinal cancer. He has his passion
                    for Video Assisted Thoracic Surgery (VATS), Bariatric
                    Surgery and Metabolic Surgery.{" "}
                    <span>
                      <Link to="/pages/aboutus">
                        <h6 className="text-black mt-2"> Read More </h6>
                      </Link>
                    </span>
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
      <section className="counter-section">
        <div className="ban-bg">
          <ImageWithBasePath
            src="assets/img/bg/counter-bg.png"
            alt="design-image"
            className="img-fluid bg-06"
          />
          <ImageWithBasePath
            src="assets/img/bg/counter-bg-01.png"
            alt="eye-image"
            className="img-fluid bg-07"
          />
        </div>
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="text-white">Driven by a Commitment to Excellence</h3>
          </div>
          <div className="text-center mb-5">
            <h5 className="text-white">
              I continually strives to improve the health and well-being of
              every patient, one successful treatment at a time
            </h5>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-02.svg"
                    alt="stethoscope"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={37} duration={5} className="count-digit" />+
                  </h3>
                  <p>Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 ">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-01.svg"
                    alt="doctor-image"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={3000} duration={5} className="count-digit" />+
                  </h3>
                  <p>Laparoscopic Surgeries</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-03.svg"
                    alt="smiley-icon"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={5000} duration={5} className="count-digit" />+
                  </h3>
                  <p>Happy Patientss</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/count-04.svg"
                    alt="award-icon"
                    className="img-fluid"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={4000} duration={5} className="count-digit" />+
                  </h3>
                  <p>Successful Treatments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="container">
          <div className="row">
          <div className="section-header-one aos text-centers" data-aos="fade-up">
                {/* <h5>How it Works</h5> */}
                <h2 className="section-title text-centers">
                  Wide-Ranging Services with a Personal Approach
                </h2>
              </div>
            <div
              className="col-lg-4 col-md-12 work-img-info aos"
              data-aos="fade-up"
            >
              <div className="work-img">
                <ImageWithBasePath
                  src="assets/img/bannerwar.jpg"
                  className="img-fluid"
                  alt="doctor-image"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 work-details">
              
              <div data-aos="fade-up">
                <p className="mt-4 mb-4">
                  From minor GI complaints to chronic digestive conditions,
                  United Digestive’s partner practices offer patients
                  best-in-class care in safe, convenient environments with
                  top-notch, award-winning providers. Come see what makes United
                  Digestive different. Top services include:
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                           src="assets/img/icons/Colonoscopy.svg"
                          alt="search-doctor-icon"
                          className="rounded"
                        />
                      </span>
                    </div>
                    <div className="work-content mt-4">
                      <h5>Colonoscopy</h5>
                      {/* <p>
                        See if you qualify to skip the pre-procedure office
                        visit.{" "}
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/Upper GI.svg"
                          alt="doctor-profile-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content mt-4">
                      <h5>Upper GI</h5>
                      {/* <p>See if you qualify for hemorrhoid banding.</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/Hemorrhoid Banding.svg"
                          alt="calendar-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content mt-4">
                      <h5>Hemorrhoid Banding</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/Infusion.svg"
                          alt="solution-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content mt-4">
                      <h5>Infusion</h5>
                      {/* <p>
                        Discuss your health concerns with the doctor and receive
                        personalized advice &amp; solution.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/Nutrition Counseling.svg"
                          alt="calendar-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content mt-4">
                      <h5>Nutrition Counseling</h5>
                      {/* <p>
                        After choose your preferred doctor, select a convenient
                        time slot, &amp; confirm your appointment.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/Abdominal Ultrasound.svg"
                          alt="solution-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content mt-4">
                      <h5>Abdominal Ultrasound</h5>
                      {/* <p>
                        Discuss your health concerns with the doctor and receive
                        personalized advice &amp; solution.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Specialities Section */}

      <section className="services-section-sixteen">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-sixteen text-center">
                {/* <p>Recapture the beauty of self-confidence</p> */}
                <h2>My Expertise Area</h2>
              </div>
            </div>
          </div>
          <OwlCarousel
            {...ourNew}
            className="owl-carousel custom-slide discover-slider owl-theme"
          >
            {expertise.map((item, index) => (
              <Link to={`specialites/${index + 1}`}>
                <div className="discover-you-main">
                  <div className="discover-you-image">
                    <ImageWithBasePath
                     src={`assets/img/icons/${item.imageUrl}`}
                      alt="Body"
                      className="w-75"
                    />
                  </div>
                  <Link to="#">{item.title}</Link>
                  <p>{item.description?.slice(0, 50)}...</p>
                  <Link to="#" className="discov-innner">
                    Read More
                    <i className="fa-solid fa-chevron-right ms-2" />
                  </Link>
                </div>
              </Link>
            ))}
          </OwlCarousel>
        </div>
        <div className="service-sixteen-icon">
          <ImageWithBasePath
            src="assets/img/service-sixteen-icon.png"
            className="bg-img-top"
            alt="Section bg"
          />
          {/* <ImageWithBasePath
              src="assets/img/bg/vector-bg-03.png"
              className="bg-img-bottom"
              alt="Section bg"
            /> */}
        </div>
      </section>

      <section className="popular-test-section">
        <div className="section-small-imgs">
          <ImageWithBasePath
            src="assets/img/bg/section-bg-01.jpg"
            className="bg-img-one"
            alt="Img"
          />
          <ImageWithBasePath
            src="assets/img/bg/section-bg-02.png"
            className="bg-img-two"
            alt="Img"
          />
        </div>
        <div className="container">
          <div className="section-head-twelve">
            <h2> Gut Health Library</h2>
            <p>
              Discover Our Popular Lab Tests, Unlock Key Health Insights with
              Trusted Diagnostic Services.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="popular-test-slider">
                <OwlCarousel {...populartestslider}>
                  {medicals.map((item,index) => (
                    <div className="test-slider-card " data-aos="fade-up">
                      <span className="w-75 h-75">
                        <ImageWithBasePath
                          src={`assets/img/icons/${item.path}`}
                          alt="Img"
                        />
                      </span>
                      <h4 className="fs-5">
                        <Link to={`guthealth-details/${index +1}`}>{item.title}</Link>
                      </h4 >
                      <p>{item.description.slice(0,45)}...</p>
                      <Link to={`guthealth-details/${index +1}`} className="read-more-test">
                        Read More
                      </Link>
                    </div>
                  ))}

                 
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Specialities Section */}
      {/* Doctors Section */}
      {/* <section className="doctors-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider text-center">
                <h2 className="section-title">Best Doctors</h2>
              </div>
            </div>
          </div>
          <div className="doctor-slider-one owl-theme aos" data-aos="fade-up">
            <OwlCarousel {...bestDoctorsSlider}>
            
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-03.jpg"
                          className="img-fluid"
                          alt="Ruby Perrin"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$200</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. Downer</Link>
                        <p>Orthopedic</p>
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
                        <i className="feather icon-map-pin" /> Newyork, USA
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-02.jpg"
                          className="img-fluid"
                          alt="Paul Richard"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$300</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. John Doe</Link>
                        <p>Dentist</p>
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
                        <i className="feather icon-map-pin" /> Austin, TX
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-04.jpg"
                          className="img-fluid"
                          alt="Darren Elder"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$100</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. Aviles</Link>
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
                        <i className="feather icon-map-pin" /> Newyork, USA
                      </p>
                      <span className="badge badge-danger doc-badge">
                        <i className="fa-solid fa-circle" />
                        Unavailable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-05.jpg"
                          className="img-fluid"
                          alt="Sofia Brient"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$250</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">Dr. Palmore</Link>
                        <p>Immunologist</p>
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
                        <i className="feather icon-map-pin" /> Waipahu, HI
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="item">
                <div className="doctor-profile-widget doc-item">
                  <div className="doc-pro-img">
                    <Link to="/patient/doctor-profile">
                      <div className="doctor-profile-img">
                        <ImageWithBasePath
                          src="assets/img/doctors/doctor-01.jpg"
                          className="img-fluid"
                          alt="John Doe"
                        />
                      </div>
                    </Link>
                    <div className="doctor-amount">
                      <span>$880</span>
                    </div>
                  </div>
                  <div className="doc-content">
                    <div className="doc-pro-info">
                      <div className="doc-pro-name">
                        <Link to="/patient/doctor-profile">
                          Dr. Paul Richard
                        </Link>
                        <p>Dentist</p>
                      </div>
                      <div className="reviews-ratings">
                        <p>
                          <span>
                            <i className="fas fa-star" /> 4.4
                          </span>{" "}
                          (50)
                        </p>
                      </div>
                    </div>
                    <div className="doc-pro-location">
                      <p>
                        <i className="feather icon-map-pin" /> California, USA
                      </p>
                      <span className="badge badge-success doc-badge">
                        <i className="fa-solid fa-circle" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}

      {/* /Work Section */}
      {/* Articles Section */}
      <section className="articles-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one text-center">
                <h2 className="section-title">Latest Articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {Blogslist.map((i, index) => (
              <div className="col-lg-6 col-md-6 d-flex aos" data-aos="fade-up">
                <div className="articles-grid w-100">
                  <div className="articles-info">
                    <div className="articles-left">
                      <Link to="/blog/blog-details">
                        <div className="articles-img">
                          <ImageWithBasePath
                            src="assets/img/blog/blog-11.jpg"
                            className="img-fluid"
                            alt="John Doe"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="articles-right">
                      <div className="articles-content">
                        <ul className="articles-list nav">
                          <li>
                            <i className="feather icon-user" />
                            {i.author}
                          </li>
                          <li>
                            <i className="feather icon-calendar" /> {i.date}
                          </li>
                        </ul>
                        <h4>
                          <Link to="/blog/blog-details">{i.title}</Link>
                        </h4>
                        <p>{i.description}</p>
                        <Link to={`blog-details/${index + 1}`} className="btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Articles Section */}
      {/* App Section */}
      {/* <section className="app-section pt-0">
        <div className="container">
          <div className="app-bg">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12">
                <div className="app-content">
                  <div className="app-header aos" data-aos="fade-up">
                    <h5>Working for Your Better Health.</h5>
                    <h2>Download the Dr. Shabeer Ahmed App today!</h2>
                  </div>
                  <div className="app-scan aos" data-aos="fade-up">
                    <p>Scan the QR code to get the app now</p>
                    <ImageWithBasePath
                      src="assets/img/scan-img.png"
                      alt="scan-image"
                    />
                  </div>
                  <div className="google-imgs aos" data-aos="fade-up">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/icons/google-play-icon.svg"
                        alt="img"
                      />
                    </Link>
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/icons/app-store-icon.svg"
                        alt="img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                <div className="mobile-img">
                  <ImageWithBasePath
                    src="assets/img/mobile-img.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* /App Section */}
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>Get Your Answer</h5>
                <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="faq-img">
                <ImageWithBasePath
                  src="assets/img/faq-img.png"
                  className="img-fluid"
                  alt="img"
                />
                {/* <div className="faq-patients-count">
                  <div className="faq-smile-img">
                    <ImageWithBasePath
                      src="assets/img/icons/smiling-icon.svg"
                      alt="icon"
                    />
                  </div>
                
                </div> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
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
                        How do I book an appointment with a doctor?
                      </Link>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, simply visit our website and log in or create
                            an account. Search for a doctor based on
                            specialization, location, or availability &amp;
                            confirm your booking.
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
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I request a specific doctor when booking my
                        appointment?
                      </Link>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, you can usually request a specific doctor when
                            booking your appointment, though availability may
                            vary based on their schedule.
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
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What should I do if I need to cancel or reschedule my
                        appointment?
                      </Link>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            If you need to cancel or reschedule your
                            appointment, contact the doctor as soon as possible
                            to inform them and to reschedule for another
                            available time slot.
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
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What if I'm running late for my appointment?
                      </Link>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            If you know you will be late, it's courteous to call
                            the doctor's office and inform them. Depending on
                            their policy and schedule, they may be able to
                            accommodate you or reschedule your appointment.
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
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can I book appointments for family members or
                        dependents?
                      </Link>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>
                            Yes, in many cases, you can book appointments for
                            family members or dependents. However, you may need
                            to provide their personal information and consent to
                            do so.
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
      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider slick">
                <Slider {...testimonialSlider}>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-content">
                        <div className="section-header-one section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2 className="section-title">Arati Sethy</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Amidst of covid pandemic, my aunt got diagnosed with
                            colon tumor. Local doctors diagnosed it as cancer
                            stage-1. As they stay in my native place Odisha, we
                            were clueless what to do. I live in bangalore. One
                            of my colleague referred Dr. Shabeer. With no delay,
                            i took his appointment and rushed to him. After
                            going through the reports without even checking the
                            patient, he said chemo may not be required. He
                            helped a lot to get my aunt here and directly get
                            admitted to Fortis for surgery. Post surgery, biopsy
                            report revealed that its stage 0 and no need for
                            chemo therapy. Everything just happened ontime and
                            perfectly. When i thanked Dr. Sir, he was humble
                            enough to give the credit to Allaha. Sir, you were a
                            blessing to our family in this crisis. My uncle aunt
                            were so happy and pleased by your interaction in
                            entire process. May God always bless you and help
                            you in serving mankind. Thank you very much.
                          </p>
                          {/* <h6>
                            <span className="d-block">John Doe</span> New York
                          </h6> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>Inayathulla Khan Lavani</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Before visiting Dr. Shabeer Ahmed for my dad's
                            surgery, I had visited other doctors and wasn't
                            satisfied enough, and I must say Dr is very humble
                            person who shows compassion towards patients and
                            also authority in field of laparoscopy, which is
                            rare combination to find in this mundane world.
                            Moreover my dad's surgery was successful and he is
                            recovering. I would definately recommend anyone to
                            visit Dr once before taking final call
                          </p>
                          {/* <h6>
                            <span className="d-block">Andrew Denner</span>{" "}
                            Nevada
                          </h6> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-grid">
                    <div className="testimonial-info">
                      <div className="testimonial-content">
                        <div className="section-header section-inner-header testimonial-header">
                          <h5>Testimonials</h5>
                          <h2>Mir Nasair Hussain</h2>
                        </div>
                        <div className="testimonial-details">
                          <p>
                            Best ever Dr.I have seen in Bangalore God has given
                            shiffa in his hand Excellent treatment centre in
                            Bangalore I was suffering piles from 11years He did
                            my operation successful Dr. Shabeer Ahmed has 30
                            years Excellent Experience God give him Good Health
                            / wealth I salute you sir
                          </p>
                          <h6>
                            {/* <span className="d-block">Niya Patel</span> New York */}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Home1Footer />
    </div>
  );
};

export default Home1;
