import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomePageSlider() {
    
    const images = [
    "assets/elements/img/hero1.jpg",
    "assets/elements/img/hero2.jpg",
    "assets/elements/img/hero3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
        <section className="hero slide-wrapper techex-landing-page">

            <Swiper autoplay={true} navigation={true} pagination={true}
                
            >                
                {slides.map((slide:any, slideIndex:number)=>(
                    <SwiperSlide>
                        <div className="single-slide bg-cover" key={slideIndex}
                            style={{backgroundImage: "url('/assets/elements/img/barner/solarrack.jpg')", }} >
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="slider-content ">
                                            <h1 data-animation="fadeInUp"> 
                                            <div className="carousel-position-four">
                                                <span className="carousel-subtitle-v3 margin-bottom-5" style={{color:'#fff'}} data-animation="animated fadeInDown">
                                                    Web App
                                                </span>
                                                <p className="carousel-subtitle-v4" style={{color:'#e6400c'}} data-animation="animated fadeInDown">
                                                    Now picturing
                                                </p>
                                                <p className="carousel-subtitle-v3 mt-2" data-animation="animated fadeInDown">
                                                </p>
                                            </div>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
                }

            </Swiper>

        </section>

    </>
  );
  
};
