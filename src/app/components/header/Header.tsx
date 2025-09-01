import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Header() {
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 50) {
        navRef.current.classList.add("nav-scrolled");
        navRef.current.classList.remove("nav-top");
      } else {
        navRef.current.classList.add("nav-top");
        navRef.current.classList.remove("nav-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const AboutUs = () => {
    navigate("/AboutUs");
  };

  const Home = () => {
    navigate("/Home");
  };
  
  

  return (
    <>
     
     {/* Navbar */}
      <nav ref={navRef} className="navbar navbar-expand-lg navbar-custom nav-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand me-4" href="/">Willez</a>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-3">
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="productsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">House wiring</a></li>
                  <li><a className="dropdown-item" href="#">Solar</a></li>
                  <li><a className="dropdown-item" href="#">System fix & supply</a></li>
                  <li><a className="dropdown-item" href="#">Electrical components</a></li>
                  <li><a className="dropdown-item" href="#">Electrical specing</a></li>
                  <li><a className="dropdown-item" href="#">Circuit wiring/rewiring</a></li>
                  <li><a className="dropdown-item" href="#">Earthing & faults</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Technology</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Solutions</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Experience & Insights</a></li>
              <li className="nav-item">
                <a className="btn btn-all ms-3" href="#">Get in Touch</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <header className="hero d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <h1 className="display-5 fw-bold mb-3">Powering a Brighter Future</h1>
          <p className="lead mb-0">High-efficiency solar, smart storage & reliable engineering.</p>
        </div>
      </header>


    </>
  );
}
