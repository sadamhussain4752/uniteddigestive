import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
//images
// import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07 } from "./img.jsx";
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
import GulHealth from "../../JSON/GUI.json";

const StomachSurgery = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Stomach Surgery</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Stomach Surgery
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
            <div className="col-lg-8 col-md-12">
              <div className="blog-view row lsre-tret">
                <p className="txt-just">
                  Gall stone  form when substances in bile (such as cholesterol or bilirubin) become imbalanced and crystallize, creating solid particles in the gallbladder. There are two main types of gallstones: cholesterol and pigments stone  and most common are cholesterol and does not mean one who has abnormal lipid profile will form stone.

                </p>
                <h4>
                  Whar causes of Gallstones

                </h4>
                <p className="txt-just">
                  <strong>
                    1. Excess cholesterol in bile:
                  </strong>
                  If the liver secretes more cholesterol than bile can dissolve, the excess cholesterol can form crystals and eventually stones.

                </p>


                <p className="txt-just">
                  <strong>
                    2. Excess bilirubin:
                  </strong>
                  Conditions like liver cirrhosis, biliary tract infections, or hemolytic anemia can cause the liver to produce too much bilirubin.


                </p>

                <p className="txt-just">
                  <strong>
                    3. Incomplete emptying of the gallbladder:
                  </strong>
                  If the gallbladder doesn’t empty completely or often enough, bile becomes concentrated and stones can form.


                </p>

                <div>

                  <h6>
                    What are risk factors
                  </h6>

                  <p>
                    <b>Risk Factors, Obesity, Rapid weight loss, Pregnancy, Gender and age: </b>
                    Certain medical conditions: Diabetes, cirrhosis, and certain blood disorders.
                  </p>

                </div>


                <div>

                  <h6>
                    What are risk factors
                  </h6>

                  <ul>
                    <li>
                      Pain in the upper right abdomen (biliary colic) especiall radiating to back
                      Nausea and vomiting
                    </li>
                    <li>
                      Jaundice (yellowing of the skin and eyes, if the bile flow is blocked due to stone in common bile duct)
                    </li>
                    <li>
                      Fever and chills (if infection occurs)
                    </li>
                  </ul>

                </div>


                <div>

                  <h6>
                    What Treatment Options are available
                  </h6>

                  <ol>
                    <li>
                      <b> Medications</b> and alternative therapy have very few role
                    </li>
                    <li>
                      <b>Surgical Treatment:</b>

                      <ul>
                        <li>
                          <b>Laparoscopic Cholecystectomy </b>(gallbladder removal)is the only option: The most common treatment, especially for symptomatic gallstones. This can be done laparoscopically (minimally invasive) or through open surgery and removing the only stone is not a solution

                        </li>
                        <li>
                          <b> Endoscopic Retrograde Cholangiopancreatography (ERCP):</b> Used to remove stones from the bile ducts

                        </li>
                      </ul>

                    </li>
                    <li>
                      <b>Fever and chills (if infection occurs)</b>
                    </li>
                  </ol>

                  <p>
                    Before deciding surgery, a careful history taking is important to rule out concomitant diseases

                  </p>

                </div>




              </div>

            </div>
            <div className="col-lg-4 col-md-12">
              <h3> For More Information</h3>
              <section className=" mor-info ">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-xl-12 col-lg-12 col-md-6 aos"
                      data-aos="fade-up"
                    >
                      <div className="specialist-card d-flex align-items-center">
                        <div className="specialist-img ">
                          <ImageWithBasePath
                            src="assets/img/category/map-location-dot-solid.svg"
                            alt="kidney-image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="specialist-info">
                          <Link to="#">
                            <h6 className="mb-0 ">Do you want a Laser surgery Test?</h6>
                          </Link>
                          {/* <p>21 Doctors</p> */}
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
                      data-aos="fade-up"
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
                          <a to="https://wa.me/whatsappphonenumber?text=urlencodedtext" target="_blank">
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
                      data-aos="fade-up"
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
                          <Link to="#">
                            <h6>Contacts</h6>
                          </Link>
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
        </div>
      </div>
      <Home1Footer />
    </div >
  );
};

export default StomachSurgery;
