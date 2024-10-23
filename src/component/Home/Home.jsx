import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../context/Context";
import Heading from "../Heading/Heading";
import "./Home.css";
import Social from "../SocialMedia/Social";

const Home = () => {
  const { selectedCategory, blogData } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8; 
  const navigate = useNavigate(); 

  // Filter blog data based on selected category
  const filteredData =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  // Calculate indices for pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredData.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleReviewClick = (id) => {
    navigate(`/${id}`); 
  };

  const getPaginationRange = () => {
    let startPage, endPage;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const midPoint = Math.ceil(5 / 2);
      if (currentPage <= midPoint) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + midPoint - 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - midPoint + 1;
        endPage = currentPage + midPoint - 1;
      }
    }
    return { startPage, endPage };
  };

  const { startPage, endPage } = getPaginationRange();

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
                <img src={blog.img} alt="Blog" className="blog-card-img" />
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
            <button className="page-button-align"
              onClick={() => paginate(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
              <button
                key={startPage + i}
                onClick={() => paginate(startPage + i)}
                className={currentPage === startPage + i ? "active-page" : ""}
              >
                {startPage + i}
              </button>
            ))}
            <button className="page-button-align"
              onClick={() => paginate(currentPage + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
