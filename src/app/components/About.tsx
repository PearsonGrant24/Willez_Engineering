import React from 'react'
import { HomePageSlider } from './layout/widgets/sliders/HomePageSlider.tsx'

export default function About() {
  return (
    <>    
    <HomePageSlider/>

    <div className="main " >
      <div className="container ">
        <div className="row margin-bottom-40 d-flex justify-content-center">
          {/* <!-- BEGIN SIDEBAR --> */}
          
          {/* <!-- END SIDEBAR --> */}

          {/* <!-- BEGIN CONTENT --> */}
          <div className="col-md-9 col-sm-9 text-center" >
            <h1 className='mt-4'> WHO WE ARE</h1>
            <div className="content-page" style={{padding:'18px'}}>
              <p>Kanhava is a bag manufacturing company. We dream of becoming the leading bag manufacturer in Zim and maybe regionally. We value quality, excellence, creativity, professionalism. We strive to meet and go beyond our customer's expectations.</p>
              {/* <h3>Investigationes demonstraverunt</h3> */}
              <br />
              
              <p>Different sizes and designs can be tailor-made to the design and specs of the client</p>
              <br />
              <p>Kanhava was created in 2012, we have worked on specialising on bags, therfore becoming better at what we do by the day</p>

               </div>
          </div>
          {/* <!-- END CONTENT --> */}
        </div>
        {/* <!-- END SIDEBAR & CONTENT --> */}
      </div>
    </div>
    </>
  )
}
