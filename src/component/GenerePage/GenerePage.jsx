import React from "react";
import "./GenerePage.css";
import RecentPosts from "../RecentPost/RecentPost";
import Comment from "../Comment/Comment";
import GenereInfo from "./GenereInfo";


const splitParagraphIntoEqualParts = (text, numberOfParts) => {
  const words = text.split(" ");
  const wordsPerPart = Math.ceil(words.length / numberOfParts);
  const parts = [];

  for (let i = 0; i < numberOfParts; i++) {
    const chunk = words.slice(i * wordsPerPart, (i + 1) * wordsPerPart).join(" ");
    parts.push(`<p>${chunk}</p>`);
  }

  return parts.join(""); 
};

const GenerePage = () => {
  const longText = `
    Lorem ipsum dolor sit amet consectetur. Vitae dapibus dis adipiscing nibh.
    Enim at amet nulla natoque. Convallis rhoncus viverra amet facilisis cursus at.
    Sed vel tortor vitae adipiscing semper id eu velit. Vitae ac eu commodo etiam luctus
    posuere fringilla vitae ac. Nulla vitae augue quis sapien vel aliquam proin faucibus purus.
    Aliquam pulvinar sapien egestas eget. Sem tempor eu aliquet dictum pellentesque. Risus
    malesuada odio eros amet sodales adipiscing porttitor varius. Quam vel magnis sit facilisis
    viverra orci vestibulum. Auctor maecenas in quis pellentesque lacus. Faucibus lobortis nunc
    nulla sit. Sit amet gravida tristique ut blandit facilisis neque. Lorem ipsum dolor sit amet
    consectetur. Sit suspendisse varius turpis nulla pellentesque diam. Dictum arcu aliquam pulvinar vel.
    Ultrices nunc sit auctor tellus elementum. Amet faucibus vivamus sed in mauris. Nunc neque non
    risus rutrum diam vitae. Vivamus senectus scelerisque fusce augue. Ornare dis sit eget scelerisque non.
    Cursus feugiat nibh arcu sed at. Nam consequat pharetra amet ullamcorper neque neque sit.
    Non amet felis dignissim pharetra vestibulum quis auctor. Urna dignissim gravida sodales ornare.
  `;

  const splittedParagraph = splitParagraphIntoEqualParts(longText, 3); 

  return (
    <div className="genere-container">
      <div className="genere-main-content">
        <div className="description">
          <h1>Tamil language horror crime drama television web series</h1>
           <div>
               <div className="para-content">
                  <h3>Story :</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque esse. Magni perferendis culpa minima. Eum sit laborum necessitatibus enim dolorem, consequatur dicta facere voluptate exercitationem, eligendi voluptas rerum labore.
                  Illum mollitia animi doloribus quo corporis voluptatibus esse, impedit ut pariatur debitis eos dolore. Sunt neque officia inventore exercitationem, iste repudiandae ab? Ipsam eos possimus provident est eligendi aliquid ducimus!</p>
               </div>
               <div className="para-content">
                  <h3>Plus Point :</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque esse. Magni perferendis culpa minima. Eum sit laborum necessitatibus enim dolorem, consequatur dicta facere voluptate exercitationem, eligendi voluptas rerum labore.
                  Illum mollitia animi doloribus quo corporis voluptatibus esse, impedit ut pariatur debitis eos dolore. Sunt neque officia inventore exercitationem, iste repudiandae ab? Ipsam eos possimus provident est eligendi aliquid ducimus!</p>
               </div>
               <div className="para-content">
                  <h3>Minus Point :</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque esse. Magni perferendis culpa minima. Eum sit laborum necessitatibus enim dolorem, consequatur dicta facere voluptate exercitationem, eligendi voluptas rerum labore.
                  Illum mollitia animi doloribus quo corporis voluptatibus esse, impedit ut pariatur debitis eos dolore. Sunt neque officia inventore exercitationem, iste repudiandae ab? Ipsam eos possimus provident est eligendi aliquid ducimus!</p>
               </div>
               <div className="para-content">
                  <h3>Technical Aspect :</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque esse. Magni perferendis culpa minima. Eum sit laborum necessitatibus enim dolorem, consequatur dicta facere voluptate exercitationem, eligendi voluptas rerum labore.
                  Illum mollitia animi doloribus quo corporis voluptatibus esse, impedit ut pariatur debitis eos dolore. Sunt neque officia inventore exercitationem, iste repudiandae ab? Ipsam eos possimus provident est eligendi aliquid ducimus!</p>
               </div>
               <div className="para-content">
                  <h3>Final Review :</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque esse. Magni perferendis culpa minima. Eum sit laborum necessitatibus enim dolorem, consequatur dicta facere voluptate exercitationem, eligendi voluptas rerum labore.
                  Illum mollitia animi doloribus quo corporis voluptatibus esse, impedit ut pariatur debitis eos dolore. Sunt neque officia inventore exercitationem, iste repudiandae ab? Ipsam eos possimus provident est eligendi aliquid ducimus!</p>
               </div>
           </div>
        </div>
        <div className="gener">
          <GenereInfo />
        </div>
        <div className="user-comment-box">
          <Comment />
        </div>
      </div>
      <div className="Latest-posts">
        <RecentPosts />
      </div>
    </div>
  );
};

export default GenerePage;
