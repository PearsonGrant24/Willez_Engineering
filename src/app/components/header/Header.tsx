import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useAuth } from "../../../auth/provider/AuthProvider";
// import {setCurrency} from "../../../redux/features/menu/MenuSlice.ts";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const AboutUs = () => {
    navigate("/AboutUs");
  };

  const Home = () => {
    navigate("/Home");
  };

  return (
    <>
      <header className="header-wrap header-5">
        <div className="top-header d-none d-md-block">
          <div className="container-flud">
            <div className="row">
              <div className="col-md-7 pr-md-0 col-12">
                <div className="header-cta">
                  <ul>
                    <li>
                      <a href="mailto:pearsongrant23@gmail.com">
                        <i
                          className="fal fa-envelope"
                          style={{ color: "#e6400c" }}
                        ></i>
                        willezeng@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+263 771240325">
                        <i className="fal fa-phone"></i>+263 77 124 0325 / +263
                        71 268 8838
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-12">
                <div className="header-right-cta d-flex justify-content-end">
                  <div className="social-profile mr-30">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>

                  {/* <div className="lan-select ml-30">
                                    <form>
                                        <select onChange={(e)=>{ dispatchChangeCurrency(e.target.value) }}>
                                            <option value="USD">USD - United States Dollars</option>
                                            <option value="ZiG">ZiG - Zimbabwe Gold</option>
                                        </select>
                                    </form>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-header-wraper">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="header-logo">
              <div className="logo">
                <a href="/Home">
                  <img
                    className={"logo"}
                    src="/assets/pages/img/KanhavaLogo01.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon " />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" onClick={Home}>
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={AboutUs}>
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#Backpacks">
                      Backpacks
                    </a>
                    <a className="dropdown-item" href="#Sportsbags">
                      Sports bags
                    </a>
                    <a className="dropdown-item" href="#Luggagebags">
                      Travel bags
                    </a>
                    <a className="dropdown-item" href="#Coolerbags">
                      Food/Cooler bags
                    </a>
                    <a className="dropdown-item" href="#Luggagebags">
                      Gym bags
                    </a>
                    <a className="dropdown-item" href="#Backpacks">
                      Book bags
                    </a>
                    <a className="dropdown-item" href="#Coolerbags">
                      Pencil bags
                    </a>
                    <a className="dropdown-item" href="#Luggagebags">
                      Chair bags
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactus">
                    Contacts
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0"></form>
            </div>
          </nav>
        </div>
      </header>
      <div className="header-gutter"></div>
    </>
  );
}
