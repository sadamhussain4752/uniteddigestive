import React, { useState, useEffect } from "react";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";

const SideContentButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  // Handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Handle scroll event to hide content when scrolling
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (isHovered) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener on unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHovered]);

  return (
    <div className="side-content-container">
      <button
        className="side-btn"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        For More Information
      </button>
      {isHovered && (
        <div className="hover-content">
          <div className="">
            <div>
            <h5> For More Information</h5></div>
                
            
            <section className=" mor-info ">
              <div className="container">
                <div className="row">
                  <div
                    className="col-xl-12 col-lg-12 col-md-6 aos"
                    data-aos="fade-left"
                  >
                    <div className="specialist-card d-flex align-items-center">
                      <div className="specialist-img">
                        <ImageWithBasePath
                          src="assets/img/category/stethoscope-solid.svg"
                          alt="bone-image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="specialist-info">
                        <a
                          href="https://www.fortishealthcare.com/doctors/dr-shabeer-ahmed-773?hospital=3514"
                          target="_blank"
                        >
                          <h6>Book Appointment in Fortis Hospital</h6>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-xl-12 col-lg-12 col-md-6 aos"
                    data-aos="fade-left"
                  >
                    <div className="specialist-card d-flex align-items-center">
                      <div className="specialist-img">
                        <ImageWithBasePath
                          src="assets/img/category/stethoscope-solid.svg"
                          alt="bone-image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="specialist-info">
                        <a
                          href="https://www.eka.care/doctor/dr-shabeer-gastroenterologist-bengaluru"
                          target="_blank"
                        >
                          <h6>Request an Appointment</h6>
                        </a>
                        {/* <p>30 Doctors</p> */}
                      </div>
                      <div className="specialist-nav ms-auto">
                        <Link to="#">
                          <i className="fas fa-long-arrow-alt-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-12 col-lg-12 col-md-6 aos"
                    data-aos="fade-left"
                  >
                    <div className="specialist-card d-flex align-items-center">
                      <div className="specialist-img">
                        <ImageWithBasePath
                          src="assets/img/category/phone-solid.svg"
                          alt="heart-image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="specialist-info">
                        <a
                          href="https://wa.me/919900246002"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h6>WhatsApp</h6>
                        </a>
                        {/* <p>15 Doctors</p> */}
                      </div>
                      <div className="specialist-nav ms-auto">
                        <Link to="#">
                          <i className="fas fa-long-arrow-alt-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideContentButton;
