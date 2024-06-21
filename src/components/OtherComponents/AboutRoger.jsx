import React from "react";
import "./AboutRoger.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const AboutRoger = () => {
  return (
    <>
      <section className="a-wrapper">
        <div className="div-wrapper">
          <div className="flexCenter innerWidth paddings about-div ">
            <div className="a-div">
              <span>
                Rogers & Co. is a leading technology organization at the
                forefront of delivering seamless solutions for both software and
                hardware projects. With a proven track record of excellence, we
                are dedicated to guiding our clients through every step of their
                technological journey.
              </span>
            </div>
            <div className="readMore">
              <div className="arrow-forward">
                <img src="./arrow-forward.png" alt="" />
              </div>
              <span>Read More</span>
            </div>
          </div>

          <div className="a-div">
            <h2>Relevant Cases</h2>
          </div>
        </div>
        <section className="case-section">
          <div className="arrow-container">
            <div className="arrow-down">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
          <div className="cases">
            <div className="hover01 column">
              <div>
                <figure>
                  <img src="./case1.png" />
                </figure>
                <span>Hover</span>
              </div>
              <div>
                <figure>
                  <img src="./case1.png" />
                </figure>
                <span>Hover</span>
              </div>
              <div>
                <figure>
                  <img src="./case1.png" />
                </figure>
                <span>Hover</span>
              </div>
            </div>
            <div className="case-container">
              <div className="case">
                <div className="case-img">
                  <img src="./case1.png" alt="" />
                </div>
                <h2>Brand Identity & Development & Design | Web Application</h2>
                <h3>Swish</h3>
              </div>
              <div className="case">
                <div className="case-img">
                  <img src="./case2.png" alt="" />
                </div>
                <h2>Corporate Website | Web Application</h2>
                <h3>Profitable</h3>
              </div>
              <div className="case">
                <img src="./case3.png" alt="" />
                <h2>Corporate website</h2>
                <h3>MData Solutions</h3>
              </div>
            </div>
            <div className="case-container">
              <div className="case">
                <img src="./case4.png" alt="" />
                <h2>File Management System | Corporate Website.</h2>
                <h3>MDocScan</h3>
              </div>
              <div className="case">
                <img src="./case5.png" alt="" />
                <h2>IP Video Surveillance</h2>
                <h3>Nycil Limited</h3>
              </div>
              <div className="case">
                <img src="./case6.png" alt="" />
                <h2>
                  Audio, Video, Lighting, Climate control and home automation.
                </h2>
                <h3>Osborne Towers</h3>
              </div>
            </div>
          </div>
        </section>
        <div className="div-services">
          <div className="serve-title">
            <h2>Services</h2>
          </div>
          <div className="service-con">
            <span>What we offer</span>
            <div>
              <img src="./line.png" alt="" />
            </div>
            <p>
              At our company, we take pride in offering a comprehensive range of
              cutting-edge services to meet the diverse needs of our clients.
              Our software division excels in providing top-notch solutions,
              including innovative design, seamless product development, and
              robust software and hardware engineering. In the realm of
              hardware, we specialize in two vital areas: security and renewable
              energy. Our dedicated security experts employ the latest
              technologies to fortify your systems and safeguard your valuable
              data.
            </p>
          </div>
        </div>
        <div className="softhard">
          <div>
            <img src="./Software.png" alt="" />
          </div>
          <div>
            <img src="./Hardware.png" alt="" />
          </div>
        </div>
        <div className="softhard2">
          <div>
            <img src="./clients.png" alt="" />
          </div>
        </div>
        <div className="container-stacked">
          <div className="stacked">
            <div className="flowCenter paddings beside">
              <div>
                <img src="./logowhite.png" alt="" />
              </div>
            </div>
            <div className="top">
              <div className="title-add">
                <div className="top-title">
                  <h2>Shall we have a chat?</h2>
                </div>
                <span>
                  A:1637 Ademola Adetokunbo,
                  <br />
                  V.I, Lagos, Nigeria
                </span>
              </div>
              <p>
                If you have a project or collaboration that you would like to
                discuss with us, or if you are curious to hear more about how we
                can help you, we look forward to hearing from you.
              </p>
              <div>
                <img src="./line.png" alt="" />
              </div>
              <p>
                <u>
                  info@rogersandco.xyz
                  <br />
                  +234(0)8169169966
                </u>
              </p>
              <div className="bottom-nav">
                <div className="navv">
                  <div>
                    <img src="./line2.png" alt="" />
                  </div>
                  <h2>Projects</h2>
                  <span>
                    Solutions we are proud to <br />
                    be a part of
                  </span>
                </div>
                <div className="navv">
                  <div>
                    <img src="./line2.png" alt="" />
                  </div>
                  <h2>Software</h2>
                  <span>
                    From digital strategy to <br />
                    measurable results
                  </span>
                </div>
                <div className="navv">
                  <div>
                    <img src="./line2.png" alt="" />
                  </div>
                  <h2>Hardware</h2>
                  <span>
                    From digital strategy to <br />
                    measurable results
                  </span>
                </div>
                <div className="navv">
                  <div>
                    <img src="./line2.png" alt="" />
                  </div>
                  <h2>About Us</h2>
                  <span>
                    Collaboration across <br />
                    professional competencies
                  </span>
                </div>
                <div className="navv">
                  <div>
                    <img src="./line2.png" alt="" />
                  </div>
                  <h2>Contact</h2>
                  <span>
                    Come by for a <br />
                    cup of coffee
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="copyright">
              <span>All rights reserved 2023 © Rogers & Co.</span>
            </div>
            <div className="copyright flexEnd">
              <span>follow us --------{">"}.</span>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutRoger;
