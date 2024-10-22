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
import GulHealth from "../../JSON/GUI.json";

const reflux = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Surgery for reflux disease


              </h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                  Surgery for reflux disease



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
                  Laser surgery is an increasingly popular treatment option for various anorectal conditions due to its
                  precision, technical advancement , minimal invasiveness, and reduced recovery time. It involves the use
                  of laser energy to remove or treat tissues in the anal and rectal area.
                  Here’s an overview of the common anorectal conditions treated with laser surgery, along with the
                  benefits and general approach.
                </p>
                <h4>
                  Anorectal Conditions Treated with Laser Surgery
                </h4>
                <p className="txt-just">
                  <strong>
                    1. Hemorrhoids:
                  </strong>
                  <strong>Laser Hemorrhoidoplasty (LHP)</strong>This procedure is used for the treatment of internal
                  hemorrhoids. A laser fiber is introduced into the hemorrhoidal pile, and laser energy is
                  delivered, causing the hemorrhoid to shrink. It cuts off blood flow to the hemorrhoidal
                  vessels, leading to reduced shrinkage when coagulation occurs and later fibrosed

                  <ul>
                    <li>
                      <b className="fs-6">  Strong Family History:</b> Genetics can strongly influence how body stores fat and how it burns
                      calories, and how it regulates hunger and satiety.
                    </li>

                    <li>
                      <b className="fs-6">Gene Variations:</b> Specific genes, such as those
                      affecting leptin (a hormone that increases appetite), may be altered in some individuals, leading
                      to increased hunger or impaired metabolism. Many genes related to fat absorption and
                      metabolism, energy homeostasis, and carbohydrate responsiveness, and genes regulating
                      energy intake and feeding behaviour
                    </li>
                  </ul>
                </p>
                <p className="txt-just">
                  <strong>Benefits</strong>  Minimal bleeding, less post-operative pain, and quicker recovery compared to
                  conventional hemorrhoidectomy.
                </p>


                <p className="txt-just">



                  <strong>2.Anal Fissures</strong>
                  <ul>

                    <li>

                      Chronic anal fissures can be treated with laser surgery ( LASER LIS) by carefully
                      removing the fissure tissue and promoting healing. The laser helps reduce muscle
                      spasms in the anal sphincter and promotes blood flow to the area.

                    </li>


                    <li>
                      <b className="fs-6">
                        Benefits:
                      </b> Less pain, quicker healing, and reduced risk of infection.
                    </li>

                  </ul>
                </p>
                <p className="txt-just">
                  <strong>3.Fistula-in-Ano:</strong>

                  <ul>

                    <li> Many types of Laser, like Laser Ablation of Fistula Tract (LAFT), FILAC ( fistula laser
                      closure In this procedure, a laser probe is inserted into the fistula tract, and laser energy
                      is used to ablate the tract from within. This promotes healing without extensive cutting
                      of tissues.</li>

                    <li>LIFT with LASER/ Distal laser ptoximal ligation</li>
                    <li>DLPS ( Distal laser proximal sloft)</li>
                    <li>Fixicision (fistula coring with proximal SLOFT)</li>
                    <li>VAAFT with LASER</li>
                    <li>
                      <b className="fs-6">
                        Benefits
                      </b>
                      Minimal tissue damage, reduced recurrence rates, quicker recovery, and
                      preservation of anal sphincter function (important for continence).
                    </li>
                  </ul>
                </p>


                <p className="txt-just">

                  <strong>4.Pilonidal Sinus:</strong>
                  <ul>
                    <li>
                      Laser surgery can be used to treat pilonidal sinus disease by ablating the sinus tract and
                      promoting closure. It is particularly beneficial for recurrent cases where traditional
                      surgery has failed..
                    </li>


                    <li>

                      <b className="fs-6"> Benefits:</b> Faster healing, less pain, and a lower risk of recurrence.
                    </li>
                  </ul>
                </p>
                <p className="txt-just">
                  <strong>5.Anal Warts (Condyloma):</strong>
                  <ul>
                    <li>Laser therapy is effective for the removal of anal warts caused by the human
                      papillomavirus (HPV). The laser precisely targets the warts, causing them to vaporize,
                      while minimizing damage to surrounding tissues.</li>
                    <li>
                      <b className="fs-6">
                        Benefits:
                      </b>
                      Precision removal, reduced risk of scarring, and minimal bleeding.</li>
                  </ul>
                </p>
                <p className="txt-just">
                  <strong>6. Rectal Polyps:</strong>
                  <ul>
                    <li> Small benign rectal polyps can be removed using laser surgery. The laser precisely cuts
                      the polyp without the need for extensive surgery.</li>
                    <li>
                      <b className="fs-6">
                        Benefits:
                      </b>
                      Faster procedure, minimal bleeding, and reduced complications.</li>
                  </ul>
                </p>


                <h6>
                  What are the Benefits of Laser Surgery for Anorectal Conditions:
                </h6>

                <p className="txt-just">


                  <strong>1. Minimally Invasive</strong>
                  <ul>
                    <li> Laser surgery causes minimal damage to surrounding tissues compared to
                      traditional surgery, leading to a quicker recovery.</li>
                  </ul>

                </p>

                <p className="txt-just">
                  <strong>2. Less Bleeding:</strong>
                  <ul>
                    <li>The laser seals blood vessels as it cuts, leading to significantly less bleeding during
                      and after the procedure.</li>
                  </ul>

                </p>


                <p className="txt-just">
                  <strong>3.  Reduced Pain: </strong>
                  <ul>
                    <li>
                      Laser surgery is associated with less post-operative pain due to reduced tissue
                      trauma and faster healing.
                    </li>
                  </ul>

                </p>
                <p className="txt-just">
                  <strong>4. Faster Recovery:</strong>

                  <ul>
                    <li>
                      Patients usually experience quicker recovery times and can return to normal
                      activities sooner.
                    </li>
                  </ul>

                </p>

                <p className="txt-just">
                  <strong>5. Lower Risk of Infections:</strong>
                  <ul>
                    <li>
                      The laser sterilizes the tissue during surgery, which reduces the risk of
                      post-operative infections.
                    </li>
                  </ul>


                  <strong>6. Daycare Procedure:</strong>
                  <ul>
                    <li>
                      Most laser surgeries for anorectal conditions are performed as outpatient
                      or daycare procedures, meaning patients can go home the same day.
                    </li>
                  </ul>


                  <strong>7. Reduced Recurrence Rates:</strong>
                  <ul>
                    <li>
                      For conditions like fistula-in-ano, laser treatment can reduce the
                      chances of recurrence compared to traditional methods.
                    </li>

                  </ul>
                </p>


                <h5>Procedure and Recovery:</h5>
                <p className="txt-just">



                  <strong>Procedure and Recovery</strong>

                  <ul>
                    <li>
                      <b className="fs-6"> Pre-procedure:</b> The patient may undergo a few diagnostic tests to assess the severity of the
                      condition. In some cases, bowel preparation may be required before the procedure.
                    </li>

                    <li>
                      <b className="fs-6"> Procedure:</b> Laser surgery is typically performed under local, regional, or general anesthesia,
                      depending on the condition. The surgeon uses a specialized laser fiber to treat the target tissue
                      with precision.
                    </li>

                    <li>
                      <b className="fs-6"> Post-procedure:</b> Most patients experience mild discomfort after surgery, which is manageable
                      with pain medications. The recovery period is shorter than traditional surgery, and most
                      patients can resume normal activities within a few days to a week, depending on the condition
                      treated.
                    </li>

                    <li>
                      <b className="fs-6">Follow-up:</b> Regular follow-up visits with the surgeon are important to ensure proper healing and
                      monitor for recurrence.
                    </li>


                  </ul>

                </p>


                <h5>What are Risks and Considerations:</h5>

                <p className="txt-just">While laser surgery has many advantages, there are some risks and considerations

                  <ul>
                    <li> Mild pain and swelling post-surgery</li>

                    <li> Burns to surrounding tissue (rare with experienced surgeons)</li>

                    <li> Recurrence of the condition, although laser treatments often have lower recurrence rates
                      compared to conventional methods</li>

                  </ul>
                </p>
                <p className="txt-just">
                  Laser surgery for anorectal conditions offers a modern, less invasive option for patients, particularly
                  those looking for faster recovery with less discomfort. However, it’s important to consult with a
                  specialist to determine if laser treatment is suitable for a specific condition.
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

export default reflux;
