import React from 'react';
import './Secondpage.css';
import { PlayBtn } from '../Image';
import 'aos/dist/aos.css';

const Secondpage = () => {
  return (
    <>
      <section className='Secondpage'>
        <div className="container">
          <div className="whyUs ">
            <p>WHY <span>G</span>ola ?</p>
          </div>
          <div className="answer col-10 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            Learn more about our car sharing platform in the light demo version or get in the driver's seat and get paid.
          </div>
          <div data-aos="fade-right" className="videoSection">
            <div className="PlayBtn">
              <img src={PlayBtn} alt="Play Button" />
            </div>
            <div className="vid-text">
              video - click to play
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Secondpage