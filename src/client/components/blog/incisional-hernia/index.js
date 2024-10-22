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

const IncisionalHernia = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Incisional Hernia</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Incisional Hernia
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
                  What is an Incisional Hernia?
                </h4>
                <p className="txt-just">

                  An incisional hernia occurs at the site of previous surgical scars, and part of the intestine, protrudes through a weakened spot in the abdominal muscles at the site of scar. This can develop months or even years after abdominal surgery.
                  Incisional hernias can vary in size and severity. Some may remain small and still have risk of complication causing knuckle od small intestione to get gangrene, , while others can enlarge over time, leading to discomfort and complications. Patients who have had multiple abdominal surgeries or have undergone large, complex operations are at higher risk and difficult to address them .
                  Obesity , smoking , lung diseases, constipation and pregnancy can aggrevate the scar potential to get hernia.

                </p>



                <div>
                  <h4> What are Symptoms of an Incisional Hernia</h4>

                  <strong> Common symptoms include:</strong>
                  <ul>
                    <li>Bulge near the previous surgical site: This bulge becomes more pronounced when standing, coughing, or lifting and may disappear when lying down.</li>
                    <li> Pain or discomfort: Especially when engaging in physical activity, bending, or straining.</li>
                    <li>Nausea or vomiting: These may occur if the small intestine  becomes incarcerated .</li>
                    <li>Difficulty moving or discomfort when trying to sit up: Larger hernias may impact mobility.</li>
                    <li>In severe cases, the hernia can become strangulated, cutting off blood supply to the trapped tissue, which requires emergency medical attention.</li>

                  </ul>
                </div>



                <div>
                  <h4> How is it Diagnosed:</h4>
                  <p>
                    A physical exam is often enough to diagnose an incisional hernia, as the bulge is usually visible when the patient stands or strains the abdominal muscles. However, imaging tests such as an <b> ultrasound, CT scan, or MRI</b>  may be used to assess the size of the hernia, determine its contents, and help plan the best surgical approach for repair and plan the right of the size of the mesh.
                  </p>


                  <h4>Surgical Approaches to Incisional Hernia Repair</h4>
                  <h6>1. Open Hernia Repair</h6>
                  In open surgery, a single, small  incision is made over the site of the hernia. The surgeon pushes the herniated tissue back into the abdomen and repairs the defect in the abdominal wall. A mesh is often used to reinforce the area and reduce the chance of recurrence.
                  <b> Advantages:</b>
                  <ul>
                    <li>Suitable for large or complex hernias</li>
                    <li>Provides excellent visibility and access for the surgeon</li>
                    <li>Ideal for patients who may not be good candidates for minimally invasive procedures</li>
                  </ul>



                  <h6>  2. Laparoscopic Hernia Repair</h6>

                  Laparoscopic surgery is a minimally invasive technique that uses small incisions and a camera (laparoscope) to guide the repair. Special instruments are inserted through these small incisions to repair the hernia, often using mesh to strengthen the abdominal wall.

                  <b> Advantages:</b>
                  <ul>
                    <li>Shorter recovery time</li>
                    <li>Smaller incisions and less scarring</li>
                    <li>Lower risk of infection</li>
                    <li>Less postoperative pain and quicker return to normal activities</li>
                    <li> Can be technically challenging, requiring specialized skills from the surgeon
                    </li>
                  </ul>




                  <h6>
                    3. Robotic-Assisted Hernia Repair
                  </h6>

                  Robotic surgery is another minimally invasive technique similar to laparoscopy, but with the use of robotic arms controlled by the surgeon from a console. This approach allows for more precise movements and improved dexterity, making it ideal for complex hernia repairs.


                  <b> Advantages:</b>
                  <ul>
                    <li>Enhanced precision and flexibility in surgery </li>
                    <li>Similar benefits to laparoscopic surgery (small incisions, faster recovery) </li>
                    <li>Ideal for larger or recurrent hernias </li>
                  </ul>


                  <h6>
                    4. Mesh Use in Hernia Repair
                  </h6>

                  <b> Surgical mesh</b> is commonly used in both open and laparoscopic hernia repairs to provide extra reinforcement to the abdominal wall. Mesh helps distribute the tension over a larger area and reduces the risk of the hernia returning. There are different types of mesh available, including synthetic materials and biologic meshes, which are absorbed by the body over time.



                  <b> Advantages:</b>
                  <ul>
                    <li><b>Benefits of mesh:</b> Decreases recurrence rates significantly.
                      <b>Risks:</b> Mesh-related complications, although rare, can include infection, migration, or rejection. </li>
                  </ul>



                  <h6>
                    4. Recovery from Incisional Hernia Surgery

                  </h6>

                  Recovery time varies depending on the surgical approach and the size of the hernia. Generally, patients can expect the following:



                  <b> Advantages:</b>
                  <ul>
                    <li><b>Minimally invasive surgery:</b>  A faster recovery, with most patients resuming light activities within 1-2 weeks and full recovery in 4-6 weeks.
                    </li>
                  </ul>


                  <h6>
                    4. What are complications of Untreated Incisional Hernia ?


                  </h6>

                  If left untreated, incisional hernias can grow larger and lead to complications such as:



                  <b> Advantages:</b>
                  <ul>
                    <li>
                      <b>Incarceration:</b> When the hernia becomes trapped, causing bowel obstruction.</li>
                    <li>
                      <b>  Strangulation:</b> Loss of blood supply to the herniated tissue, which can lead to tissue death, requiring emergency surgery.

                    </li>
                  </ul>


                  <h6> Conclusion</h6>
                  <p>
                    Incisional hernias are a common complication of abdominal surgery but can be successfully treated with various surgical approaches. Early detection and intervention are key to preventing complications and ensuring a smooth recovery. If you suspect you have an incisional hernia or are experiencing symptoms, consult with your healthcare provider to discuss the most appropriate treatment options for you.
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
    </div>
  );
};

export default IncisionalHernia;
