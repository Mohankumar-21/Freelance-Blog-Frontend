import React, { useContext } from "react";
import { BlogContext } from "../../context/Context"; 
import './RecentPost.css';
import { useNavigate } from "react-router-dom";

const RecentPosts = () => {
  const { blogData } = useContext(BlogContext); 
  const navigate = useNavigate(); 

  const handleReviewClick = (id) => {
    navigate(`/${id}`); 
  };

  const recentPosts = blogData.slice(-3); 

  return (
    <div className="recent-posts">
      <h3>Latest Updates</h3>
        <div className="recent-blog-grid">
        {recentPosts.map((blog) => (
          <div key={blog.id} className="blog-card-grid">
            <img src={blog.img} alt="blog" className="blog-card1-img" />
             <div className="recent-blog-overlay">
             <h5>{blog.title}</h5>
                  <p>{blog.star}</p>
                  <button onClick={() => handleReviewClick(blog.id)}>
                    {blog.btn}
                  </button>
             </div>

          
        
          </div>
        ))}
    </div>
    </div>
  );
};

export default RecentPosts;






