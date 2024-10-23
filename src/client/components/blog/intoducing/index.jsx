import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
//images
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07 } from "./img.jsx";
//components
import BlogListSearch from "../search/search.jsx";
import LastestBlog from "../lastestblog";
import CategoryWidget from "../categoryWidget";
import TagsWidget from "../tagswidget";
import Header from "../../header.jsx";
import Footer from "../../footer.jsx";
import Home1Header from "../../home/home-1/header.jsx";
import Home1Footer from "../../home/home-1/footer.jsx";
import { useParams } from "react-router-dom";
import Blogslists from "../../JSON/introducing.json"
import ImageWithBasePath from "../../../../core/img/imagewithbasebath.jsx";
const Introducing = (props) => {

  const [expdetails, setexpdetails]= useState('')
  const routeParams = {id:1};
  console.log(routeParams.id, "expertise");
  
  useEffect(() => {
    if (routeParams.id) {
      let expertiseDetails = Blogslists.find((i) => i.id === parseInt(routeParams.id));
      console.log(expertiseDetails); // You can handle the expertiseDetails further
      setexpdetails(expertiseDetails)
    }
  }, [routeParams.id]);
  
  return (
    <div>
      <Home1Header/>
      <div className="breadcrumb-bar-two">
      <div className="">
     
     <div className="row align-items-center position-relative">
       <ImageWithBasePath
         src="assets/img/bannerslider/intro_banner.webp"
         alt="kidney-image"
         className="img-fluid w-100" // Ensure the image takes the full width and is responsive
       />
       
       {/* Text and breadcrumb inside the banner */}
       <div className="col-md-12 col-12 text-center position-absolute top-50 start-50 translate-middle">
         <h2 className="breadcrumb-title text-white fs-1">INTRODUCING</h2>
         
         {/* Breadcrumb navigation */}
       
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
                      <img alt="" src={`/assets/img/icons/${expdetails.image_url}`} className="img-fluid" />
                    </Link>
                  </div>
                  <h3 className="blog-title">
                  {expdetails?.title}
                  </h3>
                  <div className="blog-info clearfix">
                    <div className="post-left">
                      <ul>
                       
                        <li>
                          <i className="far fa-calendar"></i>4 Dec 2019
                        </li>
                       
                        <li>
                          <i className="fa fa-tags"></i>Health Tips
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog-content">
                    <p>
                     {expdetails.description}
                    </p>
                    {expdetails?.points?.map((item)=>(
                       <>
                       <h5>
                         {item.question}
                       </h5>
                       <p>
                       {item.answer}
                       </p>
                       </>
                    ))}
                    <p>
                     
                    </p>
                   
                  </div>
                </div>

              
               
              </div>
            </div>
            
          </div>
        </div>
      </div>
     <Home1Footer/>
    </div>
  );
};

export default Introducing;
