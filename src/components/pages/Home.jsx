import React from "react";
import "./Home.scss";
import Hero from "../Hero/Hero";
import AboutRoger from "../OtherComponents/AboutRoger";
import Footer from "../OtherComponents/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Home = () => {
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef2, inView: isVisible2 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef3, inView: isVisible3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef4, inView: isVisible4 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (event) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "footerContact", form }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    event.preventDefault();
  };
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setForm((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };

  const [switchTab, setSwitchTab] = useState('hardware')
  return (
    <>
      <section className="main-home">
        <section className="hero-wrapper">
          <div className="hero-container">
            <div className="hero-title">
              <h1 className="text-black text-[78px]">
                Shaping the Future through
              </h1>
              <h1>
                <span> Technology</span> and <span>Innovation</span>
              </h1>
            </div>

            <div className="hero-des">
              <span>
                Rogers&Co. is a technology organization that delivers seamless
                tech solutions<br></br> for your software and hardware projects.
              </span>
            </div>

            {/* <div className="social-icons-h">
              <button className="social-button s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </span>
                <span className="s-button-text">Facebook</span>
              </button>
              <button className="social-button s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </span>
                <span className="s-button-text">X (Twitter)</span>
              </button>
              <button className="social-button s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </span>
                <span className="s-button-text">LinkedIn</span>
              </button>
              <button className="social-button s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a
                    href="https://www.instagram.com/rogersandco_hq/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </span>
                <span className="s-button-text">Instagram</span>
              </button>
            </div> */}
            {/* <div className="social-icons-hm">
              <button className="social-button-m s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </span>
              </button>
              <button className="social-button-m s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </span>
              </button>
              <button className="social-button-m s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </span>
              </button>
              <button className="social-button-m s-learn-more-r">
                <span className="s-circle-r" aria-hidden="true">
                  <a
                    href="https://www.instagram.com/rogersandco_hq/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </span>
              </button>
            </div> */}
          </div>
        </section>
        <section className="hero2-wrapper">
          {/* <div onClick={scrollToBottom} className="arrow-container">
            <div className="arrow-down-n">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <path
                  d="M23 7.21741V38.7826"
                  stroke="black"
                  stroke-width="2.17284"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.0869 25.8696L23 38.7826L35.913 25.8696"
                  stroke="black"
                  stroke-width="2.17284"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div> */}
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
        <section className="a-wrapper">
          <div className="div-wrapper">
            <div className="about-div ">
                <div className="a-div">
                  <span>
                    Rogers & Co. is a leading technology organization at the
                    forefront of delivering seamless solutions for both software
                    and hardware projects. With a proven track record of
                    excellence, we are dedicated to guiding our clients through
                    every step of their technological journey.
                  </span>
                </div>
              <Link to="/about-us">
                <div className="readMore">
                  <span>Read More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M2.8125 9H15.1875"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.125 3.9375L15.1875 9L10.125 14.0625"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="div-services">
              <div className="serve-title">
                <h2>
                  {" "}
                  <span>What We Offer</span>
                </h2>
              </div>

            <div className="service-con">
                <p>
                  We offer a comprehensive range of cutting edge services to
                  meet the diverse needs of our clients. We excel in both
                  software and hardware including innovative design solutions,
                  product development, software engineering, security and
                  renewable energy solutions.
                </p>
            </div>
            <div className="tabs-container">
              <div className={switchTab === 'software' ? "tab active" : 'tab'} onClick={()=> setSwitchTab('software')}>Software</div>
              <div className={switchTab === 'hardware' ? "tab active" : "tab"} onClick={()=> setSwitchTab('hardware')}>Hardware</div>
            </div>
            {switchTab === 'hardware' ? (
               <div className="our-services">
                <div className="servee">
                  <Link
                    to="/software-design"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="./service1.png" alt="Services" />
                    <h3>Internet Infrastructure</h3>
                  </Link>
                </div>
                <div className="servee">
                  <Link
                    to="/hardware-security"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="./service4.png" alt="Services" />
                    <h3>Security and Surveillance Engineering</h3>
                  </Link>
                </div>
               <div className="servee">
                  <Link
                    to="/hardware-renewable-energy"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="./service5.png" alt="Services" />
                    <h3>Renewable energy</h3>
                  </Link>
                </div>
            </div>
           ) : (
             <div className="our-services">
                <div className="servee">
                  <Link
                    to="/software-design"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="./service1.png" alt="Services" />
                    <h3>Brand Design</h3>
                  </Link>
                </div>
                <div className="servee">
                  <Link
                    to="/software-product"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="./service2.png" alt="Services" />
                    <h3>Product Design</h3>
                  </Link>
                </div>
                <div className="servee">
                  <Link
                    to="/software-softwaredev"
                    style={{ textDecoration: "none" }}
                  >
                    <img src="./service3.png" alt="Services" />
                    <h3>Software Engineering</h3>
                  </Link>
                </div>
            </div>
           )}
          </div>
            <div className="a-div">
              <h2>Relevant Cases</h2>
              <p>Several noteworthy examples of our prior projects include</p>
            </div>
          <section className="case-section">
            <div className="cases">
              <div className="hover01 column">
                <Link
                  to="./case-swish"
                  className="containing"
                  style={{ textDecoration: "none" }}
                >
                  <div ref={myRef} className="box">
                    <figure
                      style={{ background: "#D19820" }}
                      className={isVisible ? "animated-figure" : "figure"}
                    >
                      <img src="./case1.png" />
                    </figure>
                  </div>
                    <h2 className="text-h22">
                      Brand Identity & Development & Design | Web Application
                    </h2>
                    <h3 className="text-h23">Swish</h3>
                </Link>
                <Link
                  to="./case-profitable"
                  className="containing"
                  style={{ textDecoration: "none" }}
                >
                  <div className="box">
                    <figure
                      style={{ background: "#7d01d1" }}
                      className={isVisible ? "animated-figure" : "figure"}
                    >
                      <img src="./case2.png" />
                    </figure>
                  </div>
                    <h2>Corporate Website | Web Application</h2>
                    <h3>Profitable</h3>
                </Link>
                <Link
                  to="./case-mdatasolutions"
                  className="containing"
                  style={{ textDecoration: "none" }}
                >
                  <div ref={myRef2} className="box">
                    <figure
                      style={{ background: "#84969A" }}
                      className={isVisible2 ? "animated-figure" : "figure"}
                    >
                      <img src="./case3.png" />
                    </figure>
                  </div>
                    <h2>Corporate website</h2>
                    <h3>MData Solutions</h3>
                </Link>

                <Link
                  to="./case-mdocscan"
                  className="containing"
                  style={{ textDecoration: "none" }}
                >
                  <div ref={myRef3} className="box">
                    <figure
                      style={{ background: "#84969A" }}
                      className={isVisible3 ? "animated-figure" : "figure"}
                    >
                      <img style={{ background: "#fff" }} src="./case4.png" />
                    </figure>
                  </div>
                    <h2>File Management System | Corporate Website.</h2>
                    <h3>MDocScan</h3>
                </Link>
                <Link
                  to="./case-afijiophc"
                  className="containing"
                  style={{ textDecoration: "none" }}
                >
                  <div ref={myRef4} className="box">
                    <figure
                      style={{ background: "#2D464F" }}
                      className={isVisible4 ? "animated-figure" : "figure"}
                    >
                      <img src="./img4.png" />
                    </figure>
                  </div>
                    <h2>Solar Inverter Systems </h2>
                    <h3>Afijio PHC</h3>
                </Link>

                <Link
                  to="/case-saki"
                  className="containing"
                  style={{ textDecoration: "none" }}
                >
                  <div className="box">
                    <figure
                      style={{ background: "#99787F" }}
                      className={isVisible4 ? "animated-figure" : "figure"}
                    >
                      <img src="./img4.png" />
                    </figure>
                  </div>
                    <h2>Solar Inverter Systems</h2>
                    <h3>Saki West Local Government</h3>
                </Link>
              </div>
            </div>
          </section>
            <div className="case-link-box2">
              <Link to="/projects">
                <div className="explore">
                  <h3>Explore more cases</h3>
                </div>
              </Link>
            </div>

          <div className="softhard2">
            <div className="clients">
                <div className="a-div">
                  <h2>Relevant Cases</h2>
                  <p>
                    Several noteworthy examples of our prior projects include
                  </p>
                </div>
                <div className="client-contaainer">
                  <div className="cl-img">
                    <img src="./client1.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client2.png" alt="" />
                  </div>
                  {/* <div className="cl-img">
                    <img src="./client3.png" alt="" />
                  </div> */}
                  <div className="cl-img">
                    <img src="./client4.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client5.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client6.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client7.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client8.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client9.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client8.png" alt="" />
                  </div>
                </div>
            </div>
          </div>
          <div className="container-stacked">
            <div className="top">
              <div className="top-title">
                <h2>Let's Have a Chat</h2>
              </div>

              <div className="footer-divs">
                <p>
                  Got a project you would love to discuss? Reach out to us
                  today.
                </p>
                <ContactForm />

                <div className="footer-logo">
                  <img src="./logowhite2.png" alt="" />
                </div>
                <div className="copyright-mobile">
                  <span>follow us --------{">"}.</span>
                  <div className="social-icons-mobile">
                    <a href="https://facebook.com">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://facebook.com">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://www.instagram.com/rogersandco_hq/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://facebook.com">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom">
              <div className="bottom-nav">
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <div className="navv">
                    <div className="bot-line"></div>
                    <h2>Projects</h2>
                    <span>
                      Solutions we are proud to <br />
                      be a part of
                    </span>
                  </div>
                </Link>

                <Link to="/about-us" style={{ textDecoration: "none" }}>
                  <div className="navv">
                    <div className="bot-line"></div>
                    <h2>About Us</h2>
                    <span>
                      Collaboration across <br />
                      professional competencies
                    </span>
                  </div>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <div className="navv ">
                    <div className="bot-line"></div>
                    <h2>Contact</h2>
                    <span>
                      Come by for a <br />
                      cup of coffee
                    </span>
                  </div>
                </Link>
              </div>
              <div className="copyright">
                <span>All rights reserved 2023 © Rogers & Co.</span>
              </div>
              <div className="copyright-social flexEnd">
                <span>follow us --------{">"}.</span>
                <div className="social-icons-mobile">
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="https://facebook.com">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    href="https://www.instagram.com/rogersandco_hq/"
                    target="_blank"
                  >
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
      </section>
    </>
  );
};

export default Home;
