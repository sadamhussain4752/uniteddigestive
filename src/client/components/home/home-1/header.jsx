import React, { useState } from "react";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { Link, useHistory } from "react-router-dom";
import strings from "../../../../Lang/strings";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, MenuProps } from "antd";
import { useTranslation } from "react-i18next";

const Home1Header = () => {
  const [searchField, setSearchField] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to English
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log("Selected Language:", selectedLanguage); // Log the selected language
    changeLanguage(selectedLanguage); // Call the parent language-changing function
  };
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  const items = [
    {
      key: "en",
      label: "EN",
    },
    {
      key: "fr",
      label: "Ar",
    },
  ];

  const toggleSearch = () => {
    setSearchField(!searchField);
  };
  const history = useHistory();

  const directionPath = () => {
    history.push("/patient/search-doctor1");
  };

  const changeLanguage = (lang) => {
    // strings.setLanguage(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <header className="header header-custom header-fixed header-one home-head-one">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/" className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo-010.svg"
                  className="img-fluid icons-ht"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo-010.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link id="menu_close" className="menu-close" to="#">
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="has-submenu megamenu active">
                  <Link to="/">
                    <i class="fa-solid fa-house fs-6"></i>
                  </Link>
                  {/* <ul className="submenu mega-submenu">
                    <li>
                      <div className="megamenu-wrapper">
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="single-demo active">
                              <div className="demo-img">
                                <Link to="/home-1" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-01.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-1" className="inner-demo-img">
                                  General Home 1
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-2" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-02.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-2" className="inner-demo-img">
                                  General Home 2
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-3" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-03.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-3" className="inner-demo-img">
                                  General Home 3
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-5" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-04.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-5" className="inner-demo-img">
                                  Cardiology
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-6" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-05.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-6" className="inner-demo-img">
                                  Eyecare
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo ">
                              <div className="demo-img">
                                <Link to="/home-7" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-06.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-7" className="inner-demo-img">
                                  Veterinary
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-8" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-07.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-8" className="inner-demo-img">
                                  Pediatric
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-9" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-08.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-9" className="inner-demo-img">
                                  Fertility
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-10" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-09.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-10" className="inner-demo-img">
                                  ENT
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-11" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-10.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-11" className="inner-demo-img">
                                  Cosmetics
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-12" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-11.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-12" className="inner-demo-img">
                                  Lab Test
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link
                                  to="/Pharmacy/Pharmacy-index"
                                  className="inner-demo-img"
                                >
                                  <ImageWithBasePath
                                    src="assets/img/home/home-12.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-12" className="inner-demo-img">
                                  Pharmacy
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-13" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-13.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-13" className="inner-demo-img">
                                  Home Care
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="single-demo">
                              <div className="demo-img">
                                <Link to="/home-14" className="inner-demo-img">
                                  <ImageWithBasePath
                                    src="assets/img/home/home-14.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="demo-info">
                                <Link to="/home-14" className="inner-demo-img">
                                  Dentists
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul> */}
                </li>
                {/* <li className="has-submenu">
                  <Link to="/patient/search-doctor1">
                    Providers 
                  </Link>
                 
                </li>
                <li className="has-submenu">
                  <Link to="/patient/doctor-list">
                   Locations 
                  </Link>
                 
                </li> */}
                <li className="has-submenu">
                  {/* <Link to="#">
                    Patients Resources <i className="fas fa-chevron-down" />
                  </Link> */}
                  <ul className="submenu">
                    <li>
                      <Link to="/pages/patient-portal">Patient Portal</Link>
                    </li>
                    <li>
                      <Link to="/pharmacyadmin" target="_blank">
                        Medical Records
                      </Link>
                    </li>
                    <li>
                      <Link to="/pharmacyadmin" target="_blank">
                        Your Visit
                      </Link>
                    </li>
                    <li>
                      <Link to="/pharmacyadmin" target="_blank">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/pharmacyadmin" target="_blank">
                        Procedure Preparation
                      </Link>
                    </li>
                  </ul>
                  {/* <ul className="submenu">
                    <li>
                      <Link to="/patient/dashboard">Patient Dashboard</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Doctors</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/patient/doctor-grid">Map Grid</Link>
                        </li>
                        <li>
                          <Link to="/patient/doctor-list">Map List</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Search Doctor</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/patient/search-doctor1">
                            Search Doctor 1
                          </Link>
                        </li>
                        <li>
                          <Link to="/patient/search-doctor2">
                            Search Doctor 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Doctor Profile</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/patient/doctor-profile">
                            Doctor Profile 1
                          </Link>
                        </li>
                        <li>
                          <Link to="doctor-profile-2.html">
                            Doctor Profile 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Booking</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/patient/booking1">Booking 1</Link>
                        </li>
                        <li>
                          <Link to="/patient/booking2">Booking 2</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/patient/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/patient/booking-success">Booking Success</Link>
                    </li>
                    <li>
                      <Link to="/patient/favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link to="/patient/patient-chat">Chat</Link>
                    </li>
                    <li>
                      <Link to="/patient/profile">Profile Settings</Link>
                    </li>
                    <li>
                      <Link to="/patient/change-password">Change Password</Link>
                    </li>
                  </ul> */}
                </li>

                {/* <li className="has-submenu">
                  <Link to="#">
                    GI Health Library 
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/blog/blog-list">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/blog/blog-grid">Blog Grid</Link>
                    </li>
                    <li>
                      <Link to="/blog/blog-details">Blog Details</Link>
                    </li>
                  </ul>
                </li> */}
                <li className="has-submenu">
                  <Link to="#">
                    About Us <i className="fas fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">News & Updates</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">Corporate Development</Link>
                    </li>

                    <li>
                      <Link to="/aboutus">Physician Careers</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">All Careers</Link>
                    </li>
                    <li>
                      <Link to="/contacts">Contact Us</Link>
                    </li>
                  </ul>
                  {/* <ul className="submenu">
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/pages/contactus">Contact Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Call</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/pages/voice-call">Voice Call</Link>
                        </li>
                        <li>
                          <Link to="/pages/video-call">Video Call</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Invoices</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/doctor/invoices">Invoices</Link>
                        </li>
                        <li>
                          <Link to="/pages/invoice">Invoice View</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Authentication</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/pages/login-email">Login Email</Link>
                        </li>
                        <li>
                          <Link to="/pages/login-phone">Login Phone</Link>
                        </li>
                        <li>
                          <Link to="/pages/doctor-signup">Doctor Signup</Link>
                        </li>
                        <li>
                          <Link to="/pages/patient-signup">Patient Signup</Link>
                        </li>
                        <li>
                          <Link to="/pages/forgot-password">
                            Forgot Password 1
                          </Link>
                        </li>
                        <li>
                          <Link to="/pages/forgot-password2">
                            Forgot Password 2
                          </Link>
                        </li>
                        <li>
                          <Link to="/pages/email-otp">Email OTP</Link>
                        </li>
                        <li>
                          <Link to="/pages/phone-otp">Phone OTP</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">Error Pages</Link>
                      <ul className="submenu inner-submenu">
                        <li>
                          <Link to="/pages/error-404">404 Error</Link>
                        </li>
                        <li>
                          <Link to="/pages/error-500">500 Error</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/pages/blank-page">Starter Page</Link>
                    </li>
                    <li>
                      <Link to="/pages/pricing-plan">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link to="/pages/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/pages/maintenance">Maintenance</Link>
                    </li>
                    <li>
                      <Link to="/pages/comingsoon">Coming Soon</Link>
                    </li>
                    <li>
                      <Link to="/pages/terms">Terms &amp; Condition</Link>
                    </li>
                    <li>
                      <Link to="/pages/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/pages/component">Components</Link>
                    </li>
                  </ul> */}
                </li>
                {/* <li className="has-submenu">
                  <Link to="#">
                    Admin 
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/admin" target="_blank">
                        Admin
                      </Link>
                    </li>
                    <li>
                      <Link to="/pharmacyadmin" target="_blank">
                        Pharmacy Admin
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <li className="searchbar">
                  <Link to="#" onClick={toggleSearch}>
                    <i className="feather icon-search" />
                  </Link>
                  <div
                    className={
                      searchField
                        ? "togglesearch d-block"
                        : "togglesearch d-none"
                    }
                  >
                    <>
      <div id="google_translate_element"></div>
      <h4>Start building your app. Happy Coding!</h4>
    </>
                  </div>
                </li>
                <li className="has-submenu d-flex align-items-center ">
                  <a href="tel:+919900246002" className="ms-1">
                    {" "}
                    <i class="fa-solid fa-headset fs-6 mb-2"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <select
                      value={language}
                      onChange={handleLanguageChange}
                      style={{
                        // padding: '8px',
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      <option value="en">English</option>
                      <option value="fr">Arabic</option>
                    </select>
                  </a>
                </li>
              </ul>
            </div>
            {/* <ul className="nav header-navbar-rht">
              <li className="register-btn">
                <Link to="/register" className="btn reg-btn">
                  <i className="feather icon-user" />
                  Register
                </Link>
              </li>
              <li className="register-btn">
                <Link to="/login" className="btn btn-primary log-btn">
                  <i className="feather icon-lock" />
                  Login
                </Link>
              </li>
            </ul> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Home1Header;
