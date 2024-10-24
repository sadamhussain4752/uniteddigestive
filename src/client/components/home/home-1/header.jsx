import React, { useState, useEffect } from "react";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";
import { Link, useHistory } from "react-router-dom";
import { Drawer } from "antd";
import { useTranslation } from "react-i18next";

const Home1Header = () => {
  const [searchField, setSearchField] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to English
  const { i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state
  const [patientsDropdownOpen, setPatientsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Remove Google Translate badge
    const hideBadgeCSS = `
      .goog-logo-link, .goog-te-gadget-icon {
        display: none !important;
      } 
    `;
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(hideBadgeCSS));
    document.head.appendChild(style);
  }, []);

  // Initialize Google Translate
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,ar" },
      "google_translate_element"
    );
  };

  // Handle button click to trigger Google Translate
  const handleTranslate = () => {
    const translateElement = document.querySelector(".goog-te-combo");
    if (translateElement) {
      setLanguage(!language);
      translateElement.value = !language ? "en" : "ar"; // Change "es" to the desired language code
      translateElement.dispatchEvent(new Event("change"));
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log("Selected Language:", selectedLanguage); // Log the selected language
    changeLanguage(selectedLanguage); // Call the parent language-changing function
  };

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

  const changeLanguage = (lang) => {
    // strings.setLanguage(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setSearchField(!searchField);
  };

  const history = useHistory();

  const directionPath = () => {
    history.push("/patient/search-doctor1");
  };

  // Drawer functions
  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const togglePatientsDropdown = () => {
    setPatientsDropdownOpen(!patientsDropdownOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  return (
    <>
      <header
        className={` header-custom header-fixed header-one home-head-one ${
          !isScrolled ? "header-transparent" : "header-s"
        }`}
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="main-menu-wrapper">
              <ul className="main-nav">
                <li className="has-submenu">
                  <Link to="#">
                    <i class="fa fa-bars fs-5" aria-hidden="true"></i>
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
                </li>

                {/* <li className="searchbar">
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
                    <form>
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <button
                          type="submit"
                          className="btn"
                          onClick={directionPath}
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </li>

                <li className="has-submenu d-flex align-items-center">
                  <a href="tel:+919900246002" className="ms-1">
                    <i className="fa-solid fa-headset fs-6 mb-2"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="navbar-header">
              {/* Trigger drawer on mobile button click */}
              <Link id="mobile_btn" to="#" onClick={showDrawer}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/" className="">
                <ImageWithBasePath
                  src="assets/img/logo-010.svg"
                  className="icons-ht"
                  alt="Logo"
                />
              </Link>
            </div>
            <div>
              <Link>
                <button className="btn-lang me-1 " onClick={handleTranslate}>
                  {language ? "English" : "Arabic"}{" "}
                </button>

                {/* Placeholder for Google Translate element */}
                <div
                  id="google_translate_element"
                  style={{ display: "none" }}
                ></div>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Ant Design Drawer */}
      <Drawer title="Menu" onClose={closeDrawer} open={drawerOpen}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={closeDrawer}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <i
              className="fas fa-times"
              style={{ fontSize: "20px", color: "#333" }}
            ></i>
          </button>
        </div>

        <ul className="mobile-menu p-0">
          <li className="mobile-menu-lis">
            <Link className="mobile-menu-a" to="/">
              <i className="fa-solid fa-house fs-6"></i>
            </Link>
          </li>

          <li className="mobile-menu-lis">
            <Link className="mobile-menu-a" to="#" onClick={toggleSearch}>
              <i className="feather icon-search" />
            </Link>
            <div
              className={
                searchField ? "togglesearch d-block" : "togglesearch d-none"
              }
            >
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" />
                  <button type="submit" className="btn" onClick={directionPath}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </li>

          <li className="mobile-menu-lis">
            <Link
              className="mobile-menu-a"
              to="#"
              onClick={togglePatientsDropdown}
            >
              Patients Resources <i className="fas fa-chevron-down" />
            </Link>
            {patientsDropdownOpen && (
              <ul className="submenu">
                <li>
                  <Link className="mobile-menu-a" to="/pages/patient-portal">
                    Patient Portal
                  </Link>
                </li>
                <li>
                  <Link
                    className="mobile-menu-a"
                    to="/pharmacyadmin"
                    target="_blank"
                  >
                    Medical Records
                  </Link>
                </li>
                <li>
                  <Link
                    className="mobile-menu-a"
                    to="/pharmacyadmin"
                    target="_blank"
                  >
                    Your Visit
                  </Link>
                </li>
                <li>
                  <Link
                    className="mobile-menu-a"
                    to="/pharmacyadmin"
                    target="_blank"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="mobile-menu-a"
                    to="/pharmacyadmin"
                    target="_blank"
                  >
                    Procedure Preparation
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mobile-menu-lis">
            <Link
              className="mobile-menu-a"
              to="#"
              onClick={toggleAboutDropdown}
            >
              About Us <i className="fas fa-chevron-down" />
            </Link>
            {aboutDropdownOpen && (
              <ul className="submenu">
                <li>
                  <Link className="mobile-menu-a" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu-a" to="/aboutus">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu-a" to="/aboutus">
                    Corporate Development
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu-a" to="/aboutus">
                    Physician Careers
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu-a" to="/aboutus">
                    All Careers
                  </Link>
                </li>
                <li>
                  <Link className="mobile-menu-a" to="/contacts">
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="btn btn-secondary me-1 mt-2"
              onClick={handleTranslate}
            >
              {language ? "English" : "Arabic"}{" "}
            </button>

            {/* Placeholder for Google Translate element */}
            <div
              id="google_translate_element"
              style={{ display: "none" }}
            ></div>
          </li>

          <li className="mobile-menu-lis">
            <a href="tel:+919900246002">
              <i className="fa-solid fa-headset fs-6 mb-2"></i>
            </a>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Home1Header;
