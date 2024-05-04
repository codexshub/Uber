import React from 'react';
import './Footer.css';
import Line from '../UNDER-LINE/Line';
import Socialmedia from './SocialMedia';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <>
            <section className='Footer-Section'>
                <div className="container">
                    <div className="Footer-page-content col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="FooterBrand col-4 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                        <Link to="home"> 
                            <h1><span>G</span>ola</h1>
                            <p>Drive Your <span>Dreams</span></p></Link>
                        </div>
                        <div id='Footer-list' className="Footer-List col-lg-2 col-xl-2 col-xxl-2">
                            <div className="List">
                                <li>Blog</li>
                                <li>About us</li>
                                <li>Projects</li>
                                <li>Partnership</li>
                                </div>
                        </div>
                        <div id='Footer-list' className="Footer-List col-lg-2 col-xl-2 col-xxl-2">
                            <div className="List"><li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                                <li>Accessibility options</li></div>
                        </div>
                        <div id='Footer-List-3' className="Footer-List col-3 col-sm-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                            <div className="List">
                                <li>FAQs</li>
                                <li>Docs</li>
                                <li>Careers</li>
                                <li>Customer Support</li>
                            </div>
                        </div>
                        <div className="email-input col-5 col-sm-4 col-md-4 col-lg-3 col-xl-4 col-xxl-4">
                            <div className="email-section">
                                <input type="text" placeholder='Your email'/>
                                <div className='Email-send-btn'>
                                <div className="Send-btn">
                                    <span class="material-symbols-outlined">
                                        keyboard_return
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Line />
                    <Socialmedia/>
                    <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="copyright d-flex justify-content-center">
                    Copyright © 2023, Gola pvt. ltd. All rights reserved.

                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Footer