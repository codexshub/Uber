import React from 'react';
import './Fifthpage.css';
import { GooglePlay, Apple } from '../Image';
import 'aos/dist/aos.css';

const Fifthpage = () => {
  return (
    <>
    <section className='Sexth-page-section'>
        <div className="container">
            <div className="Sixth-page-content col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <div className="SethHeading col-10 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                    <h1>Ready to start cruising your city? Download <span>G</span>ola App</h1>
                    <div className="Download-option-2">                 
                  <div data-aos="fade-right" className="store">
                    <div className="App-img"><img src={Apple} alt="GooglePlay"/></div>
                    <div className="App-text">App Store</div>
                  </div>
                  <div data-aos="fade-left" className="store">
                    <div className="App-img"><img src={GooglePlay} alt="GooglePlay"/></div>
                    <div className="App-text">Google Play</div>
                  </div>
                </div>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Fifthpage