import React, { useEffect, useRef } from "react";
import "./Swish.scss";

import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const Jaybion = () => {
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
              <h1>Jaybion Pharmacy</h1>
            </div>

            <div className="flexColStart hero-des">
              <div className="about-list">
                  <div className="a-list-item">
                    <span>Customer</span>
                    <h2>Jaybion Pharmacy</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Industry</span>
                    <h2>Security</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Assignment</span>
                    <h2>IP Video Surveillance</h2>
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
            <img
              ref={(el) => (image = el)}
              src="./jaybion.jpeg"
              alt="Nycil Limited"
            />
          </div>
        </div>
      </section>
      <section className="sw-next-part2">
        <div className="next-div">
            <span>
              Comprehensive Installation of Cutting-Edge IP Video Surveillance
              Systems{" "}
            </span>
          <section className="sw-next-info">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                    <h3>The task</h3>
                    <div className="line"></div>
                </div>

                <div className="label-des">
                    <span>
                      The objective before us encompassed the establishment of a
                      pioneering and visionary enterprise specializing in the
                      comprehensive installation of cutting-edge IP Video
                      Surveillance systems. This ambitious endeavor aimed to
                      redefine industry standards by seamlessly integrating
                      advanced technologies, enabling a transformative shift in
                      the realm of security and surveillance.
                    </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground">
          <div className="imagebox__image">
            <img src="./jaybion1.jpg" alt="Rogers&Co." />
          </div>
        <div className="sw-foreground-module__square"></div>
      </div>
      <section className="sw-next-part">
        <div className="next-div">
            <span>Innovative IP Video Surveillance Solution</span>
          <section className="sw-next-info2">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                    <h3>The solution</h3>
                    <div className="line"></div>
                </div>

                <div className="label-des">
                    <span>
                      The objective at hand was to pioneer a groundbreaking and
                      visionary enterprise, one that specializes in the
                      comprehensive installation of cutting-edge IP Video
                      Surveillance systems. This ambitious pursuit aimed to
                      transcend conventional norms, elevating the very essence
                      of security through the seamless integration of advanced
                      technologies.
                    </span>
                    <span>
                      The backbone of this transformative narrative was the
                      adoption of IP Video Surveillance systems that seamlessly
                      melded with the digital age. It was the embodiment of our
                      commitment to lead the path into a future where security
                      would not merely be a static concept, but a dynamic and
                      proactive force. Through the lens of advanced cameras,
                      smart analytics, and real-time connectivity, a symphony of
                      protection would be orchestrated, ready to respond, alert,
                      and ensure safety.
                    </span>
                    <span>
                      In summation, our objective was an affirmation of our
                      dedication to shape the future of security and
                      surveillance.
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
            <img src="./jaybion2.jpg" alt="MData Solutions" />
          </div>
      </div>
      <section className="div">
        <div className="img-housing2">
            <div className="imagebox__image">
              <img src="./nycil3.jpg" alt="Rogers&Co." />
            </div>
        </div>

          <div className="imagebox__image">
            <img src="./nycil4.jpg" alt="Rogers&Co." />
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

export default Jaybion;
