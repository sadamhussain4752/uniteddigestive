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
import Blogslists from "../../JSON/Blogs.json"
const BlogDetailsdynimc = (props) => {

  const [expdetails, setexpdetails]= useState('')
  const routeParams = useParams();
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
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">{expdetails?.title}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home-2">Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                  {expdetails?.title}
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
                          <div className="post-author">
                            <Link to="/patient/doctor-profile">
                              <img src={IMG02} alt="Post Author" />
                              {/* <span>Dr. Darren Elder</span> */}
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="far fa-calendar"></i>4 Dec 2019
                        </li>
                        <li>
                          <i className="far fa-comments"></i>12 Comments
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

              
                <div className="card author-widget clearfix">
                  <div className="card-header">
                    <h4 className="card-title">About Author</h4>
                  </div>
                  <div className="card-body">
                    <div className="about-author">
                      <div className="about-author-img">
                        <div className="author-img-wrap">
                          <Link to="/patient/doctor-profile">
                            <img
                              className="img-fluid rounded-circle"
                              alt=""
                              src={IMG03}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="author-details">
                        <Link
                          to="/patient/doctor-profile"
                          className="blog-author-name"
                        >
                         {expdetails?.author}
                        </Link>
                        <p className="mb-0">
                        {expdetails?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
             

                <div className="card new-comment clearfix">
                  <div className="card-header">
                    <h4 className="card-title">Leave Comment</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>
                          Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>
                          Your Email Address{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Comments</label>
                        <textarea rows="4" className="form-control"></textarea>
                      </div>
                      <div className="submit-section">
                        <button
                          className="btn btn-primary submit-btn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-12">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <BlogListSearch />
                <LastestBlog />
                <CategoryWidget />
                <TagsWidget />
              </StickyBox>
            </div> */}
          </div>
        </div>
      </div>
     <Home1Footer/>
    </div>
  );
};

export default BlogDetailsdynimc;
