import React from "react";
import {HomePageSlider} from "./layout/widgets/sliders/HomePageSlider.tsx";

export default function Home() {

return (
    <>
    <HomePageSlider/>
         
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
    </>
);
}; 