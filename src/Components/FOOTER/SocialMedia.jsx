import React from 'react';
import { Linkedin, behance, insta, facebook, github,  } from '../Image';
import 'aos/dist/aos.css';
import './Footer.css';

const Socialmedia = () => {
  return (
    <>
    <div className="socialMedia">
                        <div className="MediaLinks col-8 col-sm-8 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <img src={facebook} alt="Facebook "/>
                            </div>
                            <div className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <img src={insta} alt="Instagram"/>
                            </div>
                            <div className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <img src={github} alt="Github"/>
                            </div>
                            <div className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <img src={Linkedin} alt="LinkedIn"/>
                            </div>
                            <div className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <img src={behance} alt="Behance"/>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Socialmedia