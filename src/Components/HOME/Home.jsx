import React from 'react';
import './Home.css';
import { HomeImg2, GooglePlay, Apple } from '../Image'
import 'aos/dist/aos.css';

const Home = () => {

  return (
    <>
      <section className='Home-page-section'>
        <div id='home'>
          <div className="container">
            <div className="Home-page col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="heading col-12 col-sm-12 col-md-12 col-lg-8 col-xl-7 col-xxl-6">
                <div className="Main-heading">
                  <h1><span>G</span>ola</h1>
                  <div className="subTitle">
                    Drive Your <span>Dreams.</span><br />
                    Rent. Drive. Explore.
                  </div>
                </div>
                <div className="FirstPara">
                  <p>Get Ready for a Memorable Journey with Us, Your Journey, Our Wheels.</p>
                </div>
                <div className="Download-option">
                  <div data-aos="fade-right" className="store">
                    <div className="App-img"><img src={Apple} alt="Apple" /></div>
                    <div className="App-text">App Store</div>
                  </div>
                  <div data-aos="fade-left" className="store col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="App-img"><img src={GooglePlay} alt="GooglePlay" /></div>
                    <div className="App-text">Google Play</div>
                  </div>
                </div>
              </div>
              <div className="Home-Image col-lg-4 col-xl-5 col-xxl-6">
                <div data-aos="fade-up" className="MobileImg "><img  className='img-responsive' src={HomeImg2} alt="HomeImage" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home