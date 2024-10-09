import React from "react";
import imgSrc from "../../assets/back.jpg";
import "./GenerePage.css";

const GenereInfo = () => {
  return (
    <div className="genere-info-container">
      <div className="genere-image">
        <img src={imgSrc} alt="img" />
      </div>
      <div className="genere-info">
        <div className="genere-item">
          <strong>Genre:</strong> <span>Crime, Drama, Horror</span>
        </div>
        <div className="genere-item">
          <strong>Created by:</strong> <span>J.S. Nandhini</span>
        </div>
        <div className="genere-item">
          <strong>Directed by:</strong> <span>J.S. Nandhini</span>
        </div>
        <div className="genere-item">
          <strong>Starring:</strong>{" "}
          <span>Naveen Chandra, Sunaina Yella, Kanna Ravi</span>
        </div>
        <div className="genere-item">
          <strong>Music by:</strong> <span>Ashwath</span>
        </div>
        <div className="genere-item">
          <strong>Country of origin:</strong> <span>India</span>
        </div>
        <div className="genere-item">
          <strong>Original language:</strong> <span>Tamil</span>
        </div>
        <div className="genere-item">
          <strong>Seasons:</strong> <span>1</span>
        </div>
        <div className="genere-item">
          <strong>No. of episodes:</strong> <span>10</span>
        </div>
      </div>
    </div>
  );
};

export default GenereInfo;
