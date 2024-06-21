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
  return (
    <>
      <section className="main-home">
        <section className="hero-wrapper">
          <div className="hero-container">
            {/*left side*/}
            <div className="hero-left">
              <div className="hero-title">
                <h1>Shaping the Future</h1>
                <h1>
                  {" "}
                  with <span> Technology</span> and{" "}
                </h1>
                <h1>
                  <span>Innovation</span>
                </h1>
              </div>

              <div className="flexColStart hero-des">
                  <span>
                    Rogers&Co. is a technology organization that delivers
                    seamless tech solutions for your software and hardware
                    projects.
                  </span>
              </div>
            </div>
            {/*right side*/}
            <div className="social-icons-h">
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
            </div>
            <div className="social-icons-hm">
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
            </div>
          </div>
        </section>
        <section className="hero2-wrapper">
          <div onClick={scrollToBottom} className="arrow-container">
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
                <button className="learn-more-r">
                  <span className="circle-r" aria-hidden="true">
                    <span className="icon-r arrow-r"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="div-services">
              <div className="serve-title">
                <h2>
                  {" "}
                  <span>What we offer</span>
                </h2>
              </div>
            <div className="service-con">
                <span>Services</span>
                <div>
                  <img src="./line.png" alt="" />
                </div>
                <p>
                  We offer a comprehensive range of cutting-edge services to
                  meet the diverse needs of our clients. Our software division
                  excels in providing top-notch solutions, including innovative
                  design, seamless product development, and robust software and
                  hardware engineering. In the realm of hardware, we specialize
                  in two vital areas: security and renewable energy. Our
                  dedicated security experts employ the latest technologies to
                  fortify your systems and safeguard your valuable data.
                </p>
            </div>
          </div>
            <div className="a-div">
              <h2>Relevant Cases</h2>
            </div>
          <section className="case-section">
            <div className="arrow-container">
              <div className="arrow-down">
                <img src="./arrow-down.png" alt="" />
              </div>
            </div>
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
                <button className="learn-more-r">
                  <span className="circle-r" aria-hidden="true">
                    <span className="icon-r arrow-r"></span>
                  </span>
                  <span className="button-text">See More Cases</span>
                </button>
              </Link>
            </div>
          <div className="soft-hard">
            <Link to="./software">
              <div className="image-contain">
                <img src="./Software.png" alt="" />
              </div>
            </Link>
            <Link to="./software">
              <div className="image-contain">
                <img src="./Hardware.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="softhard2">
            <div className="clients">
              <h2>Trusted By</h2>
                <div className="client-contaainer">
                  <div className="cl-img">
                    <img src="./client1.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client2.png" alt="" />
                  </div>
                  <div className="cl-img">
                    <img src="./client3.png" alt="" />
                  </div>
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
            <div className="stacked">
              <div className="flowCenter paddings beside">
                <div className="left-logo">
                  <img src="./logowhite.png" alt="" />
                </div>
              </div>
              <div className="top">
                <div className="title-add">
                  <div className="top-title">
                    <h2>Let's Have a Chat</h2>
                  </div>
                </div>
                <div className="fd-container">
                  <div className="footer-divs">
                    <p>
                      Have a project you would like to discuss? Send us a
                      message.
                    </p>

                    <form
                      name="footerContact"
                      method="POST"
                      netlify
                      onSubmit={handleSubmit}
                      className="input-short"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="footerContact"
                      />
                      <label className="s-input-container">
                        <span>Name</span>
                        <input
                          type="text"
                          autoComplete="off"
                          className="s-text-input"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                        />
                      </label>
                      <label className="s-input-container">
                        <span>E-mail</span>
                        <input
                          type="email"
                          autoComplete="off"
                          className="s-text-input"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                        />
                      </label>
                      <label className="s-input-container">
                        <span>Brief description of what it is about...</span>
                        <input
                          type="text"
                          autoComplete="off"
                          className="s-text-input-b"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                        />
                      </label>
                      <button type="submit" className="learn-more-r">
                        <span className="circle-r" aria-hidden="true">
                          <span className="icon-r arrow-r"></span>
                        </span>
                        <span
                          style={{ color: "white" }}
                          className="button-text"
                        >
                          SEND
                        </span>
                      </button>
                    </form>
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
