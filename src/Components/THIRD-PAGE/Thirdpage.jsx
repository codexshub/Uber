import React, { useEffect } from 'react';
import './Thirdpage.css';
import { HomeImg } from '../Image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Points from './Points';

const Thirdpage = () => {

  useEffect(() => {
    AOS.init({ duration: 500, });
  }, []);

  return (
    <>
      <section className='ThirdPage'>
        <div className="container">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex">
            <div data-aos="fade-up" className="image2 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <img src={HomeImg} alt="Mobile img"/>
            </div>
            <div className="ThirdTitle col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
              <p>SKIP THE RENTAL COUNTER</p>
              <h1>Discover the world’s largest car sharing marketplace.</h1>
              <Points/>
              <Points/>
              <Points/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Thirdpage