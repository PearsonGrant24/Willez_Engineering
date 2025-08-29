import React from "react";
import {HomePageSlider} from "./layout/widgets/sliders/HomePageSlider.tsx";
import 'swiper/css';

export default function Home() {

return (
    <>
    {/* <HomePageSlider/> */}

         {/* <!-- Arrow Section --> */}
        <section class="arrow-section">
            <div class="container position-relative">
            
            {/* <!-- CSS Right Arrow --> */}
            <div class="arrow-right">
                <div class="arrow-line"></div>
                <div class="arrow-head"></div>
            </div>

            {/* <!-- Content shifted to the right --> */}
            <div class="row justify-content-end">
                <div class="col-md-7 text-start">
                <h2 class="fw-bold mb-3">
                    Text About Solar Energy Technology
                </h2>
                <p class="lead mb-4">
                    Driving innovation in renewable energy with cutting-edge solar panel systems, 
                    efficient storage, and smart grid integration for a sustainable future.
                </p>
                <a href="#" class="btn btn-all btn-lg">Solutions</a>
                </div>
            </div>
            </div>
        </section>
        
        <section class="bg-section text-center">
            <div class="bg-overlay"></div>
            <div class="bg-content container">
            {/* <!-- Heading text --> */}
            <h1 class="display-5 fw-bold mb-5">Clean, Efficient Solar Energy</h1>
            
            {/* <!-- 3 Cards Row --> */}
            <div class="row">
                {/* <!-- Card 1 --> */}
                <div class="col-md-4 mb-4">
                <div class="card h-100 shadow">
                    <img
                    src="assets/elements/img/BackGSolar.jpeg"
                    class="card-img-top"
                    alt="Solar Installation"
                    />
                    <div class="card-body">
                    <h5 class="card-title">Installation</h5>
                    <p class="card-text">
                        Professional solar panel installation services to power your future.
                    </p>
                    </div>
                </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div class="col-md-4 mb-4">
                <div class="card h-100 shadow">
                    <img
                    src="assets/elements/img/BackGSolar.jpeg"
                    class="card-img-top"
                    alt="Battery Storage"
                    />
                    <div class="card-body">
                    <h5 class="card-title">Battery Storage</h5>
                    <p class="card-text">
                        Store energy efficiently with our advanced battery solutions.
                    </p>
                    </div>
                </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div class="col-md-4 mb-4">
                <div class="card h-100 shadow">
                    <img
                    src="assets/elements/img/BackGSolar.jpeg"
                    class="card-img-top"
                    alt="Maintenance"
                    />
                    <div class="card-body">
                    <h5 class="card-title">Maintenance</h5>
                    <p class="card-text">
                        Reliable maintenance to keep your system running at peak performance.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section>
            <h1 class="display-4 fw-bold mb-3">Powering a Brighter Future</h1>
        </section>

    </>
);
}; 