import React, { useContext, useEffect } from "react";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Blogs from "../src/components/pages/Blogs";
import SingleBlog from "../src/components/pages/SingleBlog";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import AllAuthors from "./components/pages/AllAuthors";
import { Context } from "./main";
import axios from "axios";
import UpdateBlog from "./components/pages/UpdateBlog";
import { Blog } from "../../backend/models/blogSchema";

const App = () => {
  const { setUser, isAuthenticated, setIsAuthenticated, user, setBlogs } =
    useContext(Context);
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:4000/api/v1/user/myprofile",
            {
              withCredentials: true,
            }
          );
          if (data.success) {
            setUser(data.user);
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
            setUser({});
            console.error(data.message);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
          setIsAuthenticated(false);
          setUser({});
        }
      };
    
      const fetchBlogs = async () => {
        try {
          const { data } = await axios.get(
            "http://localhost:4000/api/v1/blog/all",
            { withCredentials: true }
          );
          if (data.success) {
            setBlogs(data.allBlogs);
          } else {
            setBlogs([]);
            console.error(data.message);
          }
        } catch (error) {
          console.error("Error fetching blogs:", error);
          setBlogs([]);
        }
      };
    
      fetchUser();
      fetchBlogs();
    }, [isAuthenticated, user]);
         useEffect(() => {
    if (isAuthenticated) {
      fetchUser();
    
    }
  }, [isAuthenticated]);
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<AllAuthors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/update/:id" element={<UpdateBlog />} />
        </Routes>
        <Footer />
        <Toaster />
    
    </>
  );
};

export default App;


;