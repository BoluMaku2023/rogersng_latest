import React, { useEffect, useRef } from "react";
import "./Swish.scss";

import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const MDataSolutions = () => {
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
              <h1>MData Solutions</h1>
            </div>

            <div className="flexColStart hero-des">
              <div className="about-list2">
                  <div className="a-list-item">
                    <span>Customer</span>
                    <h2>MData Solutions</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Industry</span>
                    <h2>Web Application</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Assignment</span>
                    <h2>Brand Identity Development & Design</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Website</span>
                    <a href="https://mdatasolutions.com.ng/" target="blank">
                      mdatasolutions.com.ng
                    </a>
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
            <img
              ref={(el) => (image = el)}
              src="./mdata.png"
              alt="MData Solutions"
            />
          </div>
        </div>
      </section>
      <section className="sw-next-part2">
        <div className="next-div">
            <span>Corporate Website for Managed Data Solutions.</span>
          <section className="sw-next-info">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                    <h3>The task</h3>
                    <div className="line"></div>
                </div>

                <div className="label-des">
                    <span>
                      The task encompassed the creation of an innovative
                      corporate website and web application for the client, with
                      a primary emphasis on Project Management and Information
                      Technology. This initiative aimed to cater to the needs of
                      a progressive project management company, aligning with
                      their forward-thinking approach.
                    </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground">
        <div className="imagebox__image">
          <img src="./mdata1.jpg" alt="Rogers&Co." />
        </div>
        <div className="sw-foreground-module__square"></div>
      </div>
      <section className="sw-next-part">
        <div className="next-div">
            <span>Spearheading a Cutting-Edge Corporate Website</span>
          <section className="sw-next-info2">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                    <h3>The solution</h3>
                    <div className="line"></div>
                </div>

                <div className="label-des">
                    <span>
                      The challenge at hand entailed a multifaceted endeavor
                      that revolved around the conceptualization and realization
                      of a visionary corporate website. Central to this
                      ambitious undertaking was the fusion of Project Management
                      and Information Technology, forming a harmonious synergy
                      that aimed to redefine the landscape of modern project
                      management practices.
                    </span>
                    <span>
                      At its core, this initiative was driven by an unwavering
                      commitment to bolstering the capabilities of a
                      forward-looking project management company. The foundation
                      of success rested upon the creation of a dynamic and
                      user-centric corporate website, serving as the digital
                      embodiment of the company's ethos and proficiency in
                      orchestrating intricate projects.
                    </span>
                    <span>
                      By leveraging the latest advancements in web technologies
                      and user experience design, the resulting corporate
                      digital ecosystem emerges as a testament to the
                      convergence of innovation and operational excellence.
                    </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground2">
          <div className="sw-foreground-module__square2"></div>
          <div className="imagebox__image">
            <img src="./mdata3.png" alt="MData Solutions" />
          </div>
      </div>
      <section className="div">
          <div className="imagebox__image">
            <img src="./mdata2.jpg" alt="Rogers&Co." />
          </div>
          <div className="img-housing">
            <div className="imagebox__image">
              <img src="./mdata4.png" alt="Rogers&Co." />
            </div>
          </div>
        s
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
                  <img src="./case4.png" />
                </figure>
              </div>
                <h2>File Management System | Corporate Website.</h2>
                <h3>MDocScan</h3>
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

export default MDataSolutions;
