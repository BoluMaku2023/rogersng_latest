import React from "react";
import "./Hero.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>Transforming Possibilities,</h1>
              <h1> Using Software and </h1>
              <h1>Hardware to Redefine the</h1>
              <h1> Future</h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                Strategy, technological innovation, and hardware integration
                form the fundamental building blocks in crafting robust
                solutions that enhance the operational framework of our clients'
                enterprises.
              </span>
            </div>
          </div>
          {/*right side*/}
          <div className="social-icons">
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.instagram.com/rogersandco_hq/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </section>
      <section className="hero2-wrapper">
        <div className="arrow-container">
          <div className="arrow-down">
            <img src="./arrow-down.png" alt="" />
          </div>
        </div>
        <div className="hero-video">
          <video
            src="./rogervid.mp4"
            type="video/mp4"
            loop="loop"
            muted="muted"
            autoPlay="autoplay"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
