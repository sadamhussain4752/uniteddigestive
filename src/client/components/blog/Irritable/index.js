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

const Irritable = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">  IBS



              </h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                  IBS




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
                Irritable Bowel Syndrome (IBS) is a common functional gastrointestinal disorder characterized by
chronic abdominal pain, discomfort, bloating, and changes in bowel habits (diarrhea, constipation, or
both). It is common disease and affects the large intestine but does not cause permanent damage or
increase the risk of other digestive diseases.
                </p>
                <h4>
                What causes Causes of IBS:
                </h4>
                <p className="txt-just">


                  <ul>
                    <li>
                    <strong>
                    1. Gut-Brain axis:
                  </strong>
                  Gut-Brain axis: Miscommunication between the brain and the gut can lead to altered bowel
                  function and sensitivity.
                    </li>
                    <li>
                  <strong>2. Abnormal Intestinal Motility:
                    </strong>   People with IBS may experience abnormal muscle contractions in
                    the intestines, leading to diarrhea (increased contractions) or constipation (slower contractions).
                    </li>


                    <li>
                  <strong>
                      3. Increased Gut Sensitivity: </strong> The intestinal lining may be more sensitive, leading to pain or
                    discomfort from normal gut activity (like gas or stool movement).
                    </li>


                    <li>
                  <strong>4. Gut Microbiota Imbalance:
                    </strong>   An imbalance in the gut bacteria (dysbiosis) may contribute to IBS
                    symptoms.
                    </li>


                    <li>
                  <strong>5. Post-Infectious IBS::
                    </strong>  IBS can develop after a severe gastrointestinal infection, like gastroenteritis.
                    </li>


                    <li>
                  <strong>6. Food Sensitivities:
                    </strong>   Certain foods can trigger symptoms in people with IBS, including dairy,
gluten, fatty foods, and foods high in FODMAPs (fermentable oligosaccharides, disaccharides,
monosaccharides, and polyols).
                    </li>



                    <li>
                  <strong>6. Stress and Psychological Factors:
                    </strong>  Stress and anxiety can exacerbate IBS symptoms, as the gut is
                    sensitive to emotional changes.
                    </li>

                    <li>
                  <strong>7. Food Sensitivities:
                    </strong>   Certain foods can trigger symptoms in people with IBS, including dairy,
gluten, fatty foods, and foods high in FODMAPs (fermentable oligosaccharides, disaccharides,
monosaccharides, and polyols).
                    </li>

                    <li>
                  <strong>8.
                      Hormonal Changes:  </strong> IBS symptoms often worsen during menstruation, suggesting a hormonal
                    link.
                    </li>

                    <li>
                  <strong>9.
                  Drugs like antibiotics:  </strong> 
                    </li>
                  
                   
                  </ul>
                </p>
                


                <p className="txt-just">



                  <strong>What are theTypes of IBS</strong>
                  <p>IBS is classified based on the predominant bowel habit:</p>
                  <ul>

                    <li>

                   <strong>
                   IBS with Diarrhea (IBS-D):
                    </strong>   Frequent loose stools, urgency, and abdominal discomfort.

                    </li>



                    <li>

                   <strong>
                   
                      IBS with Constipation (IBS-C): </strong>  Infrequent, hard stools, difficulty passing stool, and abdominal
                    bloating.

                    </li>



                    <li>

                   <strong>
                   
                      IBS with Mixed Bowel Habits (IBS-M): </strong>  Alternating episodes of diarrhea and constipation.

                    </li>



                    <li>

                   <strong>
                  
                      IBS Unclassified (IBS-U): </strong>  Symptoms that don’t fit neatly into the above categories but still
                    involve significant bowel habit changes and discomfort.
                    </li>


                   

                  </ul>
                </p>
                <p className="txt-just">
                  <strong>What are the Symptoms of IBS </strong>

                  <ul>

                    <li> Abdominal pain or cramping, often relieved by a bowel movement</li>

                    <li>Bloating and gas</li>
                    <li>Diarrhea, constipation, or both</li>
                    <li>Mucus in the stool</li>
                    <li>Feeling of incomplete evacuation after a bowel movement</li>
                   
                  </ul>
                </p>


                <p className="txt-just">

                  <strong>How it is diagnosed:</strong>
                  <ul>
                    <li>
                    IBS is diagnosed primarily based on symptoms and by ruling out other conditions. The Rome IV criteria is
used, which includes abdominal pain at least one day per week in the last three months, associated with
two or more of the following:
                    </li>
                    <li> Pain related to defecation</li>

<li>Changes in stool frequency</li>
<li>Changes in stool form (appearance)</li>
<li>Tests such as blood tests, stool tests, and colonoscopy may be done to exclude other conditions like
celiac disease, inflammatory bowel disease, or infections.</li>


                    
                  </ul>
                </p>
                <p className="txt-just">
                  <strong>1.Dietary and Lifestyle Changes:</strong>
                  <ul>
                    <li><strong>Low FODMAP Diet:
                      </strong>  A diet low in fermentable carbohydrates can reduce IBS symptoms.
                      </li>


                      <li><strong>Increase Fiber (for IBS-C):
                      </strong>   Soluble fiber (like psyllium) can help with constipation, but insoluble
                      fiber (like wheat bran) may worsen symptoms.
                      </li>


                      <li><strong>Avoid Trigger Foods:
                      </strong>   Foods that aggravate symptoms, such as dairy, fatty foods, caffeine,
                      alcohol, and spicy foods, should be avoided.
                      </li>

                      <li><strong>Stay Hydrated:
                      </strong>  Drinking plenty of water helps with constipation.
                      </li>

                      <li><strong>Regular Exercise:
                      </strong>  Physical activity helps regulate bowel movements and reduces stress.
                      </li>


                    
                   
                  </ul>
                </p>


                <p className="txt-just">
                  <strong>2. Medications:</strong>
                  <ul>
                    <li><strong>Antispasmodics:
                      </strong>   These medications (e.g., hyoscine, dicyclomine) can relieve abdominal
                      cramping and pain.
                      </li>


                      <li><strong>Laxatives (for IBS-C):
                      </strong>   Osmotic laxatives like polyethylene glycol can help relieve constipation.
                      </li>


                      <li><strong>Antidiarrheal Medications (for IBS-D):
                      </strong>    Loperamide can reduce diarrhea.
                      </li>

                      <li><strong>Bile Acid Sequestrants (for IBS-D):
                      </strong>   These reduce diarrhea by binding excess bile acids.
                      </li>

                      <li><strong>Antidepressants:
                      </strong>  Low doses of tricyclic antidepressants (TCAs) or selective serotonin reuptake
                      inhibitors (SSRIs) can help reduce pain and improve bowel symptoms.
                      </li>


                      <li><strong>Gut-Targeted Antibiotics:
                      </strong>   Rifaximin is sometimes used to manage IBS-D by altering gut bacteria.
                      </li>


                      <li><strong>Serotonin Modulators:
                      </strong>   These drugs (e.g., alosetron, for IBS-D) affect gut motility and sensitivity.
                      </li>


                    
                   
                  </ul>
                </p>



                <p className="txt-just">
                  <strong>3. Psychological Therapies:</strong>
                  <ul>
                    <li><strong>Cognitive Behavioral Therapy (CBT):
                      </strong>   Helps manage the stress and anxiety that often accompany
                      IBS.
                      </li>


                      <li><strong>Gut-Directed Hypnotherapy:
                      </strong>   This therapy focuses on reducing gut hypersensitivity and
                      regulating gut function.
                      </li>


                      <li><strong>Stress Management:
                      </strong>    Yoga, meditation, and relaxation exercises can help reduce symptom
                      severity.
                      </li>

                     


                    
                   
                  </ul>
                </p>



                <p className="txt-just">
                  <strong>3. Probiotics::</strong>
                  <p>
                  Some evidence suggests that probiotics may improve IBS symptoms by balancing gut
                  bacteria, although the effectiveness varies among individuals and probiotic strains.
                  </p>
                  <ul>
                    <li><strong> Education and Support: 
                      </strong> Understanding IBS and its triggers can help patients manage symptoms
                      effectively.
                      </li>


                      <li><strong>Regular Monitoring: 
                      </strong>   Since IBS is a chronic condition, periodic follow-up with a healthcare
                      provider helps adjust treatment as needed.
                      </li>


                      <li><strong> Symptom Diaries:
                      </strong>    Keeping a record of food intake, bowel habits, and stress levels helps identify
                      triggers.
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

export default Irritable;
