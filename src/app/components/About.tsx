import React, {useEffect, useRef, useState } from "react";
import { HomePageSlider } from './layout/widgets/sliders/HomePageSlider.tsx'

export default function About() {
    const lineRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!lineRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(lineRef.current);
    return () => obs.disconnect();
  }, []); 

  return (
    <>    
    {/* <HomePageSlider/> */}

     
    <div className="container about-section py-5">
      <div className="row align-items-center">
        {/* LEFT: Blue box with images + animated line */}
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <div className="blue-box-about p-3">
            {/* Images arranged with Bootstrap grid so the blue-box height grows naturally */}
            <div className="row g-2">
              <div className="col-12">
                <img
                  src="assets/elements/img/solar1.png"
                  alt="Solar large"
                  className="img-fluid rounded img-large-about"
                />
              </div>
              <div className="col-6">
                <img
                  src="assets/elements/img/solar2.png"
                  alt="Solar small 1"
                  className="img-fluid rounded img-medium-about"
                />
              </div>
              <div className="col-6">
                <img
                  src="assets/elements/img/solar3.png"
                  alt="Solar small 2"
                  className="img-fluid rounded img-small-about"
                />
              </div>
            </div>

            {/* Line wrapper takes up flow space inside blue-box (prevents overlap) */}
            <div
              className={`line-wrapper mt-3 ${animate ? "animate" : ""}`}
              ref={lineRef}
              aria-hidden="true"
            >
              <div className="line-container-about">
                <div className="horizontal-line-about"></div>
                <div className="vertical-line-about"></div>
                <div className="horizontal-line-about-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Text + CTA */}
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <h2 className="fw-bold mb-3">Delivering good quality products for the country</h2>
          <p className="text-muted mb-4">
            We specialise in all electrical power supplies, reliable solar solutions that combine efficiency,
            durability, installations and innovation to power a brighter future. Our
            commitment is to bring sustainable energy to communities nationwide.
          </p>
          {/* <button className="tn-all btn-primary btn-lg">Learn More</button> */}
        </div>
      </div>
    </div>

    <section className="teamup-section text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left side: text */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <h2 className="fw-bold mb-3">Working Together at Willez</h2>
            <p>
              At Willez, we believe in teaming up as one organisation to deliver
              excellence. From ideation to execution, our collaborative approach
              ensures that quality, sustainability, and innovation are at the
              heart of every product we make.
            </p>
          </div>

          {/* Right side: four staggered images */}
          <div className="col-12 col-lg-6">
            <div className="row image-grid">
              <div className="col-6 mb-3 mb-lg-0">
                <img
                  src="./assets/elements/img/solaronrack.jpg"
                  alt="Team Member 1"
                  className="img-fluid stagger-up rounded shadow-sm"
                />
              </div>
              <div className="col-6 mb-3 mb-lg-0">
                <img
                  src="./assets/elements/img/solar3.png"
                  alt="Team Member 2"
                  className="img-fluid stagger-down rounded shadow-sm"
                />
              </div>
              <div className="col-6 mt-lg-5">
                <img
                  src="./assets/elements/img/solar3.png"
                  alt="Team Member 3"
                  className="img-fluid stagger-down rounded shadow-sm"
                />
              </div>
              <div className="col-6 mt-lg-5">
                <img
                  src="./assets/elements/img/solar1.png"
                  alt="Team Member 4"
                  className="img-fluid stagger-up rounded shadow-sm"
                />
              </div>

              {/* Hexagon made from 6 separate edges (each is a <path>) */}
<svg
  className="hexagon-svg"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  focusable="false"
>
  {/* Points used (flat-top hexagon, R=80, center 100,100):
      P1 = 180,100
      P2 = 140,169.28
      P3 = 60,169.28
      P4 = 20,100
      P5 = 60,30.72
      P6 = 140,30.72
  */}
  <path className="hex-line-1" d="M180 100 L140 169.28" />
  <path className="hex-line-2" d="M140 169.28 L60 169.28" />
  <path className="hex-line-3" d="M60 169.28 L20 100" />
  <path className="hex-line-4" d="M20 100 L60 30.72" />
  <path className="hex-line-5" d="M60 30.72 L140 30.72" />
  <path className="hex-line-6" d="M140 30.72 L180 100" />
</svg>

            </div>
          </div>
        </div>
      </div>
    </section>
    
<section className="py-5 bg-light text-dark">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Purpose & Vision</h2>
        <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
          At Willez, our purpose is to empower communities with reliable, 
          sustainable, and innovative energy solutions.  
          <br />
          Our vision is to lead the way in transforming the energy landscape,
          ensuring a brighter and greener future for generations to come.
        </p>
      </div>
    </section>
    <section
  className="parallax-section text-center text-white d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: "url('assets/elements/img/SailorStudio.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // makes the background "stay" while scrolling
    minHeight: "90vh",
  }}
>
  <div className="container">
    <h1 className="display-4 fw-bold mb-3">A Class & Market-Certified Solution</h1>
    <p className="lead mb-0">
      High-performance solar technology designed for modern energy needs.
    </p>
  </div>
</section>

       
    </>
  )
}
