import "./Contact.scss";
import "./AboutUs.scss";
import Footer from "../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  let containerr = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".a-hero-video:after");
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(containerr, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="houseover">
        <section className="hero-wrapper">
          <div className="flexCenter hero-container">
            {/*left side*/}
            <div className="hero-left">
              <div className="c-hero-title">
                <h1>Curiosity, purpose & passion</h1>
              </div>

              <div className="flexColStart c-hero-des">
                <span>
                  We are an exquisite outfit that includes both technically
                  heavy development and razor-sharp design skills. Because we
                  are convinced that it is the best way to develop and deliver
                  fully-cast and well-worked solutions.
                </span>
              </div>
            </div>
            {/*right side*/}
          </div>
        </section>
        <section className="a-hero2-wrapper">
          <div
            className="c-arrow-container"
            onClick={scrollToBottom}
            style={{ cursor: "pointer" }}
          >
            <div className="c-arrow-down">
              <img src="./arrow-down.png" alt="" />
            </div>
          </div>
          <div ref={(el) => (containerr = el)} className="containerr">
            <div className="a-hero-video">
              <img ref={(el) => (image = el)} src="./img3.png" alt="Contact" />
            </div>
          </div>
        </section>
        <section className="a-next-part">
          <div className="inner-next-part">
            <div className="next-des">
                <span>
                  We are constantly curious and driven by the desire to always
                  make things even better. We never jump over where the bar is
                  lowest and engage 100% in our customers' goals.
                </span>
            </div>
            <div className="stat-list">
                <div className="smart-flash">
                  <h2>100+</h2>
                  <div className="short-line"></div>
                  <span>Successful solutions</span>
                </div>
                <div className="smart-flash">
                  <h2>100%</h2>
                  <div className="short-line"></div>
                  <span>Employees in Nigeria</span>
                </div>
                <div className="smart-flash">
                  <h2>10</h2>
                  <div className="short-line"></div>
                  <span>Years of experience</span>
                </div>
            </div>
          </div>
        </section>
        <div className="foreground">
          <div className="imagebox__image">
            <img src="./img2.png" alt="Rogers&Co." />
          </div>
          <div className="foreground-module__square"></div>
        </div>

        <section className="next-info">
          <div className="background-module__inner">
            <div className="label-section">
                <div className="text-line">
                  <h3>Quality</h3>
                  <div className="line"></div>
                </div>

              <div className="label-des">
                  <span>
                    Our goal is to be the leading technology organization in
                    Africa, transforming possibilities, uniting software and
                    hardware to redefine the future. Therefore, we steer clear
                    of tasks that involve sloppiness and 'quick patch
                    solutions'. We are interested in delivering flexible and
                    future-proof code and solutions that we can build on.
                  </span>
                  <span>
                    With a structured approach to the projects we work on, and
                    in collaboration with our customers, we believe we can
                    organize the optimal processes. This means that we enter
                    into transparent and long-term relationships with our
                    customers.
                  </span>
              </div>
            </div>
            <div className="label-section">
                <div className="text-line">
                  <h3>Team</h3>
                  <div className="line"></div>
                </div>

              <div className="label-des">
                  <span>
                    We are a team of very different people - but what we all
                    have in common is that we are passionate about our work and
                    want to make a difference. We love diversity because we
                    believe that inspiration and creative problem solving are
                    more likely to arise at the intersection of different ways
                    of thinking.
                  </span>
              </div>
            </div>
          </div>
        </section>
        <section className="last-one">
          <div className="last-ddiv">
            <div className="last-right">
                <h2>A culture based on collaboration</h2>
                <span>
                  The development of business-critical solutions is driven by
                  interest, curiosity and the will to improve. That is why we
                  cultivate an environment that provides room for
                  experimentation, sharing knowledge and trying new things.
                  Respect for each other's field of expertise and skills and
                  always hungry to learn new things. We believe that a fun and
                  relaxed everyday life creates the necessary framework for us
                  to be innovative and at the forefront of development.
                </span>
            </div>
              <div className="last-left">
                <img src="./img1.png" alt="" />
              </div>
          </div>
        </section>

        <section className="last-last">
          <div className="last-links">
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <div className="link-box">
                  <div className="line-link"></div>
                  <h3>See our projects</h3>
                  <img src="./arrow-forward.png" alt="" />
                </div>
              </Link>
          </div>
        </section>

        <div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
