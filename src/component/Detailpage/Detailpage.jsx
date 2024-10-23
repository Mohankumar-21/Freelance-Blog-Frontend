import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../../context/Context";
// import SocialMedia from "../SocialMedia/Social";
import logo from "../../assets/logo6.png";
import "./Detailpage.css";
import GenerePage from "../GenerePage/GenerePage";

const Detailpage = () => {
  const { id } = useParams();


  
  const { blogs} = useContext(BlogContext);


  const blog = blogs.find((blog) => blog._id === id);


  if (!blog) {
    return <p>Blog not found</p>;
  }

  // useEffect(() => {
  //   setIconCount(3);

  //   return () => setIconCount(5);
  // }, [setIconCount]);

  return (
    <>
    <div className="DBlog-Container">
      <div className="videoDescription">
        <h2>{blog.title}</h2>
        <a href={blog.back} target="_blank" rel="noopener noreferrer">
          <img
            className="video-img-align"
            src={blog.video}
            alt={blog.title}
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </a>
        <div className="blog-description">
          <p className="blog-p" >{blog.simpledescription}</p>
          <div className="logo-star-align">
          <p>
            {blog.star} {blog.star} {blog.star} {blog.star} {blog.star}
          </p>
          <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
    <GenerePage blog = {blog}/>
    </>
  );
};

export default Detailpage;
