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
            <div className="col-lg-12 col-md-12">
              <div className="blog-view row">
                <p>
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
                <p>
                  <strong>
                 1. Genetic Factors
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
<br/> * Strong Family History: Genetics can strongly influence how body stores fat and how it burns
calories, and how it regulates hunger and satiety. Gene Variations: Specific genes, such as those
affecting leptin (a hormone that increases appetite), may be altered in some individuals, leading
to increased hunger or impaired metabolism. Many genes related to fat absorption and
metabolism, energy homeostasis, and carbohydrate responsiveness, and genes regulating
energy intake and feeding behaviour
                </p>
                <p>
              <strong>2.Hormonal Imbalances</strong>  
              <br/>* Leptin Resistanc Leptin is a hormone produced by fat cells that signals the brain to stop eating
when you&#39;re full. In some indidual with leptin resistanve , , the brain doesn&#39;t respond properly to
leptin, causing them to overeat even when fat stores are sufficient.
<br/>* Insulin Resistance: Obesity is often linked to insulin resistance, which causes the body to store
more fat. Insulin is a hormone that helps regulate blood sugar, and resistance to it can lead to
increased fat accumulation.
<br/>* Thyroid Disorders: Hypothyroidism (underactive thyroid) can slow metabolism, leading to
weight gain even without overeating.
                </p>
                <p>
                Metabolic Factors
<br/> Basal Metabolic Rate (BMR): Individuals with a lower BMR (the rate at which the body burns
calories at rest) may be prone to weight gain, as they require fewer calories to maintain bodily
functions.

<br/>* Set Point Theory: The body may have a set weight that it tries to maintain, making weight loss
more difficult as the body resists changes in fat storage.
                </p>
                <p>
               <strong>Environmental Factors</strong> 
               <br/>*  Food Availability: In modern societies, access to high-calorie, processed foods is abundant.
Ultra-processed foods are often inexpensive, widely available, and heavily marketed,
encouraging overconsumption of energy-dense, nutrient-poor foods.
<br/>*  Sedentary Lifestyle: Advances in technology and transportation have decreased the need for
physical activity. Many people have sedentary jobs and spend their leisure time in activities like
watching TV or using electronic devices.
<br/>*  Urbanization: Limited access to green spaces or safe environments for exercise, along with
dependence on cars, can contribute to inactivity.
<br/>*  Socioeconomic Status: People with lower incomes may have limited access to healthy food
choices and opportunities for physical activity, which can lead to weight gain.
                </p>
                <p>
              <strong>Psychological Factors</strong>  
              <br/>* Stress: Chronic stress can lead to overeating as a coping mechanism. Stress also triggers the
release of cortisol, a hormone that promotes fat storage, particularly around the abdomen.
<br/>* Emotional Eating: Some individuals eat to cope with emotions such as sadness, boredom, or
anxiety. This can lead to a cycle of weight gain and further emotional distress.
<br/>* Depression and Mental Health Disorders: Depression and other mental health conditions can
contribute to obesity. Some medications used to treat these conditions, like antidepressants,
also have weight gain as a side effect.
                </p>
                <p>
              <strong>Sleep Disorders</strong>  
              <br/>* Sleep Deprivation: Poor sleep is associated with weight gain. Lack of sleep affects hunger
hormones (ghrelin and leptin), increasing appetite and cravings for high-calorie foods.
<br/>* Sleep Apnea: Obesity can cause or worsen sleep apnea, and the condition itself can contribute
to obesity by disrupting normal sleep patterns and reducing energy expenditure.
                </p>
                <p>
              <strong>Medications</strong>  
              <br/>* Weight-Promoting Drugs: such as corticosteroids, antipsychotics, antidepressants, and
medications for diabetes, can lead
                </p>

                <p>
                <strong>Gut Microbiome</strong> 
                <br/>*  Microbiome Imbalance: Research shows that the composition of gut bacteria can influence
weight gain. An imbalance in the microbiome may promote inflammation, increase fat storage,
and alter how the body processes food.
<br/>*  Diet and Microbiota: Diets high in processed foods and low in fiber can negatively affect gut
bacteria, potentially contributing to obesity.
                </p>
                <p>
              <strong>
              Socio-Cultural Factors </strong>  
              <br/>*Cultural Norms: Societal attitudes toward food, body image, and physical activity can influence
eating behaviors and lifestyle choices. In some cultures, larger body size is considered desirable,
while in others, high-calorie foods may be associated with social gatherings and celebrations.
<br/>* Food Marketing and Advertising: Aggressive marketing of unhealthy foods, especially to
children, can influence eating behaviors and preferences.
                </p>
                <p>
                <strong>Developmental Factors</strong> 
                <br/>*  Early Life Influences: Conditions during pregnancy (such as maternal obesity or gestational
diabetes), infant feeding practices, and early childhood nutrition can predispose individuals to
obesity later in life.
<br/>*  Childhood Obesity: Children who are obese are more likely to be obese as adults. Early eating
patterns, physical activity habits, and psychological influences play a crucial role.
                </p>
                <p>
              <strong>Endocrine Disorders</strong> 
              <br/>*Cushing Syndrome: Excess production of cortisol due to this condition can lead to significant
weight gain, particularly around the abdomen.
<br/>* Polycystic Ovary Syndrome (PCOS): This hormonal disorder in women can cause weight gain
and obesity, particularly in the abdomen, due to insulin resistance and hormone imbalances.
                </p>
                <p>
              <strong>Conclusion</strong>  
              <br/>* While overeating is a significant factor, obesity is a multifactorial condition with causes that span
genetics, environment, metabolism, hormones, psychological influences, and lifestyle. Addressing
obesity requires a holistic approach that considers these various contributors to develop effective
prevention and treatment strategies.
                </p>
              </div>
              <div className="blog-view row">
               <h4>How do we address obesity</h4>
               <p>A multipronged approach to managing obesity involves addressing the condition from several angles to
achieve sustainable weight loss and overall health improvement. This approach combines lifestyle
changes, medical treatments, psychological support, and sometimes surgical interventions, depending
on the individual's needs.</p>

               <p>
               1. Dietary Interventions
                 <p>Personalized Nutrition Plan: A calorie-controlled, balanced diet is key. Plans should focus on
nutrient-dense foods and be customized based on the patient&#39;s age, sex, medical conditions,
and preferences.</p>
                <p>
               <strong>Calorie Deficit</strong> Create a caloric deficit by reducing daily intake, typically 500–1000
calories/day, to lose 0.5–1 kg per week. <br/>
<strong> * Macronutrient Balance</strong> Increase protein and fiber intake while moderating
carbohydrates and fats.<br/>
 <strong>* Meal Frequency</strong> Encourage regular meals, possibly including intermittent fasting based
on individual tolerance.<br/>
 <strong>
 * Behavioral Changes
  </strong>*  Educate patients about mindful eating, portion control, and the
importance of avoiding processed and sugary foods.
                </p>
               </p>
               <p>
               <strong>Physical Activity</strong> 
Increasing activity levels is a key component to a successful weight management outcome, however
research suggests that some individuals require much higher levels of physical activity to mobilise fat
stores, and the intensity and frequency of exercise becomes more important as a focus area to
improve metabolic rate and achieve sustained weight loss. xercise Prescription: A minimum of
150–300 minutes of moderate-intensity exercise per week is recommended.
               </p>
               <p>
              <strong>1. Aerobic Exercise</strong>   Activities such as walking, cycling, and swimming to burn calories and
improve cardiovascular health.<br/>
  <strong>2. Strength Training</strong> Helps increase muscle mass and metabolic rate. <br/>
<strong>
3.Lifestyle Modifications
  </strong>  Encourage patients to incorporate more movement into their
daily routines (e.g., using stairs, standing desks). <br/>
<strong>
Tailored Approach
  </strong>  Activities should be based on individual ability, preferences, and
limitations, especially if joint problems or other conditions are present. <br/></p>

<p>
  <strong>3. Behavioral and Psychological Support</strong>
  <p>
  <strong>
  Behavioral Therapy
    </strong>  Help patients identify and modify unhealthy eating patterns and triggers.
Cognitive-behavioral therapy (CBT) can be effective in changing habits.<br/>
<strong>Counseling</strong> Regular counseling sessions can help manage emotional eating, stress, and anxiety,
which often contribute to overeating.
<br/>
<strong>Support Groups</strong>  Participation in obesity or weight loss support groups (in-person or online) can
provide emotional support and motivation.<br/>
<strong>Goal Setting</strong> s Encourage setting realistic, small, and achievable goals rather than focusing solely
on large weight loss targets.<br/>
  </p>
</p>
<p>
<strong>medication</strong> 
<p>
<strong>Medication</strong>  In patients with a BMI ≥ 30 kg/m² or ≥ 27 kg/m² with comorbidities, medications
may be used to assist in weight loss.<br/>
<strong>FDA-approved drugs</strong>   These include orlistat, liraglutide, and semaglutide, which aid in
appetite control and fat absorption.<br/>
<strong>Combination Therapy</strong>   Sometimes, a combination of medications and lifestyle
interventions is more effective.<br/>

<strong>Non surgical by gastric balloon</strong>   A gastric balloon is a non-surgical weight loss device placed in
the stomach to help reduce food intake and promote weight loss. There are several types of
gastric balloons, each differing slightly in design and method of insertion. Here&#39;s an overview of
the most common types, along with a diagram to illustrate the concept.<br/>
<strong>Types of Gastric Balloons:</strong>  <br/>
<strong>Single Gastric Balloon:</strong>  <br/>
<strong>Description</strong>  A single inflatable balloon made of silicone is inserted into the stomach. It occupies
space in the stomach, making the patient feel full faster and for longer.<br/>
<strong>Procedure</strong>: It's usually inserted endoscopically and filled with saline or gas. After 6 months, it&#39;s
removed through the same method.<br/>
<strong>Brands</strong> : Examples include the Orbera Balloon.<br/>
<strong>Dual Gastric Balloon</strong> :<br/>
<strong>Description</strong> <br/>
  This consists of two balloons that are inflated inside the stomach. It is designed to
improve balance and reduce the risk of deflation complications.<br/>
<strong>Procedure</strong>  Inserted endoscopically and filled with saline. Typically removed after 6 months.<br/>
<strong>Brands</strong>  Examples include the ReShape Duo Balloon.<br/>
<strong>Adjustable Gastric Balloon</strong> <br/>
<strong>Description</strong>This balloon can be adjusted post-insertion without removing it. It allows for
volume adjustments based on patient progress.<br/>
<strong>Procedure</strong><br/>
 Inserted endoscopically, filled with saline, and adjusted as needed over time.
 <strong>Brands</strong><br/>
 Examples include the Spatz3 Adjustable Balloon.
 <strong>Swallowable Gastric Balloon :</strong><br/>

 <strong>Description</strong><br/>
 This balloon is swallowed in capsule form, and once in the stomach, it is inflated
with gas or liquid via a small catheter. It does not require endoscopy for insertion or removal.
 Procedure: The balloon is filled after swallowing and is naturally excreted after a certain period
(e.g., 3-4 months).<br/>
<strong>Brands</strong><br/>
 Examples include the Elipse Balloon
</p>

</p>
<p>
<strong>5. Surgical Interventions</strong> <br/>
<strong>Bariatric Surgery</strong>  Recommended for patients with a BMI ≥ 40 kg/m² or ≥ 35 kg/m² with obesity-
related health conditions who have not achieved significant weight loss with other methods.<br/>
<strong>Types of Surgery</strong>  Gastric bypass, sleeve gastrectomy, and adjustable gastric banding are
commonly performed procedures.<br/>
<strong>Post-Surgical Follow-Up</strong>  <br/>
 Nutritional supplementation and lifestyle changes are
necessary to maintain results and avoid complications.<br/>
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home1Footer />
    </div>
  );
};

export default Obesity;
