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

const GuthealthCare = (props) => {
  const [expdetails, setexpdetails] = useState("");

  return (
    <div>
      <Home1Header />
      {/* <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Gut Health Library</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Gut Health Library
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
      <section className="pt-5 mnim-bg pb-4">
        <div className="container pt-lg-5 mt-lg-4">
          <div className="row d-flex align-items-center">
            <div className="col-3">
              <img src="https://www.uniteddigestive.com/wp-content/uploads/2022/10/gettyimages-667825534-170667a-2.png" className="gth-img" alt="" />
            </div>

            <div className="col-9">
              <p className="gth-sub-hed">
                Featured Condition
              </p>
              <p className="gth-hed">
                Hemorrhoids
              </p>

              <p className="gth-cont">
                Embarrassed by hemorrhoids? Don’t let that stop you from seeking treatment to relieve your discomfort.
              </p>

              <a class="read-more-test" href="/">
                Learn More
              </a>
            </div>


          </div>
        </div>
      </section>

      <div className="content">
        <div className="container">
          <div className="mt-4 mb-5">
            <h3>All Conditions</h3>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-view row">
                {GulHealth.map((items, index) => (
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body ">
                        <h5 class="card-title">{items.title}</h5>
                        <p class="card-text d-flex">
                          <span>

                            {items.description.slice(0, 79)} ...

                          </span>
                          <a
                            href={`guthealth-details/${index + 1}`}
                            class="btn "
                          >
                            <i class="fa fa-chevron-right con-arw"></i>
                          </a>

                        </p>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home1Footer />
    </div>
  );
};

export default GuthealthCare;
