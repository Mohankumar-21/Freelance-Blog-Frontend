import React, { createContext, useState, useEffect } from "react";
import img from "../assets/back.jpg";
import back from "../assets/bg.jpg";

export const BlogContext = createContext(null);



const Context = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [iconCount, setIconCount] = useState(5); 
  const [searchQuery, setSearchQuery] = useState(""); 

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };


  useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/blogs');
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            const data = await response.json();
            // console.log('dt',data)
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    fetchBlogs();
}, []);



  return (
    <BlogContext.Provider
      value={{ selectedCategory, changeCategory, iconCount,blogs, setIconCount, searchQuery, setSearchQuery,}}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default Context;
