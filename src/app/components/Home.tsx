import React, {useEffect, useRef} from "react";
import {HomePageSlider} from "./layout/widgets/sliders/HomePageSlider.tsx";
import 'swiper/css';

export default function Home() {

    const lineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // run once
            }
            });
        },
        { threshold: 0.4 } // trigger when 40% visible
        );

        if (lineRef.current) {
        observer.observe(lineRef.current);
        }

        return () => {
        if (lineRef.current) {
            observer.unobserve(lineRef.current);
        }
        };
    }, []);

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

        <section className="feature-section">
            <div className="feature-left">
                <div className="blue-box">
                <img src="assets/elements/img/solar1.png" alt="solar large" className="feature-img img-large" />
                <img src="assets/elements/img/solar2.png" alt="solar small" className="feature-img img-small img-bottom-left" />
                <img src="assets/elements/img/solar3.png" alt="solar small" className="feature-img img-small img-bottom-right" />
                </div>
                <div class="line-container" ref={lineRef}>
                    <div class="horizontal-line"></div>
                    <div class="vertical-line"></div>
                    <div class="horizontal-line-2"></div>
                </div>
            </div>

            <div className="feature-right">
                <h2>Leading the way</h2>
                <p>
                We are home to some of the world’s brightest minds in solar engineering, 
                smart storage solutions, and clean energy innovation.
                </p>
                <button className="btn-primary">Learn More</button>
            </div>
        </section>
    </>
);
}; 