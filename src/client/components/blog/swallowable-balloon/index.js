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

const SwallowableBalloon = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Swallowable Balloon for Obesity Treatment</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Swallowable Balloon for Obesity Treatment
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
                  The swallowable balloon, also known as the intragastric balloon, is an innovative, non-surgical solution for managing obesity. It offers a minimally invasive approach to help individuals achieve weight loss when traditional methods like diet and exercise have not been effective. This treatment is particularly suitable for individuals who may not qualify for or want to undergo bariatric surgery with expectation to loose minimum weight loss.

                </p>
                <h4>
                  What is a Swallowable Balloon?
                </h4>
                <p className="txt-just">
                  A swallowable balloon is a soft, expandable medical device that is placed inside the stomach to promote feelings of fullness, reducing food intake. Unlike traditional gastric balloons that require endoscopy and sedation for insertion, the swallowable balloon can be swallowed in capsule form and inflated within the stomach using a sterile solution, without the need for anesthesia.

                </p>


                <h4>
                  How It Works
                </h4>
                <p className="txt-just">
                  Once swallowed, the capsule containing the deflated balloon is guided into the stomach, where it is inflated using saline or gas through a small catheter. The balloon then floats freely inside the stomach, taking up space and limiting the amount of food the stomach can hold. As a result, patients experience early satiety and reduced appetite, which helps them consume fewer calories. The balloon remains in place for about 4-6 months, after which it is safely deflated and naturally passed through the digestive system.


                </p>


                <div>
                  <h4>
                    Benefits of the Swallowable Balloon
                  </h4>
                  <ul>
                    <li>
                      <b>  Non-Surgical & Minimally Invasive:</b> No incisions, stitches, or anesthesia are required, making it a simpler and safer alternative to surgery.
                    </li>
                    <li>
                      <b>Effective Weight Loss:</b> On average, patients lose 10-15% of their total body weight during the 6 months the balloon is in place.
                    </li>
                    <li>
                      <b>Quick Procedure:</b> The balloon placement takes about 15-20 minutes, allowing patients to return to their daily activities almost immediately.
                    </li>
                    <li>
                      <b>Temporary and Reversible:</b> Unlike permanent weight loss surgeries, the swallowable balloon is a temporary aid that can be removed at any time.
                    </li>
                  </ul>

                </div>

                <h4>
                  Am I  a Candidate?
                </h4>
                <p className="txt-just">
                  The swallowable balloon is ideal for individuals with a Body Mass Index (BMI) of 27-40 who are looking for an effective weight loss tool but want to avoid invasive surgery. It’s a great option for patients seeking short-term support to kickstart their weight loss journey.
                </p>

                <h4>

                </h4>

                <ul>
                  <li>
                    <b> No Recovery Time:</b> Patients can resume their regular routine right after the procedure.

                  </li>
                  <li>
                    <b>Lower Risk: </b>There are no surgical risks such as infections, bleeding, or long-term complications.

                  </li>
                  <li>
                    <b> Cost-Effective: </b>It is generally more affordable than bariatric surgery.

                  </li>
                  <li>
                    <b> Natural Exit: </b>The balloon naturally passes through the digestive tract without requiring removal procedures.

                  </li>
                </ul>

                <h4>
                  Risks and Considerations
                </h4>
                <p className="txt-just">
                  While generally safe, the swallowable balloon may cause temporary side effects such as nausea, vomiting, or abdominal discomfort as the body adjusts to the balloon. It's essential for patients to follow a balanced diet and maintain an exercise regimen to maximize the benefits and prevent weight regain after the balloon is removed.

                </p>


                <h4>
                  Conclusion
                </h4>
                <p className="txt-just">
                  The swallowable balloon for obesity is a breakthrough in weight management, offering a non-invasive and effective way to help individuals lose weight. Combined with lifestyle changes, it can be a valuable tool for improving overall health and quality of life
                </p>


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
                          
                          <a href="https://www.eka.care/doctor/dr-shabeer-gastroenterologist-bengaluru" target="_blank">
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
                        <a href="https://wa.me/919900246002" target="_blank" rel="noopener noreferrer">
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
        </div>
      </div>
      <Home1Footer />
    </div >
  );
};

export default SwallowableBalloon;
