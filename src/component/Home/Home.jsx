import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../context/Context";
import Heading from "../Heading/Heading";
import "./Home.css";
import Social from "../SocialMedia/Social";




const Home = () => {
  const { selectedCategory, blogData } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10; 
  const navigate = useNavigate(); 

  const filteredData =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleReviewClick = (id) => {
    navigate(`/${id}`); 
  };

  return ( 
    <div>
      <Heading />
      <div className="Home-align">
        <div className="social-container">
          <Social />
        </div>
        <div className="blog-content">
          <div className="blog-grid">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <img src={blog.img} alt="img" className="blog-card-img" />
                <div className="blog-card-overlay">
                  <h5>{blog.title}</h5>
                  <p>{blog.star}</p>
                  <button onClick={() => handleReviewClick(blog.id)}>
                    {blog.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: Math.ceil(filteredData.length / blogsPerPage) }).map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active-page" : ""}
              >
                {i + 1}
              </button> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
