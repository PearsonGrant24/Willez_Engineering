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
        <section className="arrow-section py-5">
        <div className="container">
            <div className="row align-items-center">
            {/* Arrow column (on top for small, side for md+) */}
            <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start mb-4 mb-md-0">
                <div className="arrow-right">
                <div className="arrow-line"></div>
                <div className="arrow-head"></div>
                </div>
            </div>

            {/* Text column */}
            <div className="col-12 col-md-7 text-start">
                <h2 className="fw-bold mb-3">
                Text About Solar Energy Technology
                </h2>
                <p className="lead mb-4">
                Driving innovation in renewable energy with cutting-edge solar
                panel systems, efficient storage, and smart grid integration
                for a sustainable future.
                </p>
                <button className="btn-primary btn-lg">Learn More</button>
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

    <div className="container py-5">
        <div className="row align-items-center">
            
            {/* Left side - images */}
            <div className="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div className="blue-box-home">
                <img src="assets/elements/img/solar1.png" alt="solar large" className="feature-img img-large" />
                <img src="assets/elements/img/solar2.png" alt="solar small" className="feature-img img-small img-bottom-left" />
                <img src="assets/elements/img/solar3.png" alt="solar small" className="feature-img img-small img-bottom-right" />
            {/* Animated lines */}
          <div className="line-container" ref={lineRef}>
            <div className="horizontal-line-home"></div>
            <div className="vertical-line-home"></div>
            <div className="horizontal-line-2-home"></div>
          </div>
            
            </div>
            </div>

            {/* Right side - text */}
            <div className="col-lg-5 offset-lg-1 text-center text-lg-start">
        <h2 className="fw-bold mb-3">Leading the way</h2>
        <p className="lead mb-4">
            We are home to some of the world’s brightest minds in solar engineering, 
            smart storage solutions, and clean energy innovation.
        </p>
        <button className="btn btn-primary">Learn More</button>
        </div>


  </div>
</div>




    </>
);
}; 