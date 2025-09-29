import React, { useEffect, useRef } from "react";
import "swiper/css";

export default function Home() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Section with Arrow */}
      <div className="arrow-section py-5">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            {/* Arrow column */}
            <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
              <div className="arrow-right">
                <div className="arrow-line"></div>
                <div className="arrow-head"></div>
              </div>
            </div>

            {/* Text column */}
            <div className="col-12 col-md-7">
              <h2 className="fw-bold mb-3">Text About Solar Energy Technology</h2>
              <p className="lead mb-4">
                Driving innovation in renewable energy with cutting-edge solar
                panel systems, efficient storage, and smart grid integration for a
                sustainable future.
              </p>
              <button className="btn-all btn-primary btn-lg">Our Solutions</button>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-section text-center py-5">
        <div className="bg-overlay"></div>

        {/* ✅ Move content above overlay with higher z-index */}
        <div className="bg-content container position-relative">
          <h1 className="display-5 fw-bold mb-5 text-white">
            Clean, Efficient Solar Energy
          </h1>

          <div className="row g-4">
            {[
              { title: "Installation", link: "/installation", img: "assets/elements/img/BackGSolar.jpeg" },
              { title: "Battery Storage", link: "/battery-storage", img: "assets/elements/img/Pixels-solar-battery2.png" },
              { title: "Maintenance", link: "/maintenance", img: "assets/elements/img/clean3.png" },
            ].map((item, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="card h-100 shadow">
                  {/* ✅ Clickable image */}
                  <a href={item.link}>
                    <img
                      src={item.img}
                      className="card-img-top img-fluid"
                      alt={item.title}
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {i === 0 &&
                        "Professional solar panel installation services to power your future."}
                      {i === 1 &&
                        "Store energy efficiently with our advanced battery solutions."}
                      {i === 2 &&
                        "Reliable maintenance to keep your system running at peak performance."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left - images */}
          <div className="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div className="blue-box-home position-relative">
              <img
                src="assets/elements/img/solar1.png"
                alt="solar large"
                className="feature-img img-fluid"
              />
              <img
                src="assets/elements/img/solar2.png"
                alt="solar small"
                className="feature-img img-small img-fluid position-absolute bottom-0 start-0"
              />
              <img
                src="assets/elements/img/solar3.png"
                alt="solar small"
                className="feature-img img-small img-fluid position-absolute bottom-0 end-0"
              />
              <div className="line-container" ref={lineRef}>
                <div className="horizontal-line-home"></div>
                <div className="vertical-line-home"></div>
                <div className="horizontal-line-2-home"></div>
              </div>
            </div>
          </div>


          {/* Right - text */}
          <div className="col-12 col-lg-5 offset-lg-1 text-center text-lg-start">
            <h2 className="fw-bold mb-3">Leading the way</h2>
            <p className="lead mb-4">
              We are home to some of the world’s brightest minds in solar
              engineering, smart storage solutions, and clean energy innovation.
            </p>
            <button className="btn-all btn-primary">Learn More</button>
          </div>
        </div>
      </div>

    <section
  className="parallax-section d-flex align-items-center"
  style={{
    backgroundImage: "url('assets/elements/img/Contact-support.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // background stays while scrolling
    minHeight: "60vh",
  }}
>
  <div className="container text-start">
    {/* Heading */}
    <h1
      className="display-4 fw-bold mb-3"
      style={{ color: "#0aeec8" }}
    >
      Need Help? We’re Here for You
    </h1>

    {/* Supporting text */}
    <p
      className="lead mb-4"
      style={{ color: "#ffffffff" }}
    >
      Our support team is ready to assist you with your solar solutions,
      installations, and technical inquiries. Reach out anytime and let us
      guide you toward a brighter future.
    </p>

    {/* Button */}
    <button
      className="btn-all btn-primary btn-lg"
    //   style={{
    //     backgroundColor: "#0aeec8",
    //     color: "#fff",
    //     border: "none",
    //   }}
    >
      Get In Touch
    </button>
  </div>
</section>


    </>
  );
}
