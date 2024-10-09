import React, { useState } from 'react';
import './Comment.css';

const Comment = () => {
  const [comment, setComment] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted comment:", comment);
    setComment(''); 
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); 
    console.log("Selected sorting order:", e.target.value);
  };

  return (
    <div className="comment-box">
      <div className="comment-header">
        <h4>0 Comments</h4>
        <div className="sort-container">
          <span className="sort-label">Sort by : </span>
          <select className="sort-dropdown" value={sortOrder} onChange={handleSortChange}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <hr className="comment-divider" /> 

      <form onSubmit={handleSubmit} className="comment-form">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" 
          alt="avatar"
          className="avatar-img"
        />
        <input
          placeholder="Write your comment here..."
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <hr className="comment-divider" />
    </div>
  );
};

export default Comment;
