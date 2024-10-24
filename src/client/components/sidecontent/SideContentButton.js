import React from "react";
import ImageWithBasePath from "../../../core/img/imagewithbasebath";
import { Link } from "react-router-dom";

const SideContentButton = () => {
  // Array of content items
  const contentItems = [
    {
      id: 1,
      imgSrc: "assets/img/category/stethoscope-solid.svg",
      altText: "bone-image",
      title: "Book Appointment in Fortis Hospital",
      link: "https://www.fortishealthcare.com/doctors/dr-shabeer-ahmed-773?hospital=3514",
      linkText: "Book Appointment",
    },
    {
      id: 2,
      imgSrc: "assets/img/category/stethoscope-solid.svg",
      altText: "bone-image",
      title: "Request an Appointment",
      link: "https://www.eka.care/doctor/dr-shabeer-gastroenterologist-bengaluru",
      linkText: "Request Appointment",
    },
    {
      id: 3,
      imgSrc: "assets/img/category/phone-solid.svg",
      altText: "heart-image",
      title: "WhatsApp",
      link: "https://wa.me/919900246002",
      linkText: "WhatsApp",
    },
    {
      id: 4,
      imgSrc: "assets/img/category/phone-solid.svg",
      altText: "heart-image",
      title: "Contact Us",
      link: "https://wa.me/919900246002",
      linkText: "Contact Us",
    },
  ];

  return (
    <div className="side-content-container">
      <button className="side-btn">For More Information</button>
      <div className="hover-content">
        <div>
          <h5>For More Information</h5>
          <section className="mor-info">
            <div className="container">
              <div className="row">
                {/* Map through contentItems array */}
                {contentItems.map((item) => (
                  <div className="col-xl-12 col-lg-12 col-md-6" key={item.id}>
                    <div className="specialist-card d-flex align-items-center m-2">
                      <div className="specialist-img">
                        <ImageWithBasePath
                          src={item.imgSrc}
                          alt={item.altText}
                          className="img-fluid h-50"
                        />
                      </div>
                      <div className="specialist-info">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h6 className="text-font-16">{item.title}</h6>
                        </a>
                      </div>
                      <div className="specialist-nav ms-auto">
                        <Link to="#">
                          <i className="fas fa-long-arrow-alt-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SideContentButton;
