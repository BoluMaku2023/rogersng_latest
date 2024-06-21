import React, { useEffect, useRef } from "react";
import "./Swish.scss";

import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../OtherComponents/Footer";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";

const BUAph = () => {
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
              <h1>BUA Sugar Refinery (P/Harcourt)</h1>
            </div>

            <div className="flexColStart hero-des">
              <div className="about-list">
                  <div className="a-list-item">
                    <span>Customer</span>
                    <h2>BUA Sugar Refinery (P/Harcourt)</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Industry</span>
                    <h2>Automation</h2>
                  </div>
                  <div className="a-list-item">
                    <span>Assignment</span>
                    <h2>Addressable Fire Alarm System</h2>
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
            <img ref={(el) => (image = el)} src="./fire6.jpg" alt="BUA Sugar" />
          </div>
        </div>
      </section>
      <section className="sw-next-part2">
        <div className="next-div">
            <span>
              Spearheading Cutting-Edge Addressable Fire Alarm System
              Installations
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
                      installation of cutting-edge Addressable Fire Alarm
                      Systems. This endeavor aspired to redefine industry norms
                      and pave the path toward a future where technological
                      advancement, operational efficiency, and unmatched client
                      contentment seamlessly intertwine.
                    </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="sw-foreground">
          <div className="imagebox__image">
            <img src="./fire2.jpg" alt="Rogers&Co." />
          </div>
        <div className="sw-foreground-module__square"></div>
      </div>
      <section className="sw-next-part">
        <div className="next-div">
            <span>Embarking on an Innovative Odyssey</span>
          <section className="sw-next-info2">
            <div className="sw-background-module__inner">
              <div className="sw-label-section">
                <div className="text-line">
                    <h3>The solution</h3>
                    <div className="line"></div>
                </div>

                <div className="label-des">
                    <span>
                      The mission presented before us transcended the ordinary,
                      calling for the creation of a pioneering and
                      forward-looking venture dedicated to the meticulous
                      installation of state-of-the-art Addressable Fire Alarm
                      Systems. At its core, this endeavor was grounded in a
                      resolute ambition to transcend established industry norms
                      and lead the charge into a future characterized by a
                      harmonious confluence of technological ingenuity,
                      operational prowess, and unparalleled client satisfaction.
                    </span>
                    <span>
                      The blueprint of our vision was nothing short of
                      revolutionary. As architects of fire safety, we envisioned
                      an enterprise that would set new standards, redefining the
                      very landscape of fire detection and prevention. Our
                      approach was anchored in the belief that the foundation of
                      any remarkable installation goes beyond technical
                      precision—it's about crafting an environment where safety,
                      security, and innovation seamlessly intertwine.
                    </span>
                    <span>
                      To bring this vision to life, we harnessed cutting-edge
                      technologies, meticulous planning, and a team of experts
                      driven by a passion for safeguarding lives and property.
                      Our installations were not just mechanisms; they were
                      symphonies of safety, meticulously orchestrated to
                      harmonize seamlessly with the built environment.
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
            <img src="./fire3.webp" alt="MData Solutions" />
          </div>
      </div>
      <section className="div">
        <div className="img-housing2">
            <div className="imagebox__image">
              <img src="./fire7.jpg" alt="Rogers&Co." />
            </div>
        </div>

          <div className="imagebox__image">
            <img src="./fire5.jpg" alt="Rogers&Co." />
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

export default BUAph;
