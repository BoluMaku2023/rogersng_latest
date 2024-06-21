import "./Software.css";
import Header from "../Header/Header";
import Footer from "../OtherComponents/Footer";
import { Link, useNavigate } from "react-router-dom";

import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Software = () => {
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
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  let containerr = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".a-hero-video:after");
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(containerr, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });
  return (
    <>
      <section className="hero-wrapper">
        <div className="flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>Software</h1>
            </div>

            <div className="flexColStart hero-des">
              <span>
                We develop tailored, complex web applications and systems in the
                form<br></br> of applications, online services, apps, intranets
                and extranets.
              </span>
            </div>
          </div>
          {/*right side*/}
        </div>
      </section>
      <section className="hero2-wrapper-new">
          <div className="arrow-container" onClick={goBack}>
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
        <div ref={(el) => (containerr = el)} className="containerr">
          <div className="a-hero-video">
            <img ref={(el) => (image = el)} src="./img14.png" alt="Contact" />
          </div>
        </div>
      </section>
      <section className="flexCenter hero3-wrapper">
        <div className="content">
            <div className="first-title">
              <h2>Our services</h2>
            </div>
          <div className="services-des">
            <Link
              to="/software-design"
              className="serve"
              style={{ textDecoration: "none" }}
            >
              <div className="services-container">
                  <div className="service-title">
                    <h3>Design</h3>
                  </div>
                  <span>
                    The Rogers & Co. design team is dedicated to re-imagining
                    how brands, businesses and organizations are perceived. We
                    specialize in bringing digital identities into the real
                    world. While very diverse, our aesthetic approach often
                    involves a distinct sense of style and design, aiming to
                    combine out-of-the-box design with functionality.
                    Strategically, our work aims to elevate brand offerings by
                    distilling core messaging down to its clearest and freshest
                    visual form.{" "}
                  </span>
                  <img src="./arrow-forward.png" alt="" />
              </div>
            </Link>
            <Link
              className="serve"
              to="/software-product"
              style={{ textDecoration: "none" }}
            >
              <div className="services-container">
                  <div className="service-title">
                    <h3>Product Development</h3>
                  </div>
                  <span>
                    At Rogers & Co, our Software Product Development department
                    sets the standard for excellence in the industry. Our team
                    of expert developers and designers are dedicated to creating
                    cutting-edge products that solve real-world problems and
                    drive business success. With a focus on user-centered design
                    and the latest technology, we deliver solutions that not
                    only meet, but exceed expectations.
                  </span>
                  <img src="./arrow-forward.png" alt="" />
              </div>
            </Link>
            <Link
              className="serve"
              to="/software-softwaredev"
              style={{ textDecoration: "none" }}
            >
              <div className="services-container">
                  <div className="service-title">
                    <h3>Software Development</h3>
                  </div>
                  <span>
                    At Rogers & Co, our Software Development team is composed of
                    highly skilled and knowledgeable professionals who are
                    dedicated to delivering innovative software solutions. Our
                    process is guided by Agile methodologies, such as Scrum and
                    Kanban, to ensure flexibility and responsiveness in response
                    to the ever-changing needs of our clients.
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
      <section className="s-case-section">
        <div className="cases-contain">
          <div className="cases">
            <div className="column">
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
                "Embracing an Electronic Document Management System (EDMS) was a
                game-changer for our organization. The seamless transition from
                paper to digital documents not only streamlined our workflow but
                also revolutionized how we collaborate. Retrieving crucial
                information now takes seconds, not hours, boosting our
                efficiency and productivity. The EDMS service has truly
                empowered us to work smarter and faster, making it an
                indispensable asset for our business."
              </span>
          </div>
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

export default Software;
