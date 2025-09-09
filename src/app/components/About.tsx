import React, {useEffect, useRef} from "react";
import { HomePageSlider } from './layout/widgets/sliders/HomePageSlider.tsx'

export default function About() {

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

    <section class="arrow-section">
            <div class="container position-relative">
            
            {/* <!-- CSS Right Arrow --> */}
            <div class="arrow-right">
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
            </div>

            {/* <!-- Content shifted to the right --> */}
            <div class="row justify-content-end">
                <div class="col-md-7 text-start">
                <h2 class="fw-bold mb-3">
                    Text About What we do at Willez Eng Energy Technology
                </h2>
                <p class="lead mb-4">
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
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
            <h1 class="display-5 fw-bold mb-5">A team of visionaries</h1>
            
            {/* <!-- 3 Cards Row --> */}
            <div class="row">
                {/* <!-- Card 1 --> */}
                
                
            </div>
            </div>
        </section>


        <section class="arrow-section">
            <div class="container position-relative">
            
            {/* <!-- CSS Right Arrow --> */}
            <div class="arrow-right">
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
            </div>

            {/* <!-- Content shifted to the right --> */}
            <div class="row justify-content-end">
                <div class="col-md-7 text-start">
                <h2 class="fw-bold mb-3">
                    Text About What we do at Willez Eng Energy Technology
                </h2>
                <p class="lead mb-4">
                    The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
                </p>
                <a href="#" class="btn btn-all btn-lg">Solutions</a>
                </div>
            </div>
            </div>
        </section>


    </>
  )
}
