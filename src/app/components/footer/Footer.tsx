import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import SlidingPane from "react-sliding-pane";


export default function Footer() {

    return (
        <>
        <footer>
            {/* <div className="steps-block" style={{color:'white'}}>
                <div className="container-fluid" style={{background:'orange'}}>
                    <div className="container">
                    <div className="row">
                    <div className="col-md-4 steps-block-col">
                        <i className="fa fa-truck" />
                        <div>
                        <h2>Free shipping</h2>
                        <em>Express delivery withing 3 days</em>
                        </div>
                        <span>&nbsp;</span>
                    </div>
                    <div className="col-md-4 steps-block-col">
                        <i className="fa fa-gift" />
                        <div>
                        <h2>Daily Gifts</h2>
                        <em>3 Gifts daily for lucky customers</em>
                        </div>
                        <span>&nbsp;</span>
                    </div>
                    <div className="col-md-4 steps-block-col">
                        <i className="fa fa-phone" />
                        <div>
                        <h2>477 505 8877</h2>
                        <em>24/7 customer care available</em>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div> */}
            <div className="footer-4 footer-wrap" style={{background:'#313030'}}>           
                <div className="footer-widgets">
                    <div className="container">
                        <div className="row justify-content-between">                            
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h4>INFORMATION</h4>
                                    </div>
                                    <ul>
                                        <li><a href="/Home">Contact Us</a></li>
                                        <li><a href="/AboutUs">About Us</a></li>
                                        {/* <li><a href="/menu">Customer Service</a></li> */}
                                        <li><a href="/Home">Promotions</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid">
                                    <div className="wid-title">
                                        <h4>PRODUCTS</h4>
                                    </div>

                                    <ul>
                                        <li><a href="#Backpacks">House Wiring</a></li>
                                        <li><a href="#Sportsbags">Solar system fix & supply</a></li>
                                        <li><a href="#Luggagebags">Electrical components</a></li>
                                        <li><a href="#Coolerbags">Electrical specing</a></li>
                                        <li><a href="#Luggagebags">Circuit wiring/rewiring</a></li>
                                        <li><a href="#Backpacks">Earthing</a></li>
                                        <li><a href="#Coolerbags">Pencil cases</a></li>
                                        <li><a href="#Luggagebags">Electrical related faults</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                            <div className="col-md-6 col-xl-3 col-12">
                                <div className="single-footer-wid contact_widget_2">
                                    <div className="wid-title">
                                        <h4 id="contactus">OUR CONTACTS</h4>
                                    </div>
                                    <div className="contact-us">
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                {/* <i className=""></i> */}
                                            </div>
                                            <div className="contact-info">
                                                <p>8 Chigasa Close, Marlborough</p>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="icon01"></i>
                                            </div>
                                            <div className="contact-info">
                                                <a href="">
                                                    <p>Harare, Zimbabwe </p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="icon01">Phone:</i>
                                            </div>
                                            <div className="contact-info">
                                                <a href="#">
                                                    <p>+263 71 933 9292</p>
                                                    <p>+263 78 121 5625</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="icon">
                                                <i className="icon01">Email:</i>
                                            </div>
                                            <div className="contact-info">
                                                <a href="sharon@kanhava.co.zw">
                                                    <p>sales@willezeng.co.zw</p>
                                                    <p>info@willezeng.co.zw</p>
                                                </a>
                                            </div>
                                        </div>                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 col-12 pr-xl-4">
                                <div className="single-footer-wid site_footer_widget">
                                    <a href="AboutUs">
                                        {/* <img src="/assets/pages/img/KanhavaLogo02.png" style={{background:"#313030"}} alt="" height={64}/> */}
                                        <div className="wid-title">
                                        <h4>Get In Touch</h4>
                                    </div>
                                    </a>
                                    <p className="mt-4">
                                    Please note that we do not have any job vacancies at the moment.

                                        <button type='submit'>Submit</button>
                                    </p>
                                </div>
                            </div>
                            {/*    /.col-lg-3 - single-footer-wid    */}
                        </div>
                    </div>
                </div> 
                </div>               
            </footer>          
        </>
    );

};
