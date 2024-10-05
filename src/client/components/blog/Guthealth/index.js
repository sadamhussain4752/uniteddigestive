import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
//images
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07 } from "./img.jsx";
//components
import BlogListSearch from "../search/search.jsx";
import LastestBlog from "../lastestblog/index.jsx";
import CategoryWidget from "../categoryWidget/index.jsx";
import TagsWidget from "../tagswidget/index.jsx";
import Header from "../../header.jsx";
import Footer from "../../footer.jsx";
import Home1Header from "../../home/home-1/header.jsx";
import { useParams } from "react-router-dom";
import expertise from "../../JSON/expertise.JSON";
import Home1Footer from "../../home/home-1/footer.jsx";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";
import GulHealth from "../../JSON/Medical.json"

const GuthealthDetails = (props) => {
  const [expdetails, setexpdetails] = useState("");
  const routeParams = useParams();
  console.log(routeParams.id, "expertise");

  useEffect(() => {
    if (routeParams.id) {
      let expertiseDetails = GulHealth.medicalConditions.find(
        (i) => i.id === parseInt(routeParams.id)
      );
      console.log(expertiseDetails); // You can handle the expertiseDetails further
      setexpdetails(expertiseDetails);
    }
  }, [routeParams.id]);

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">
                {expdetails && expdetails?.title}
              </h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    {expdetails && expdetails?.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-view">
                <div className="blog blog-single-post">
                  <div className="blog-image">
                    <Link to="#0">
                      <img alt=""  src={`../../../assets/img/icons/${expdetails.path}`} className="img-fluid w-25 h-25" />
                    </Link>
                  </div>
                  <h3 className="blog-title">
                    {expdetails && expdetails?.title}
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                        <li>
                          <div className="post-author">
                            <Link to="/patient/doctor-profile">
                              <img src={IMG02} alt="Post Author" />
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-calendar"></i>4 Dec 2019
                        </li>
                        <li>
                          <i className="far fa-comments"></i>12 Comments
                        </li>
                        <li>
                          <i className="fa fa-tags"></i>Health Tips
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>{expdetails && expdetails?.description}</p>
                  </div>
                </div>
               
              </div>
            </div>
            <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-one aos" data-aos="fade-up">
                {/* <h5>Get Your Answer</h5> */}
                <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
           
            <div className="col-lg-12 col-md-12">
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">
                  {/* FAQ Item */}
                  {expdetails && expdetails?.faqs?.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <Link
                        to="#"
                        className="accordion-button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`collapse${index}`}
                      >
                        {item.question}
                      </Link>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faq-details"
                    >
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* <div className="col-lg-4 col-md-12">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <BlogListSearch />
                <LastestBlog />
                <CategoryWidget />
                <TagsWidget />
              </StickyBox>
            </div> */}
          </div>
        </div>
      </div>
      <Home1Footer />
    </div>
  );
};

export default GuthealthDetails;
