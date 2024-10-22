import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
//images
// import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07 } from "./img.js";
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

const InguinalHernia = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Inguinal hernia</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Inguinal hernia
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
            <div className="col-lg-8 col-md-12 obesity-pag">
              <div className="blog-view row">
                <h4>
                  What is an Inguinal Hernia?
                </h4>
                <p className="txt-just">

                  An inguinal hernia occurs when a portion of the intestines or abdominal tissue pushes through a weak spot  in the inguinal canal. This is a small passage that runs through the lower abdomen and groin. The condition is more common in men, although women can develop it as well. It can occur both side simultaneously in 30% cases and careful examination is mandatory
                  Inguinal hernias can appear as a noticeable bulge in the groin area, which may increase in size when you cough, bend, or lift heavy objects. They often cause discomfort or pain, especially during physical activity or exertion.


                </p>



                <div>
                  <h4> Types of Inguinal Hernias


                  </h4>


                  <ol>
                    <li>
                      <strong> Indirect Inguinal Hernia:</strong> This variety is usually due to defect in the development and  It is more common in men.</li>
                    <li> <strong> Direct Inguinal Hernia:</strong> This type develops over time due to weakening of the abdominal muscles, often as a result of aging or repeated strain, due to chronic constipation and prostatic issues. Conditions like chronic obstructive pulmonary disease (COPD) can cause repeated coughing, leading to hernia formation as well
                    </li>

                  </ol>
                </div>



                <div>
                  <h4>Symptoms of an Inguinal Hernia</h4>

                  <ul>
                    <li>A visible bulge in the groin or scrotum </li>
                    <li> Pain or discomfort, especially when bending, coughing, or lifting </li>
                    <li>A feeling of heaviness or pressure in the groin </li>
                    <li>In some cases, swelling or a burning sensation </li>
                    <li> Nausea or vomiting suggests that hernia is going for complication.
                    </li>
                  </ul>



                  <h6>  How is an Inguinal Hernia Diagnosed?</h6>

                  <p>
                    Diagnosis typically begins with a physical examination. Your doctor may ask you to stand and cough to see if the hernia bulge appears. Imaging tests such as an ultrasound, CT scan, or MRI may be ordered if the diagnosis is unclear or to evaluate grading of the hernia.
                  </p>


                  <b>Treatment Options</b>
                  <ol>
                    <li>
                      <b> Surgery</b> <br />
                      Surgery is the primary treatment for inguinal hernias.
                    </li>
                    <li>
                      <b>Laparoscopic hernia repair:</b>  TEP or TAPP.  This minimally invasive procedure involves several small incisions and the use of a laparoscope (a thin tube with a camera) to guide the repair. It generally results in less postoperative pain and a quicker recovery compared to open surgery.
                    </li>
                    <li>
                      <b> Robotic hernia surgery slightly better than laparoscopic surgery</b>

                    </li>
                  </ol>




                  <h6>
                    Complications of Untreated Inguinal Hernias
                  </h6>
                  If left untreated, inguinal hernias can lead to serious complications: <br />

                  <b> Advantages:</b>
                  <ul>
                    <li>
                      <b> Incarceration:</b> When a portion of the intestines gets trapped in the hernia sac, it can block bowel function and cause severe pain.
                    </li>
                    <li>
                      <b> Strangulation:</b> This occurs when the blood supply to the trapped portion of the intestine is cut off, leading to tissue death and potentially life-threatening conditions. Strangulated hernias require emergency surgery.
                    </li>
                    <li>
                      Strengthen your abdominal muscles with regular exercise to support the abdominal wall.
                    </li>
                  </ul>


                  <h6>
                    When to Seek Medical Help
                  </h6>


                  If you experience severe pain, nausea, vomiting, or if the hernia becomes swollen or discolored, seek emergency medical attention immediately, as this may indicate a strangulated hernia.







                  <h6>
                    Conclusion


                  </h6>

                  <p>
                    Inguinal hernias are a common but treatable condition. Early diagnosis and appropriate surgical intervention can prevent complications and help you return to your daily activities with minimal discomfort. If you suspect you have a hernia, consult your doctor to discuss the best treatment options for your individual case.

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
                            <h6 className="mb-0 ">Do you want a Genetics, Hormonal Imbalances,Sleep Disorders,diet Test?</h6>
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
                        <div className="specialist-img ">
                          <ImageWithBasePath
                            src="assets/img/category/map-location-dot-solid.svg"
                            alt="kidney-image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="specialist-info">
                          <Link to="#">
                            <h6 className="mb-0 ">Do you want know What exercises Show I Do? </h6>
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
                        <div className="specialist-img ">
                          <ImageWithBasePath
                            src="assets/img/category/map-location-dot-solid.svg"
                            alt="kidney-image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="specialist-info">
                          <Link to="#">
                            <h6 className="mb-0 ">Should I require Sleep Disorders</h6>
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
                    <div className="col-xl-12 col-lg-12 col-md-6 aos" data-aos="fade-up">
                      <div className="specialist-card d-flex align-items-center">
                        <div className="specialist-img">
                          <ImageWithBasePath
                            src="assets/img/category/stethoscope-solid.svg"
                            alt="bone-image"
                            className="img-fluid"
                          />
                        </div>
                        <div className="specialist-info">
                        <a href="https://www.fortishealthcare.com/doctors/dr-shabeer-ahmed-773?hospital=3514" target="_blank">
                            <h6>Book Appointment in Fortis Hospital</h6>
                          </a>
                         
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

export default InguinalHernia;
