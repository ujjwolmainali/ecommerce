import React from "react";
import Header from "./components/header";
import Store from "./components/store";
import Home from "./components/home";
import About from "./components/about";
import Blog from "./components/blog";
import Page from "./components/page";
import Contact from "./components/contact";
import Singlepage from "./components/singlepage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/page" element={<Page />} />
        <Route path="/Singlepage" element={<Singlepage/>} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
