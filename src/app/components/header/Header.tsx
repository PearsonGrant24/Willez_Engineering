import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



   const heroImages = [
      "assets/elements/img/barner/double-harvest.jpg",
      "assets/elements/img/solar-roof.jpg",
      "assets/elements/img/man-fixing-solar.png",
      // "https://cdn.prod.website-files.com/64c6e4021257dfdf4b2f57d1/65a9564ee64da3b66c471ecb_mischa-frank-6M9OhcblUHM-unsplash%201%20(18).png"
    ];
  


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



const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
     
     
       

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img 
              src="assets/elements/logos/willez-logo.png" 
              alt="Willez Logo" 
              className="img-fluid"
              style={{ maxHeight: "50px" }} 
            />
          </a> 

          {/* Toggler for offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas sidebar */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item"><a className="nav-link" href="/About">About</a></li>
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
                  <li><a className="dropdown-item" href="/SolarProducts">House wiring</a></li>
                  <li><a className="dropdown-item" href="/SolarProducts">Solar</a></li>
                  <li><a className="dropdown-item" href="/SolarProducts">System fix & supply</a></li>
                  <li><a className="dropdown-item" href="/SolarProducts">Electrical components</a></li>
                  <li><a className="dropdown-item" href="/SolarProducts">Electrical specing</a></li>
                  <li><a className="dropdown-item" href="/SolarProducts">Circuit wiring/rewiring</a></li>
                  <li><a className="dropdown-item" href="/SolarProducts">Earthing & faults</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/Technology">Technology</a></li>
              <li className="nav-item"><a className="nav-link" href="/Solutions">Solutions</a></li>
              <li className="nav-item"><a className="nav-link" href="Experience">Experience & Insights</a></li>
              <li className="nav-item">
                <a className="btn btn-all ms-3" href="GetinTouch">Get in Touch</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero section */}
      <section
      className="hero-banner d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImages[currentImage]})`,
      }}
    >
      <div className="overlay"></div>
      <div className="container position-relative">
        <h1 className="display-4 fw-bold">
          Powering a Brighter Future
        </h1>
        <p className="lead">
          High-efficiency solar, smart storage & reliable engineering
        </p>
        <button className="btn btn-lg btn-primary mt-3">Learn More</button>
      </div>
    </section>


    </>
  );
}
