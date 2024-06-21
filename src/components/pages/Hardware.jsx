import React from "react";
import "./Software.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Hardware = () => {
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
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="hero-wrapper">
        <div className="flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>Hardware</h1>
            </div>

            <div className="hero-des">
              <span>
                We develop tailored, complex web applications and systems in the
                form of applications, online services, apps, intranets and
                extranets.
              </span>
            </div>
          </div>
          {/*right side*/}
        </div>
      </section>
      <section className="hero2-wrapper-new">
          <div className="arrow-container" onClick={scrollToBottom}>
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
        <div className="a-hero-video">
          <img src="./img38.png" alt="Software" />
        </div>
      </section>
      <section className="flexCenter paddings hero3-wrapper">
        <div className="content">
            <div className="first-title">
              <h2>Our services</h2>
            </div>
          <div className="services-des">
            <Link
              className="serve"
              to="/hardware-wireless-lan"
              style={{ textDecoration: "none" }}
            >
              <div className="services-container">
                  <div className="service-title">
                    <h3>Wireless LAN Distribution Network</h3>
                  </div>
                  <span>
                    Our Wireless LAN Distribution Network solutions offer
                    high-speed wireless connectivity throughout your premises,
                    ensuring reliable internet access and efficient data
                    transmission. Whether you require a wireless network for
                    your office, hotel, or educational institution, we provide
                    scalable and secure solutions that can accommodate the
                    growing demands of your business and support a wide range of
                    devices and applications.
                  </span>
                  <img src="./arrow-forward.png" alt="" />
              </div>
            </Link>
            <Link
              className="serve"
              to="/hardware-security"
              style={{ textDecoration: "none" }}
            >
              <div className="services-container">
                  <div className="service-title">
                    <h3>Security and Surveillance</h3>
                  </div>
                  <span>
                    Our advanced IP Surveillance solutions provide comprehensive
                    security and monitoring for your business or residential
                    spaces. Utilizing state-of-the-art CCTV cameras and advanced
                    network technology, we offer high-resolution video
                    surveillance systems that enable real-time monitoring and
                    recording of critical areas.
                  </span>
                  <img src="./arrow-forward.png" alt="" />
              </div>
            </Link>
            <Link
              className="serve"
              to="/hardware-renewable-energy"
              style={{ textDecoration: "none" }}
            >
              <div className="services-container">
                  <div className="service-title">
                    <h3>Renewable Energy</h3>
                  </div>
                  <span>
                    Our team is dedicated to providing sustainable and
                    eco-friendly renewable energy solutions. We offer a range of
                    services, including solar panel installations for
                    residential and commercial properties. Our team of experts
                    is committed to helping you make the transition to renewable
                    energy, reducing your carbon footprint, and securing a
                    greener future.
                  </span>
                  <img src="./arrow-forward.png" alt="" />
              </div>
            </Link>
          </div>
          <div className="second-title">
            <h2>Related Cases</h2>
          </div>
        </div>
      </section>
      <section className="case-section">
        <div className="cases-contain">
          <div className="cases">
            <div className="hover01 column">
              <div className="containing">
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
              </div>
              <div className="containing">
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
              </div>
              <div className="containing">
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
              </div>
            </div>
          </div>
          <div className="adesokan-div">
            <div className="left">
                <div>
                  <img src="./line3.png" alt="" />
                </div>
                <div>
                  <img src="./img15.png" alt="" />
                </div>
                <div className="adesokan">
                  <span>Adesokan & Adesokan</span>
                </div>
                <span>
                  Adesokan & Adesokan
                  <br /> LLP
                  <br />
                  Managing Partner
                </span>
            </div>
              <span>
                "The IP Video Surveillance service has revolutionized our
                security approach. With high-definition cameras and advanced
                technology, we now monitor our premises with unmatched clarity,
                deterring threats and gaining valuable operational insights.
                It's an invaluable asset that enhances our safety and business
                strategy."
              </span>
          </div>
          {/* <section className="">
            <div className="contact">
                <div className="contact-text">
                  <span>
                    Contact us if you want to hear more about how we can help
                    with your project
                  </span>
                </div>
              <div className="grid-div">
                <div className="input-stuffs">
                  <div className="input-short">
                      <div className="input-left">
                        <div className="s-input-container">
                          <span>Name</span>
                          <input
                            type="text"
                            autoComplete="off"
                            className="s-text-input"
                            id="username"
                          />
                        </div>
                        <div className="s-input-container">
                          <span>E-mail</span>
                          <input
                            type="text"
                            autoComplete="off"
                            className="s-text-input"
                            id="username"
                          />
                        </div>
                        <div className="s-input-container">
                          <span>Brief description of what it is about...</span>
                          <input
                            type="text"
                            autoComplete="off"
                            className="s-text-input-b"
                            id="username"
                          />
                        </div>
                        <div className="s-btn-send">
                          <span>SEND</span>
                          <img src="./arrow-forward.png" alt="" />
                        </div>
                      </div>
                  </div>
                </div>
                <div className="grid2-div">
                    <div className="person-contain-s">
                      <img src="./img16.png" alt="" />
                      <h3>Ayorinde Aderoju</h3>
                      <span>
                        Managing Partner <br />
                        Tel:
                        <br />
                        @rogers.co
                      </span>
                    </div>
                    <div className="person-contain-s">
                      <img src="./img16.png" alt="" />
                      <h3>Ayorinde Aderoju</h3>
                      <span>
                        Managing Partner <br />
                        Tel:
                        <br />
                        @rogers.co
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </section>
      <section className="houseover">
        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Hardware;
