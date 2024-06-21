import React, { useEffect, useRef } from "react";
import "./Swish.scss";

import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const Osborne = () => {
  let containerr = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".a-hero-video:after");
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(containerr, 1, { css: { visibility: "visible" } })
      .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
  });
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const { ref: myRef, inView: isVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: myRef2, inView: isVisible2 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/*left side*/}
          <div className="hero-left">
            <div className="hero-title">
              <h1>Osborne Towers</h1>
            </div>

            <div className="flexColStart hero-des">
              <div className="about-list">
                  <div className="a-list-item">
                    <span>Customer</span>
                    <h2>Osborne Towers</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Industry</span>
                    <h2>Automation</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Assignment</span>
                    <h2>Home Automation</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Website</span>
                    <a href="">nil</a>
                  </div>
              </div>
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
            <img ref={(el) => (image = el)} src="./auto4.jpg" alt="NDH" />
          </div>
        </div>
      </section>
      <section className="sw-next-part2">
        <div className="next-div">
            <span>Home Audio, Video, and Lighting Automation</span>
          <section className="sw-next-info">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                    <h3>The task</h3>
                    <div className="line"></div>
                </div>

                <div className="label-des">
                    <span>
                      The challenge before us encompassed pioneering a visionary
                      approach to home audio, video, and lighting automation,
                      aimed at establishing new benchmarks within the industry.
                      This endeavor was driven by the aspiration to shape a
                      future where cutting-edge technology, seamless
                      integration, and exceptional user satisfaction
                      harmoniously unite.
                    </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground">
          <div className="imagebox__image">
            <img src="./auto2.jpg" alt="Rogers&Co." />
          </div>
        <div className="sw-foreground-module__square"></div>
      </div>
      <section className="sw-next-part">
        <div className="next-div">
            <span>Seamless Integration, and Exceptional User Satisfaction</span>
          <section className="sw-next-info2">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                    <h3>The solution</h3>
                    <div className="line"></div>
                </div>

                <div className="label-des">
                    <span>
                      In the present landscape of the real estate industry,
                      marked by a burgeoning desire for intelligent residences,
                      the pivotal task at hand was the development of an
                      integrated and harmonious smart control system. This
                      system was meticulously designed to imbue each home with a
                      distinctive and inviting ambiance, all the while upholding
                      uncompromising standards of excellence and ushering in a
                      new era of advanced automation. In a realm where smart
                      homes have become the embodiment of modern living, this
                      project's success hinged upon crafting an innovative
                      solution that seamlessly blends cutting-edge technology
                      with a warm, personalized touch, elevating the concept of
                      home automation to unprecedented heights.
                    </span>
                    <span>The project was executed in 2 months.</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground2">
        <div className="sw-foreground-module__square2"></div>
          <div className="imagebox__image">
            <img src="./auto6.jpg" alt="MData Solutions" />
          </div>
      </div>
      <section className="div">
        <div className="img-housing2">
            <div className="imagebox__image">
              <img src="./auto5.png" alt="Rogers&Co." />
            </div>
        </div>

          <div className="imagebox__image">
            <img src="./auto7.jpg" alt="Rogers&Co." />
          </div>

        {/* <div className="img-housing2">
            <div className="imagebox__image">
              <img src="./yato3.jpeg" alt="Rogers&Co." />
            </div>
        </div> */}
      </section>
      <section className="see-more-cases">
          <div className="case-link-box" onClick={goBack}>
            <h3>See more cases</h3>
            <div className="bto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="10"
                viewBox="0 0 32 10"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.89798 5.46055L4.34198 7.90555L4.33298 9.31055L0.00798416 4.98555L4.38799 0.605547L4.37798 2.02855L1.89898 4.46055L45.998 4.46055V5.46055L1.89798 5.46055Z"
                  fill="black"
                />
              </svg>

              <h4>Back to the case overview</h4>
            </div>
          </div>
        <div className="cases cases-c">
          <div className="hover01 column">
            <div className="containing">
              <div ref={myRef} className="box">
                <figure
                  style={{ background: "#7d01d1" }}
                  className={isVisible ? "animated-figure" : "figure"}
                >
                  <img src="./img12.png" />
                </figure>
              </div>
                <h2>Digitization of company records.</h2>
                <h3>Ministry of Aviation</h3>
            </div>
            <div className="containing">
              <div ref={myRef2} className="box">
                <figure
                  style={{ background: "#84969A" }}
                  className={isVisible2 ? "animated-figure" : "figure"}
                >
                  <img src="./img13.png" />
                </figure>
              </div>
                <h2>Branding Identitiy Develepment & Design.</h2>
                <h3>Yato</h3>
            </div>
            <div className="containing">
              <div ref={myRef2} className="box">
                <figure
                  style={{ background: "#84969A" }}
                  className={isVisible2 ? "animated-figure" : "figure"}
                >
                  <img src="./img4.png" />
                </figure>
              </div>
                <h2>Solar Inverter Systems </h2>
                <h3>Afijio PHC</h3>
            </div>
          </div>
        </div>
        <section className="last-last">
          <div className="last-links">
              <Link to="/projects" style={{ textDecoration: "none" }}>
                <div className="link-box">
                  <div className="line-link"></div>
                  <h3>Read more about our Software development here</h3>
                  <img src="./arrow-forward.png" alt="" />
                </div>
              </Link>
          </div>
        </section>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Osborne;
