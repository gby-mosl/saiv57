import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Activities from "./components/Activities";
import Staff from "./components/Staff";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Header />
    <About />
    <Activities />
    {/*<Skill />*/}
    <Staff />
    <Contact />
    <Footer />
  </>
)

