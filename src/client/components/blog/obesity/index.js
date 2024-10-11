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

const Obesity = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Obesity</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Obesity
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
                <p className="txt-just">
                  Obesity is a complex metabolic condition influenced by multiple factors beyond just overeating. We will
                  discuss changes in the current practice. Yes excessive calorie intake contributes to weight gain, many
                  other physiological, genetic, environmental, and behavioral elements may need to be considered while
                  treating patients.Let us discuss one by one in details,
                  Personalised medicine and weight management: Overweight and obesity is strongly related to risk for
                  development of chronic diseases, from heart disease to type 2 diabetes and even certain cancers;
                  however, the contributing factors toward obesity are extremely complex and weight management
                  requires a multifaceted approach
                </p>
                <h4>
                  What causes obesity:
                </h4>
                <p className="txt-just">
                  <strong className="fs-5">
                    1. Genetic Factors : <br />
                   </strong>
                  The majority (90% to 95%) of overweight and obesity is polygenic and
                  multifactorial in nature. This means that whilst an individual’s susceptibility to becoming
                  overweight/obese has a strong genetic contribution, many other factors also play a significant
                  role, including environmental exposure to toxins and stress, gut health, hormonal health and
                  age, exercise behaviour, and dietary intake. Therefore, both genes and environment should be
                  considered to better understand the mechanisms behind becoming overweight/obese. There
                  is substantial evidence to show that variants in genes associated with weight management are
                  involved in different biological pathways, including the central nervous system, food sensing
                  and digestion, adipocyte differentiation, insulin signalling, lipid metabolism, muscle and liver
                  biology, and gut microbiota. A growing body of research suggests changes in adiposity and
                  metabolic response to low calorie diets may be modified by genetic variants related to
                  obesity, metabolic status, and nutrient preferences. This knowledge further supports the
                  implementation of a holistic and personalised approach to weight management, taking into
                  account an individual’s unique genetic code and how he/she would respond to dietary,
                  lifestyle and exercise interventions, thus improving motivation, compliance, and sustainable
                  weight management outcomes

                  <ul>
                    <li>
                      <b>  Strong Family History:</b> Genetics can strongly influence how body stores fat and how it burns
                      calories, and how it regulates hunger and satiety. Gene Variations: Specific genes, such as those
                      affecting leptin (a hormone that increases appetite), may be altered in some individuals, leading
                      to increased hunger or impaired metabolism. Many genes related to fat absorption and
                      metabolism, energy homeostasis, and carbohydrate responsiveness, and genes regulating
                      energy intake and feeding behaviour
                    </li>
                  </ul>
                </p>
                <p className="txt-just">

                  <strong className="fs-5">2.Hormonal Imbalances </strong>
                  <ul>
                    <li>
                      Leptin Resistanc Leptin is a hormone produced by fat cells that signals the brain to stop eating
                      when you&#39;re full. In some indidual with leptin resistanve , , the brain doesn&#39;t respond properly to
                      leptin, causing them to overeat even when fat stores are sufficient.
                    </li>
                    <li>
                      <b>
                        Insulin Resistance:
                      </b>
                      Obesity is often linked to insulin resistance, which causes the body to store
                      more fat. Insulin is a hormone that helps regulate blood sugar, and resistance to it can lead to
                      increased fat accumulation.
                    </li>
                    <li>
                      <b>
                        Thyroid Disorders:
                      </b>
                      Hypothyroidism (underactive thyroid) can slow metabolism, leading to
                      weight gain even without overeating.
                    </li>
                  </ul>
                </p>

                <p className="txt-just">

                  <strong className="fs-5">3.Metabolic Factors </strong>

                  <ul>
                    <li>
                      <b>
                        Basal Metabolic Rate (BMR):
                      </b>
                      Individuals with a lower BMR (the rate at which the body burns
                      calories at rest) may be prone to weight gain, as they require fewer calories to maintain bodily
                      functions.
                    </li>

                    <li>
                      <b>
                        Set Point Theory:
                      </b>
                      The body may have a set weight that it tries to maintain, making weight loss
                      more difficult as the body resists changes in fat storage.
                    </li>
                  </ul>
                </p>


                <p className="txt-just">

                  <strong className="fs-5">4.Environmental Factors </strong>


                  <ul>
                    <li>
                      <b> Food Availability:</b> In modern societies, access to high-calorie, processed foods is abundant.
                      Ultra-processed foods are often inexpensive, widely available, and heavily marketed,
                      encouraging overconsumption of energy-dense, nutrient-poor foods.
                    </li>
                    <li><b>  Sedentary Lifestyle:</b> Advances in technology and transportation have decreased the need for
                      physical activity. Many people have sedentary jobs and spend their leisure time in activities like
                      watching TV or using electronic devices.
                    </li>
                    <li><b>  Urbanization:</b> Limited access to green spaces or safe environments for exercise, along with
                      dependence on cars, can contribute to inactivity.
                    </li>
                    <li>  <b>Socioeconomic Status:</b> People with lower incomes may have limited access to healthy food
                      choices and opportunities for physical activity, which can lead to weight gain.
                    </li>
                  </ul>
                </p>

                <p className="txt-just">
                  <strong className="fs-5">5.Psychological Factors </strong>
                  <ul>
                    <li>
                      <b> Stress:</b> Chronic stress can lead to overeating as a coping mechanism. Stress also triggers the
                      release of cortisol, a hormone that promotes fat storage, particularly around the abdomen.</li>
                    <li> <b>Emotional Eating:</b> Some individuals eat to cope with emotions such as sadness, boredom, or
                      anxiety. This can lead to a cycle of weight gain and further emotional distress.</li>
                    <li><b> Depression and Mental Health Disorders: </b>Depression and other mental health conditions can
                      contribute to obesity. Some medications used to treat these conditions, like antidepressants,
                      also have weight gain as a side effect.</li>
                  </ul>
                </p>

                <p className="txt-just">
                  <strong className="fs-5">6.Sleep Disorders </strong>

                  <ul>


                    <li>
                      <b>Sleep Deprivation:</b> Poor sleep is associated with weight gain. Lack of sleep affects hunger
                      hormones (ghrelin and leptin), increasing appetite and cravings for high-calorie foods.
                    </li>
                    <li><b> Sleep Apnea:</b> Obesity can cause or worsen sleep apnea, and the condition itself can contribute
                      to obesity by disrupting normal sleep patterns and reducing energy expenditure.
                    </li>
                  </ul>
                </p>
                <p className="txt-just">
                  <strong className="fs-5">7.Medications </strong>
                  <ul><li>
                    <b> Weight-Promoting Drugs:</b> such as corticosteroids, antipsychotics, antidepressants, and
                    medications for diabetes, can lead.
                  </li></ul>
                </p>

                <p className="txt-just">
                  <strong className="fs-5">8.Gut Microbiome </strong>
                  <ul>
                    <li>
                      <b>  Microbiome Imbalance:</b> Research shows that the composition of gut bacteria can influence
                      weight gain. An imbalance in the microbiome may promote inflammation, increase fat storage,
                      and alter how the body processes food.
                    </li>

                    <li>
                      <b>  Diet and Microbiota:</b> Diets high in processed foods and low in fiber can negatively affect gut
                      bacteria, potentially contributing to obesity.
                    </li>
                  </ul>
                </p>

                <p className="txt-just">
                  <strong className="fs-5">
                    9.Socio-Cultural Factors  </strong>

                  <ul>
                    <li>
                      <b> Cultural Norms:</b> Societal attitudes toward food, body image, and physical activity can influence
                      eating behaviors and lifestyle choices. In some cultures, larger body size is considered desirable,
                      while in others, high-calorie foods may be associated with social gatherings and celebrations.
                    </li>
                    <li>
                      <b> Food Marketing and Advertising:</b> Aggressive marketing of unhealthy foods, especially to
                      children, can influence eating behaviors and preferences.
                    </li>
                  </ul>

                </p>

                <p className="txt-just">
                  <strong className="fs-5">10.Developmental Factors </strong>

                  <ul>
                    <li>
                      <b> Early Life Influences:</b> Conditions during pregnancy (such as maternal obesity or gestational
                      diabetes), infant feeding practices, and early childhood nutrition can predispose individuals to
                      obesity later in life.
                    </li>

                    <li>
                      <b> Childhood Obesity:</b>  Children who are obese are more likely to be obese as adults. Early eating
                      patterns, physical activity habits, and psychological influences play a crucial role.
                    </li>
                  </ul>

                </p>

                <p className="txt-just">
                  <strong className="fs-5">11.Endocrine Disorders </strong>


                  <ul>
                    <li>
                      <b> Cushing Syndrome:</b> Excess production of cortisol due to this condition can lead to significant
                      weight gain, particularly around the abdomen.
                    </li>

                    <li>
                      <b> Polycystic Ovary Syndrome (PCOS):</b>  This hormonal disorder in women can cause weight gain
                      and obesity, particularly in the abdomen, due to insulin resistance and hormone imbalances.
                    </li>
                  </ul>

                </p>


                <p className="txt-just">

                  <strong className="fs-5">Conclusion </strong>
                  <ul>
                    <li>
                      While overeating is a significant factor, obesity is a multifactorial condition with causes that span
                      genetics, environment, metabolism, hormones, psychological influences, and lifestyle. Addressing
                      obesity requires a holistic approach that considers these various contributors to develop effective
                      prevention and treatment strategies.
                    </li>


                  </ul>

                </p>

              </div>
              <div className="blog-view row">

                <h4>How do we address obesity</h4>
                <p className="txt-just">A multipronged approach to managing obesity involves addressing the condition from several angles to
                  achieve sustainable weight loss and overall health improvement. This approach combines lifestyle
                  changes, medical treatments, psychological support, and sometimes surgical interventions, depending
                  on the individual's needs.</p>

                <div className="txt-just">
                 <strong> 1. Dietary Interventions</strong>
                  <p><b>Personalized Nutrition Plan: </b> A calorie-controlled, balanced diet is key. Plans should focus on
                    nutrient-dense foods and be customized based on the patient&#39;s age, sex, medical conditions,
                    and preferences.
                  </p>
                  <p className="txt-just">

                    <ul>
                      <li>
                        <strong>Calorie Deficit </strong> Create a caloric deficit by reducing daily intake, typically 500–1000
                        calories/day, to lose 0.5–1 kg per week.
                      </li>

                      <li>
                        <strong>Calorie Deficit </strong> Create a caloric deficit by reducing daily intake, typically 500–1000
                        calories/day, to lose 0.5–1 kg per week.
                      </li>

                      <li>
                        <strong> Macronutrient Balance </strong> Increase protein and fiber intake while moderating
                        carbohydrates and fats.
                      </li>

                      <li>
                        <strong>Meal Frequency </strong> Encourage regular meals, possibly including intermittent fasting based
                        on individual tolerance.
                      </li>

                      <li>
                        <strong>
                          Behavioral Changes
                         </strong>Educate patients about mindful eating, portion control, and the
                        importance of avoiding processed and sugary foods.
                      </li>

                    </ul>




                  </p>
                </div>


                <p className="txt-just">
                  <strong>Physical Activity  </strong>
                  Increasing activity levels is a key component to a successful weight management outcome, however
                  research suggests that some individuals require much higher levels of physical activity to mobilise fat
                  stores, and the intensity and frequency of exercise becomes more important as a focus area to
                  improve metabolic rate and achieve sustained weight loss. xercise Prescription: A minimum of
                  150–300 minutes of moderate-intensity exercise per week is recommended.
                </p>

                <p>
                  <strong >1. Aerobic Exercise </strong>   Activities such as walking, cycling, and swimming to burn calories and
                  improve cardiovascular health.<br />
                  <strong>2. Strength Training </strong> Helps increase muscle mass and metabolic rate. <br />
                  <strong >
                    3.Lifestyle Modifications
                   </strong>  Encourage patients to incorporate more movement into their
                  daily routines (e.g., using stairs, standing desks). <br />
                  <strong>
                    Tailored Approach
                   </strong>  Activities should be based on individual ability, preferences, and
                  limitations, especially if joint problems or other conditions are present. <br /></p>

                <p className="txt-just">
                  <strong className="fs-5">3. Behavioral and Psychological Support </strong>
                  <p>
                    <strong>
                      Behavioral Therapy
                     </strong>  Help patients identify and modify unhealthy eating patterns and triggers.
                    Cognitive-behavioral therapy (CBT) can be effective in changing habits.<br />
                    <strong>Counseling </strong> Regular counseling sessions can help manage emotional eating, stress, and anxiety,
                    which often contribute to overeating.
                    <br />
                    <strong>Support Groups </strong>  Participation in obesity or weight loss support groups (in-person or online) can
                    provide emotional support and motivation.<br />
                    <strong>Goal Setting </strong> s Encourage setting realistic, small, and achievable goals rather than focusing solely
                    on large weight loss targets.<br />
                  </p>
                </p>
                <p className="txt-just">
                  <strong className="fs-5">4. Medication </strong>
                  <p>
                    <strong>Medication </strong>  In patients with a BMI ≥ 30 kg/m² or ≥ 27 kg/m² with comorbidities, medications
                    may be used to assist in weight loss.<br />
                    <strong>FDA-approved drugs </strong>   These include orlistat, liraglutide, and semaglutide, which aid in
                    appetite control and fat absorption.<br />
                    <strong>Combination Therapy </strong>   Sometimes, a combination of medications and lifestyle
                    interventions is more effective.<br />

                    <strong>Non surgical by gastric balloon </strong>   A gastric balloon is a non-surgical weight loss device placed in
                    the stomach to help reduce food intake and promote weight loss. There are several types of
                    gastric balloons, each differing slightly in design and method of insertion. Here&#39;s an overview of
                    the most common types, along with a diagram to illustrate the concept.<br />

                  </p>

                </p>
                <p className="txt-just">
                  <strong className="fs-5">5. Surgical Interventions </strong> <br />
                  <strong>Bariatric Surgery </strong>  Recommended for patients with a BMI ≥ 40 kg/m² or ≥ 35 kg/m² with obesity-
                  related health conditions who have not achieved significant weight loss with other methods.<br />
                  <strong>Types of Surgery </strong>  Gastric bypass, sleeve gastrectomy, and adjustable gastric banding are
                  commonly performed procedures.<br />
                  <strong>Post-Surgical Follow-Up </strong>  <br />
                  Nutritional supplementation and lifestyle changes are
                  necessary to maintain results and avoid complications.<br />
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

export default Obesity;
