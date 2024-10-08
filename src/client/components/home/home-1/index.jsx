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
import { Button } from "react-bootstrap";
import abouts from "../../JSON//about.json";
import Jsonfile from "../../JSON/Jsonfile.json";


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
  const ourExpert = {
    loop: true,
    margin: 24,
    dots: false,
    freeDrag: true,
    nav: true,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 5,
      },
      1300: {
        items: 5,
      },
    },
  };


  function nextSlide() {
alert("hiii")
  }

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
        <div className="col-md-12 position-relative">

          {/* <div className="banner-abs">
            <p className="banner-posab-h mb-0">
              How can we help you?
            </p>
            <div className="subscribe-form mb-0">
              <form action="#">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Find you location...."
                />
                <button type="submit" className="btn">
                  Search
                </button>
              </form>
            </div>
          </div> */}

          <div className="slider-img mt-5">
            <video
              className="banner-images w-100"
              autoPlay
              playsInline
              loop
              muted // Mute the video to avoid autoplay restrictions
              onCanPlayThrough={(e) => e.target.play()} // Ensure the video plays once it's ready
            >
              <source src="assets/img/bg/banner1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="container position-absolute top-50 start-50 translate-middle">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="banner-cont-main">
                <div className="banner-content text-center mt-5">
                  <h1>Introducing</h1>
                  <p>
                    <strong> United Gut Healthcare </strong>: A Multidisciplinary Approach to
                    Digestive Health
                  </p>
                  <p className="fs-6">
                    At United Gut Healthcare, we understand that digestive
                    health is crucial to overall well-being. Our comprehensive
                    approach integrates various specialties to provide you with
                    the most effective and personalized care for your
                    gastrointestinal needs.
                  </p>
                  <a class="discov-innner" href="/introducing">
                    Read More<i class="fa-solid fa-chevron-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </section>


      <section className="banner-sub">

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-md-6 svtm p-4">
              <div className="row">
                <div className="col-5">
                  <img src="https://www.uniteddigestive.com/wp-content/uploads/2022/10/gettyimages-667825534-170667a-2.png" className="" alt="" />
                </div>

                <div className="col-7">
                  <p className="ban-sub-hed">
                    Save Time and Money on Your Colonoscopy
                  </p>
                  <p className="ban-sub-cont">
                    See if you qualify to skip the pre-procedure office visit.
                  </p>
                  <a class="read-more-test" href="/guthealth-details/3">
                    Begin Questionnaire
                  </a>
                </div>

              </div>

            </div>
            <div className="col-md-6 svtm bg-wh-b p-4">
              <div className="row">
                <div className="col-5">
                  <img src="https://www.uniteddigestive.com/wp-content/uploads/2022/10/gettyimages-1422301404-170667a-2.png" className="" alt="" />
                </div>

                <div className="col-7">
                  <p className="ban-sub-hed">
                    Experiencing Rectal Bleeding, Itching, or Pain?
                  </p>
                  <p className="ban-sub-cont">
                    See if you qualify for hemorrhoid banding.
                  </p>
                  <a class="read-more-test" href="/guthealth-details/3">Begin Questionnaire</a>
                </div>

              </div>

            </div>
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
                  </p>

                  <Link to="/pages/aboutus">
                    <Button
                      className="btn text-blue bg-blue mt-2 "
                      variant="outline-dark"
                    >
                      Read More
                    </Button>
                    {/* <h6 className="text-blue bg-blue mt-2 ">  </h6> */}
                  </Link>
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
            <div className="col-lg-4 col-sm-6">
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
                    <CountUp end={37} duration={5} className="count-digit" />{" "}
                    Years
                  </h3>
                  <p>Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 ">
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
                    <CountUp end={15000} duration={5} className="count-digit" />
                    +
                  </h3>
                  <p>Laparoscopic Surgeries</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
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
                    <CountUp end={50000} duration={5} className="count-digit" />
                    +
                  </h3>
                  <p>Happy Patientss</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
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
                    <CountUp end={50000} duration={5} className="count-digit" />
                    +
                  </h3>
                  <p>Successful Treatments</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="count-box">
                <span className="count-icon">
                  <ImageWithBasePath
                    src="assets/img/icons/Nationion.svg"
                    alt="award-icon"
                    className="w-75"
                  />
                </span>
                <div className="count-info">
                  <h3>
                    <CountUp end={20} duration={5} className="count-digit" />+
                  </h3>
                  <p>Nationion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <div className="discover-you-image expertise-360">
                    <ImageWithBasePath
                      src={`assets/img/icons/${item.imageUrl}`}
                      alt="Body"
                      className="w-50 "
                    />
                  </div>
                  <Link to={`specialites/${index + 1}`}>{item.title}</Link>
                  <p>{item.description?.slice(0, 50)}...</p>
                  <Link to={`specialites/${index + 1}`} className="discov-innner">
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

      <section className="experts-section-sixteen bg-color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-sixteen section-header-sixteentwo text-center">
                <h2>Gut Health Library</h2>
              </div>
            </div>
          </div>
          <div className="slider slider-sixteen aos" data-aos="zoom-in-up" id="gut-health">
            <OwlCarousel
              {...ourExpert}
              center={true}
              autoplay={true} // Enable autoplay
              autoplayTimeout={3000} // Set interval to 3 seconds (3000ms)
              autoplaySpeed={800} // Set speed for smooth transitions (800ms)
              loop={true} // Enable looping of slides
              animateIn="fadeIn" // Smooth fade-in animation for slide entry
              animateOut="fadeOut" // Smooth fade-out animation for slide exit
              className="custome_slides"
              id="slide-experts"
              nav={true} // Enable navigation (arrows)
              navText={[
                "<div class='nav-btn prev-slide t-pre'> <i class='fa-solid fa-arrow-left '></i></div>",
                "<div class='nav-btn next-slide t-pre'> <i class='fa-solid fa-arrow-right '></i></div>",
              ]} // Custom arrows
            >
              {medicals.map((item, index) => (
                <div className="test_imgs gut-health" key={index}>
                  <div className="main-reviewimages">
                    <ImageWithBasePath
                      src={`assets/img/icons/${item.path}`}
                      alt="Img"
                    />
                  </div>
                  <h4 className="fs-5 text-center">
                    <Link to={`guthealth-details/${index + 1}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <div className="testimonal-contents bg-trans">
                    <Link
                      to={`guthealth-details/${index + 1}`}
                      className="read-more-test"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </OwlCarousel>

            <div className="btns-lot mt-4">
              {/* <button  role="presentation">
                <i class="fa-solid fa-arrow-left"></i>
              </button> */}

              <a href="/guthealth-list" className="mx-4">
                Explore More
              </a>

              {/* <button >
                <i class="fa-solid fa-arrow-right"></i>
              </button> */}
            </div>

          </div>
        </div>
      </section>
      <section className="experts-section-sixteen bg-color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-sixteen section-header-sixteentwo text-center">
                <h2>Obesity</h2>
              </div>
            </div>
          </div>
          <div className="slider slider-sixteen aos" data-aos="zoom-in-up" id="gut-health">
            <OwlCarousel
              {...ourExpert}
              center={true}
              autoplay={true} // Enable autoplay
              autoplayTimeout={3000} // Set interval to 3 seconds (3000ms)
              autoplaySpeed={800} // Set speed for smooth transitions (800ms)
              loop={true} // Enable looping of slides
              animateIn="fadeIn" // Smooth fade-in animation for slide entry
              animateOut="fadeOut" // Smooth fade-out animation for slide exit
              className="custome_slides"
              id="slide-experts"
              nav={true} // Enable navigation (arrows)
              navText={[
                "<div class='nav-btn prev-slide t-pre'> <i class='fa-solid fa-arrow-left '></i></div>",
                "<div class='nav-btn next-slide t-pre'> <i class='fa-solid fa-arrow-right '></i></div>",
              ]} // Custom arrows
            >
              {Jsonfile.map((item, index) => (
                <div className="test_imgs gut-health" key={index}>
                  <div className="main-reviewimages">
                    <ImageWithBasePath
                      src={`assets/img/icons/${item.path}`}
                      alt="Img"
                    />
                  </div>
                  <h4 className="fs-5 text-center">
                    <Link to={`guthealth-details/${index + 1}`}>
                      {item.title}
                    </Link>
                  </h4>
                  <div className="testimonal-contents bg-trans">
                    <Link
                      to={`guthealth-details/${index + 1}`}
                      className="read-more-test"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </OwlCarousel>

            <div className="btns-lot mt-4">
              {/* <button  role="presentation">
                <i class="fa-solid fa-arrow-left"></i>
              </button> */}

              <a href="/guthealth-list" className="mx-4">
                Explore More
              </a>

              {/* <button >
                <i class="fa-solid fa-arrow-right"></i>
              </button> */}
            </div>

          </div>
        </div>
      </section>

      {/* <section className="about-section">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header-sixteen text-center">
              <h2>Our experts team</h2>
            </div>
          </div>
        </div>
        {abouts.map((its, index) => (
          <div className="container mt-5">
            <div
              className={`row align-items-center ${index % 2 === 0 ? "flex-row-reverse " : ""
                }`}
            >
              <div
                className={`col-lg-6 col-md-12 ${index % 2 === 0 ? "text-end" : ""
                  }`}
              >
                <ImageWithBasePath
                  src="assets/img/about/ID size.jpg"
                  className="img-fluid"
                  alt="patient-image"
                />
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="section-inner-header about-inner-header">
                  <h3>
                    Dr. Meghnad G. Joshi <span>M.Sc. Ph.D. PDD</span>
                  </h3>
                </div>
                <div className="about-content">
                  <div className="about-content-details">
                    <h5>
                      Professor and Head, Lead Coordinator, Central Research
                      Laboratory
                    </h5>
                    <p>
                      Meghnad G Joshi earned a PhD from the Department of
                      Zoology, Shivaji University, Kolhapur, India in 2006. He
                      Joined Karolinska Institute, Sweden as a Postdoctoral
                      fellow in 2007-2008 for fetal and adult hepatocyte
                      transplantation studies. He worked for Sahlgrenska
                      University Hospital, Department of transplantation
                      surgery, Göteborg, Sweden from 2008-2010. In 2009, he was
                      awarded with TTS New Key Opinion Leader, Sweden. He was
                      appointed as a visiting Assistant professor by Kansas
                      Medical Center, USA from 2010 to 2012 {"... "}
                    </p>

                    <Link to="/pages/aboutus">
                      <Button
                        className="btn text-blue bg-blue mt-2 "
                        variant="outline-dark"
                      >
                        Read More
                      </Button>
                      
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section> */}

      <section className="doctors-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider text-center">
                <h2 className="section-title">Our experts team</h2>
              </div>
            </div>
          </div>
          <div className="doctor-slider-one owl-theme aos" data-aos="fade-up">
            <OwlCarousel {...bestDoctorsSlider}>
              {/* Doctor Item */}
              {abouts.map((its, index) => (
                <div className="item">
                  <div className="doctor-profile-widget doc-item">
                    <div className="doc-pro-img">
                      <Link to="/teams">
                        <div className="doctor-profile-img">
                          <ImageWithBasePath
                            src="assets/img/about/ID size.jpg"
                            className="img-fluid"
                            alt="Ruby Perrin"
                          />
                        </div>
                      </Link>
                      <div className="doctor-amount">
                        {/* <span>$200</span> */}
                      </div>
                    </div>
                    <div className="doc-content">
                      <div className="doc-pro-info">
                        <div className="doc-pro-name">
                          <Link to="/teams">{its.title}</Link>
                          <p>{its.author}</p>
                        </div>
                        {/* <div className="reviews-ratings">
                 <p>
                   <span>
                     <i className="fas fa-star" /> 4.5
                   </span>{" "}
                   (35)
                 </p>
               </div> */}
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
              ))}

              {/* /Doctor Item */}
            </OwlCarousel>
          </div>
        </div>
        <div className="text-center mt-5">
          <a class="btn btn-primary btn-sm bg-color" href="/teams" role="button" aria-disabled="true">View More</a>

        </div>

      </section>

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
                            src={`assets/img/icons/${i.image_url}`}
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
