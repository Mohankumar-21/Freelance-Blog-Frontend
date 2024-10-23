import React, { createContext, useState } from "react";
import img from "../assets/back.jpg";
import back from "../assets/bg.jpg";

export const BlogContext = createContext(null);

const blogData = [
  {
    id: 1,
    img,
    title: "Trending Blog 1",
    category: "Trending",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    btn: "Watch review",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 2,
    img,
    title: "Kollywood Blog",
    category: "Kollywood",
    btn: "Watch review",
    back,
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 3,
    img,
    title: "Bollywood Blog",
    category: "Bollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 4,
    img,
    title: "Tollywood Blog",
    category: "Tollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 5,
    img,
    title: "Hollywood Blog",
    category: "Hollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 6,
    img,
    title: "Trending Blog 2",
    category: "Trending",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 7,
    img,
    title: "Kollywood Blog 2",
    category: "Kollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 8,
    img,
    title: "Bollywood Blog 2",
    category: "Bollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 9,
    img,
    title: "Bollywood Blog",
    category: "Bollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    star: "⭐",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
  },
  {
    id: 10,
    img,
    title: "Tollywood Blog",
    category: "Tollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 11,
    img,
    title: "Hollywood Blog",
    category: "Hollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 12,
    img,
    title: "Trending Blog 2",
    category: "Trending",
    btn: "Watch review",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    star: "⭐",
  },
  {
    id: 13,
    img,
    title: "Kollywood Blog 2",
    category: "Kollywood",
    btn: "Watch review",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    star: "⭐",
  },
  {
    id: 14,
    img,
    title: "Bollywood Blog 2",
    category: "Bollywood",
    btn: "Watch review",
    back,
    video: "https://www.youtube.com/embed/_xzZYelMqow",
    description :"A crime branch Inspector Rishi is assigned to investigate a series of bizarre murders in a small mountain village.",
    star: "⭐",
  },
];

const Context = ({ children }) => {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [iconCount, setIconCount] = useState(5); 

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <BlogContext.Provider
      value={{ selectedCategory, changeCategory, blogData,iconCount, setIconCount }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default Context;
